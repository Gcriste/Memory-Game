import React, { Component } from "react";
import './App.css';
import Title from "./components/Title/Title"
import images from "./images.json";
import Main from "./components/Main/Main"
import Score from "./components/Score/Score"
class App extends Component {

  state = {
   images
  };



  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const images = this.state.images.filter(image => image.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ images });
  // };


render() {
  return (
     
      <div>
      <Title>Game of Thrones Clicky Game</Title>
      <Score> </Score>
      {this.state.images.map(image => (
           <Main
           id={image.id}
           key={image.id}
           name={image.name}
           image={image.image}
         />
  ))}
  </div>
   ) }
      }
export default App;
