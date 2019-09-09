import React from "react";
import "./style.css";


const Main = props => (
    <div className="pics" onClick={() => props.shuffleCards(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );


// function Main(props) {
//     return (
//         <div className="content">
//             <div className = "container">
//                 <div className = "row">
//                  <strong>Name:</strong> {props.name}
//                     <img className = "pics img-fluid" alt={props.name} src={props.image} />

//                 </div>
//             </div>
//         </div>
//     )
// }

export default Main;
