import { ReactComponent as SunIcon } from "../../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";
import { ReactComponent as SystemThemeIcon } from "../../assets/images/icon-system-theme.svg";
import { ReactComponent as SansSerifIcon } from "../../assets/images/icon-font-sans-serif.svg";
import { ReactComponent as SerifIcon } from "../../assets/images/icon-font-serif.svg";
import { ReactComponent as MonospaceIcon } from "../../assets/images/icon-font-monospace.svg";

export const colorModeOption = {
  type: "colorMode",
  title: "Color Theme",
  subTitle: "Choose your color theme:",
  options: [
    {
      id: "light",
      icon: SunIcon,
      title: "Light Mode",
      subTitle: "Pick a clean and classic light theme",
    },
    {
      id: "dark",
      icon: MoonIcon,
      title: "Dark Mode",
      subTitle: "Select a sleek and modern dark theme",
    },
    {
      id: "system",
      icon: SystemThemeIcon,
      title: "System",
      subTitle: "Adapts to your device’s theme",
    },
  ],
};

export const fontStyleOption = {
  type: "fontStyle",
  title: "Font Theme",
  subTitle: "Choose your font theme:",
  options: [
    {
      id: "sans-serif",
      icon: SansSerifIcon,
      title: "Sans-serif",
      subTitle: "Clean and modern, easy to read.",
    },
    {
      id: "serif",
      icon: SerifIcon,
      title: "Serif",
      subTitle: "Classic and elegant for a timeless feel.",
    },
    {
      id: "monospace",
      icon: MonospaceIcon,
      title: "Monospace",
      subTitle: "Code-like, great for a technical vibe.",
    },
  ],
};
