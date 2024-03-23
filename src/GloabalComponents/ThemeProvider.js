import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);  
  const setThemeMode = (mode) => setTheme(mode);

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
const useThemeHook = () => {
  const { theme } = useContext(ThemeContext);
  return [theme];
};
export { ThemeProvider, ThemeContext, useThemeHook };

// import React, { createContext, useState, useEffect, useContext } from "react";

// Imports necessary modules from React, including createContext, useState, useEffect, and useContext.
// const ThemeContext = createContext();

// Creates a new context object called ThemeContext.
// const ThemeProvider = (props) => { ... };

// Defines a functional component called ThemeProvider. This component serves as a provider for the theme context.
// Inside the component:

// Initializes state for the theme using the useState hook. It retrieves the theme value from local storage or sets it to false if it doesn't exist.
// Uses the useEffect hook to store the theme value in local storage whenever it changes.
// Defines a function setThemeMode to update the theme state.
// Renders the ThemeProvider component with props.children wrapped inside the ThemeContext.Provider. This allows components nested within ThemeProvider to access the theme context.
// const useThemeHook = () => { ... };

// Defines a custom hook called useThemeHook, which allows components to access the theme context without explicitly using ThemeContext.Consumer.
// Inside the hook:

// Uses the useContext hook to access the theme context.
// Returns the theme value obtained from the context.
// export { ThemeProvider, ThemeContext, useThemeHook };

// Exports ThemeProvider, ThemeContext, and useThemeHook to make them available for use in other parts of the application.
