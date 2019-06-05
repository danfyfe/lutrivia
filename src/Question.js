import React from 'react'
// import TrueButton from './TrueButton.js'
// import FalseButton from './FalseButton.js'

class Question extends React.Component{
  state = {
    correct: "",
    alreadyAnsweredQuestion: false
  }

  handleClick = (event) => {
    this.setState({
      alreadyAnsweredQuestion: true
    })

    if (!this.state.alreadyAnsweredQuestion) {
      if (event.target.value === this.props.question.answer.toString()) {
        event.target.style.backgroundColor = "#cefb79"
        this.setState({correct: true})
      } else {
        event.target.style.backgroundColor = "#fb686c"
        this.setState({correct: false})
      }
    }
  }

  nextQuestion = () => {
    this.props.answerQ(this.props.qIndex)
    if (this.state.correct) {
      this.props.incrementScore()
    }
  }


  render(){
    return(
      <div className = "question-div">
        <p>{this.props.question.text}</p>
        <button onClick={this.handleClick} value="true">True</button>
        <button onClick={this.handleClick} value ="false">False</button>
        {
          this.state.alreadyAnsweredQuestion ?
          <button onClick={this.nextQuestion}>Next Question</button> :
          null
        }
      </div>
    )
  }
}


export default Question