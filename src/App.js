import React, { Component } from "react";
import './App.css';
import Title from "./components/Title/Title"
import images from "./images.json";
import Main from "./components/Main/Main"
import Score from "./components/Score/Score"
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer"

class App extends Component {
  // Setting this.state.images to the cards json array
  state = {
    images,
    clickedImages: [],
    score: 0,
    highScore:0,
    goal: 15,
    status: ""
  };

  //shuffle the cards in the browser when clicked
  shuffleCards = id => {
    let clickedImages = this.state.clickedImages;
   

    if(clickedImages.includes(id)){
      this.setState({ 
        clickedImages: [], 
        score: this.state.score, 
        highScore:this.state.score,
        status:  "Game Over! You clicked the same image twice! Click on an image or refresh the page to play again." });
        if (this.state.score > this.state.highScore ) {
          this.setState({
            highScore: this.state.score
          });
        }
          else{
            this.setState({
              highScore:this.state.highScore
            })
          }
        
     
      return;
    }else{
      clickedImages.push(id)

      if(clickedImages.length === 15){
        this.setState({score: 15, 
          status: "You Won!", 
          clickedImages: []});
        console.log('You Win');
        return;
      }

      this.setState({ 
        images, 
        clickedImages, 
        highScore: this.state.highScore,
        score: clickedImages.length, 
        status: " " });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  // Map over this.state.images and render a card component for each image object
  render() {
    return (
      <Wrapper>
        <Title> Game of Thrones Clicky Game</Title>
        <Score total={this.state.score}
               goal={15}
               status={this.state.status}
               highscore={this.state.highScore}
               />
        {this.state.images.map(image => (
           <Main
           shuffleCards ={this.shuffleCards}
           id={image.id}
           key={image.id}
           name={image.name}
           image={image.image}
         />
        ))}
          <Footer> copyright @Gcriste 2019</Footer>
      </Wrapper>
      
    
    );
  }
}

export default App;