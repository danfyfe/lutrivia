import React from 'react';
import Question from './Question.js'

class QuestionsContainer extends React.Component{
  state = {
    answering: false
  }

  toggleAnswering = () => this.setState({answering: !this.state.answering})

  handleClick = () => {

  }

  render(){
    const qIndex = Math.floor(Math.random() * this.props.questions.length)
    const randomQ = this.props.questions[qIndex]

    return(
      <div className="questions_container">
        <Question
          key={randomQ.text}
          question={randomQ}
          toggleAnswering={this.toggleAnswering}
          qIndex={qIndex} />
          
        {
          this.state.answering ?
          <button
            onClick={this.handleClick}
          >Next Question</button> :
          null
        }
      </div>
    )
  }
}

export default QuestionsContainer