import React from "react";
import "./style.css";


const Main = props => (
    <div className="pics" onClick={() => props.shuffleCards(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default Main;
