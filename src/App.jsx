
import MyRoutes from "./routers/routes";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Light, Dark } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <MyRoutes />
          <ReactQueryDevtools initialIsOpen={true}/>
        </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
