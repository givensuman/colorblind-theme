import Logo from "./components/Logo"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent
} from "./components/Select"

import screenshot from "../assets/screenshot.png"
import achromatopsia from "../assets/screenshot_achromatopsia.png"
import blueconemonochromacy from "../assets/screenshot_blueconemonochromacy.png"
import deuteranomaly from "../assets/screenshot_deuteranomaly.png"
import deuteranopia from "../assets/screenshot_tritanomaly.png"
import protanomaly from "../assets/screenshot_protanomaly.png"
import protanopia from "../assets/screenshot_protanopia.png"
import tritanomaly from "../assets/screenshot_tritanomaly.png"
import tritanopia from "../assets/screenshot_tritanopia.png"

const blindnesses = {
  "Achromatopsia": achromatopsia,
  "Blue Cone Monochromacy": blueconemonochromacy,
  "Deuteranomaly": deuteranomaly,
  "Deuteranopia": deuteranopia,
  "Protanomaly": protanomaly,
  "Protanopia": protanopia,
  "Tritanomaly": tritanomaly,
  "Tritanopia": tritanopia
}

function App() {

  return (
    <div className="bg-eerie_black min-h-screen w-full flex flex-col items-center py-16">
      <div className="max-w-4xl flex flex-col items-center">
        <Logo />
        <h1 className="text-timberwolf mt-4 text-6xl font-bold">
          Colorblind Theme
        </h1>
        <h3 className="text-timberwolf text-2xl font-bold mt-4">
          Color-blind friendly syntax highlighting for VSCode
        </h3>
        <div className="text-timberwolf text-lg mt-6">
          <h5>
            A dark theme created with accessibility in mind. Designed to provide meaningful syntax highlighting for all types of developers, with a special focus on being friendly to color-blind individuals.
          </h5>
          <h5>
            The theme is directly based on the work of <a href="https://personal.sron.nl/~pault/" className="text-blue_11 underline cursor-pointer">Paul Tol</a> in data visualization accessibility.
          </h5>
        </div>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Achromatopsia" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(blindnesses).map(([key, value], index) => {
            return <SelectItem value={value} key={index}>{key}</SelectItem>
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default App
