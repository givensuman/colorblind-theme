import json
import re
from colormath.color_objects import sRGBColor, LabColor
from colormath.color_conversions import convert_color
from colormath.color_diff import delta_e_cie2000
import yaml
import numpy

# Fix for deprecation in colormath library
# https://github.com/gtaylor/python-colormath/issues/104
def patch_asscalar(a):
    return a.item()

setattr(numpy, "asscalar", patch_asscalar)

# Load YAML palette files
def load_yaml(filename):
    with open(filename, 'r') as f:
        return yaml.safe_load(f)

base_colors = load_yaml('./base_palette.yaml')
theme_colors = load_yaml('../palette.yaml')

# Convert the array into an array of dicts
def create_theme_dict():
    color_dicts = []
    for color in (base_colors + theme_colors):
        for name, values in color.items():
            color_dict = {
                'name': name,
                'hex': values[0],
                'rgb': tuple(map(int, values[1].strip('()').split(','))),
                # 'hsl': tuple(float(val.strip('%')) for val in values[2].strip('()').split(','))
            }
            color_dicts.append(color_dict)
    return color_dicts

color_dicts = create_theme_dict()

def find_nearest_color(target_color, color_options):
    # Convert the target color to Lab color space
    target_color = convert_color(sRGBColor(*target_color), LabColor)

    min_color_diff = float('inf')
    nearest_color = None

    for color_option in color_options:
        # Convert the color option to Lab color space
        color_option = convert_color(sRGBColor(*color_option), LabColor)

        # Calculate the color difference
        color_diff = delta_e_cie2000(target_color, color_option)

        # If this color is closer than the current nearest color, update the nearest color
        if color_diff < min_color_diff:
            min_color_diff = color_diff
            nearest_color = color_option

    # Convert the nearest color back to RGB color space
    nearest_color = convert_color(nearest_color, sRGBColor)

    return (round(nearest_color.rgb_r, 0), round(nearest_color.rgb_g, 0), round(nearest_color.rgb_b, 0))

def replace_colors(obj):
    if isinstance(obj, dict):
        return {k: replace_colors(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [replace_colors(element) for element in obj]
    elif isinstance(obj, str):
        if re.match(r'^#(?:[0-9a-fA-F]{3}){1,2}$', obj):
            # Convert the hex color to an RGB tuple
            target_color = sRGBColor.new_from_rgb_hex(obj).get_value_tuple()
            target_color = tuple(int(val * 255) for val in target_color) # Convert to range [0, 255]

            # Find the nearest color in the color options
            nearest_color = find_nearest_color(target_color, [color['rgb'] for color in color_dicts])

            # Find the color dict that matches the nearest color
            nearest_color_dict = next(color for color in color_dicts if color['rgb'] == nearest_color)

            # Return the hex code of the nearest color
            return f"#{nearest_color_dict['hex']}"
        else:
            return obj
    else:
        return obj

# Read JSON template
template = {}
with open('base_template.json', 'r') as f:
    template = json.load(f)

new_json = replace_colors(template)

# Write theme to JSON
with open('../colorblind-theme.json', 'w') as f:
    json.dump(new_json, f, indent=2)
