import { createContext, useState } from "react";

export const GlobalContext = createContext(null);


// create global state that recieve component as children 

export function GlobalState({children}){

    const [theme,setTheme] = useState('light')
    return <GlobalContext.Provider value={{theme,setTheme}}>
        {children}
    </GlobalContext.Provider>
}
