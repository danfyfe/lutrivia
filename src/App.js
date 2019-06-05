import React from 'react';
import data from './data.js'
import QuestionsContainer from './QuestionsContainer'
import GameContainer from './GameContainer.js'
import Submit from './Submit.js'
import './App.css'
import './QuestionsContainer.css'


class App extends React.Component {

  state = {
    game: "not playing",
    score: 0,
    unaQs: [...data.questions], // UNANSWERED QUESTIONS
    aQs: [] // ANSWERED QUESTIONS
  }

  handleNewGameClick = (event)=>{
    this.setState({
      game: "playing"
    })
  }

  incrementScore = () => this.setState({score: this.state.score + 1})

  answerQ = i => {
    const unaQsCopy = [...this.state.unaQs]
    unaQsCopy.splice(i)

    this.setState({
      aQs: [...this.state.aQs, this.state.unaQs[i]],
      unaQs: unaQsCopy
    })
  }

  render(){
    // console.log(this.state.game)

    // if (this.state.game === "playing") {
      return (
        <div className="App">
        <h1 className = "title">Lutrivia</h1>
          <GameContainer
            game = {this.state.game}
            handleNewGameClick={this.handleNewGameClick}
          />

          {
            (this.state.game === "playing") ?
            <QuestionsContainer
               questions={this.state.unaQs}
               answerQ={this.answerQ}
             /> : null
          }

          {
            (this.state.game === "finished") ?
            <Submit /> : null
          }
        </div>
      );
    // } else if (this.state.game === "not playing") {
    //   return (
    //     <div className="App">
    //     <h1 className = "title">Lutrivia</h1>
    //     <GameContainer
    //     questions = {data.questions}
    //     game = {this.state.game}
    //     handleNewGameClick={this.handleNewGameClick}
    //     />
    //     </div>
    //   );
    //
    // }else if (this.state.game === "finished") {
    //   return(
    //     <Submit/>
    //   )
    // }
  }



}

export default App;
