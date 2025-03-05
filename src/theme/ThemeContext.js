import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";

const KEY = "note-app-opts";

const defaultOptions = {
  colorMode: "light",
  fontStyle: "serif",
};

const getStoredOptions = () => {
  try {
    const storedOptions = localStorage.getItem(KEY);
    return storedOptions ? JSON.parse(storedOptions) : defaultOptions;
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return defaultOptions;
  }
};

const saveOptions = (options) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(options));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const StyledThemeProvider = ({ children }) => {
  const [themeOptions, setThemeOptions] = useState(getStoredOptions);

  useEffect(() => {
    saveOptions(themeOptions);
  }, [themeOptions]);

  const setColorMode = (colorMode) => {
    setThemeOptions((prev) => ({
      ...prev,
      colorMode,
    }));
  };

  const setFontStyle = (fontStyle) => {
    setThemeOptions((prev) => ({
      ...prev,
      fontStyle,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{ themeOptions, setThemeOptions, setColorMode, setFontStyle }}
    >
      <ThemeProvider
        theme={themeOptions.colorMode === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
