import React from 'react';
import data from './data.js'
import QuestionsContainer from './QuestionsContainer'
import GameContainer from './GameContainer.js'
import Submit from './Submit.js'
import './App.css'
import './QuestionsContainer.css'


class App extends React.Component {

  state = {
    game: "not playing"

  }

  handleNewGameClick = (event)=>{
    this.setState({
      game: "playing"
    })
  }

  render(){

    // console.log(this.state.game)

    if (this.state.game === "playing") {
      return (
        <div className="App">
        <h1 className = "title">Lutrivia</h1>
          <GameContainer
          questions = {data.questions}
          game = {this.state.game}
          handleNewGameClick={this.handleNewGameClick}
          />
          <QuestionsContainer
           questions = {data.questions}
           game = {this.state.game}
           handleNewGameClick={this.handleNewGameClick}
          
           />
        </div>
      );
    } else if (this.state.game === "not playing") {
      return (
        <div className="App">
        <h1 className = "title">Lutrivia</h1>
        <GameContainer
        questions = {data.questions}
        game = {this.state.game}
        handleNewGameClick={this.handleNewGameClick}
        />
        </div>
      );

    }else if (this.state.game === "finished") {
      return(
        <Submit/>
      )
    }
  }



}

export default App;
