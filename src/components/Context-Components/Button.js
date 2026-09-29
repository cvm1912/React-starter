import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

function ContextButtonComponent() {

    const {theme, setTheme}= useContext(GlobalContext);

    return (
        <button onClick={()=>{
            setTheme(theme==='light'?'dark':'light')
        }}>change theme</button>
      );
}

export default ContextButtonComponent;