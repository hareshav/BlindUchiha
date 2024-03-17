import React from "react";
import "./Button.css"

function Buttons(props){
    return(<div>
        <button className="BTN">{props.btnname}</button>
    </div>)
}

export default Buttons;