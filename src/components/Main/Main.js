import React from "react";
import "./style.css";


function Main(props) {
    return (
        <div className="content">
            <div className = "container">
                <div className = "row">

            <strong>Name:</strong> {props.name}
          <img class = "img-fluid" alt={props.name} src={props.image} />

      </div>
      </div>
      </div>
    )
}

export default Main
