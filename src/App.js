import React from 'react';
import data from './data.js'
import Question from './Question'
import GameContainer from './GameContainer.js'
import Submit from './Submit.js'
import './App.css'
import './QuestionsContainer.css'


class App extends React.Component {
  state = {
    game: "not playing",
    score: 0,
    unaQs: [...data.questions], // UNANSWERED QUESTIONS
    // unaQs: [data.questions[0]], // FOR TESTING, DWAI
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
    unaQsCopy.splice(i, 1)
    if (this.state.unaQs.length === 1) {
      this.setState({game: "finished"})
    }

    this.setState({
      aQs: [...this.state.aQs, this.state.unaQs[i]],
      unaQs: unaQsCopy
    })
  }

  render(){
    // console.log("unanswered questions: ", this.state.unaQs)

    const qIndex = Math.floor(Math.random() * this.state.unaQs.length)
    const randomQ = this.state.unaQs[qIndex]

    return (
      <div className="App">
      <h1 className = "title">Lutrivia</h1>
        <GameContainer
          game = {this.state.game}
          handleNewGameClick={this.handleNewGameClick}
          score={this.state.score}
        />

        {
          (this.state.game === "playing" && this.state.unaQs.length !== 0) ?
          <Question
            key={randomQ.text}
            question={randomQ}
            toggleAnswering={this.toggleAnswering}
            qIndex={qIndex}
            incrementScore={this.incrementScore}
            answerQ={this.answerQ}/> :
            null
        }

        {
          (this.state.game === "finished") ?
          <Submit /> : null
        }
      </div>
    );
  }
}

export default App;
