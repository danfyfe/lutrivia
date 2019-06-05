import React from 'react';
import Question from './Question.js'

class QuestionsContainer extends React.Component{
  
  render(){
    const firstFive = this.props.questions.slice(5)


    const questionDivs = firstFive.map((question)=>{
        return <Question key={question.text}question = {question}/>
    })

    return(
      <div className="questions_container">
        {questionDivs}
      </div>
    )
  }
}

export default QuestionsContainer