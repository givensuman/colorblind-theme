<script lang="ts">
    import ImageCompare from "$lib/ImageCompare.svelte";
    import Wrapper from "$lib/Wrapper.svelte"

    import screenshot from "../../../assets/screenshot.png"
    import screenshot_achromatopsia from "../../../assets/screenshot_achromatopsia.png"
    import screenshot_blueconemonochromacy from "../../../assets/screenshot_blueconemonochromacy.png"
    import screenshot_deuteranomaly from "../../../assets/screenshot_deuteranomaly.png"
    import screenshot_deuteranopia from "../../../assets/screenshot_deuteranopia.png"
    import screenshot_protanomaly from "../../../assets/screenshot_protanomaly.png"
    import screenshot_protanopia from "../../../assets/screenshot_protanopia.png"
    import screenshot_tritanomaly from "../../../assets/screenshot_tritanomaly.png"
    import screenshot_tritanopia from "../../../assets/screenshot_tritanopia.png"
    
</script>

<Wrapper>
    <h1>Colorblind Theme</h1>
    <ImageCompare 
        imageLeftAlt="Default Vision"
        imageLeftSrc={screenshot}
        imageRightAlt="Colorblind Vision"
        imageRightSrc={screenshot_protanopia}
    />
</Wrapper>