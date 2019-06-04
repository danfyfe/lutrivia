import React from 'react';


class QuestionsContainer extends React.Component{


  render(){
    const firstFive = this.props.questions.slice(5)

    const questionDivs = firstFive.map(function(question){
      return <div key = {question.text} className = "question-div"><p>{question.text}</p>

      <button>True</button>


      <button>False</button>



      </div>
    })

    return(
      <div className="questions_container">
        {questionDivs}
      </div>
    )
  }
}

export default QuestionsContainer