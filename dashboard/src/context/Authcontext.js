import { createContext } from "react";
import Login from "../pages/login/Login";
const initial_state = {
    "user": "SUNNY",
    "loading": true,
    "error": false
}
export const Check_Authentication = createContext();
export const Nexus = ({children}) => {
    return (
        <Check_Authentication.Provider value={initial_state}>
           {children}
        </Check_Authentication.Provider>
    )
}

