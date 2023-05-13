import { useState } from "react";
import { createContext } from "react";

// ! Created this function and returned the value of context which was earlier passed below
// ! Added props.childern and given the value to  <App/ >  as that was the child element
export const ThemeContext = createContext();

// ? made saperate component for theme context as
//? 1. we can maintain state in seperate components and make the value dynamic

const CustomThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;