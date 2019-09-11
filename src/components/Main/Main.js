import React from "react";
import "./style.css";


function Main (props) {
    
    return (
    <div className="pics" onClick={() => props.shuffleCards(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        <p className = "picname"> {props.name}</p>
      </div>
    </div>
  )};

export default Main;
