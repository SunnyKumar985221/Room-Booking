import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Nexus } from "./context/Authcontext";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Nexus>
        <App />
      </Nexus>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
