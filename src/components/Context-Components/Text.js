import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

function ContextTextComponent() {

    const { theme } = useContext(GlobalContext)
    console.log(theme);
    return ( 
        <div>
            <h1 style={{fontSize: theme==='light'?'50px':'100px', background:theme==='light'?'black':'white', color:theme=='light'?'white':'black'}}>hello world</h1>
        </div>
     );
}

export default ContextTextComponent;