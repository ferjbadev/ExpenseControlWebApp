
import MyRoutes from "./routers/routes";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Ligth, Dark } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Ligth : Dark;

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
        <MyRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
