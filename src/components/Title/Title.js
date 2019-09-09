import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div>
        <h1 className="title">{props.children}</h1>  
        <h3 className = "directions"> Click on each image once. If you click on the same image twice, you lose!</h3> 
        </div>
   )
}

export default Title
