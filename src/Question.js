import React from 'react'
// import TrueButton from './TrueButton.js'
// import FalseButton from './FalseButton.js'

class Question extends React.Component{
  state = {
    correct:"",
    answered: "false",
    backgroundColor:"",
    button: ""

  }

  handleClick = (event)=>{
    debugger
    this.props.toggleAnswering()
    if (event.target.value === this.props.question.answer.toString()) {
      // let currentScore = this.state.score
      this.setState({
        correct:"true",
        answered: "true",
        backgroundColor: "#cefb79",
        button: event.target.value
        // score: ++currentScore
      })
    }else{
      // let currentScore = this.state.score
      this.setState({
        correct:"false",
        answered: "true",
        backgroundColor: "#fb686c",
        button: event.target.value
        // score: currentScore
      })
    }
  }


  render(){
    if (this.state.answered === "false") {
      return(
        <div className = "question-div">
          <p>{this.props.question.text}</p>
          <button onClick={this.handleClick} value="true">True</button>
          <button onClick={this.handleClick} value ="false">False</button>
        </div>
      )
    }else {
       // question answered
       // console.log(this.state.answered)
       // console.log(this.state.correct)
       if (this.state.button === "true") {
         return(
           <div className = "question-div">
           <p>{this.props.question.text}</p>
           <button style={{backgroundColor:this.state.backgroundColor}}
           value="true">True</button>
           <button
           value ="false">False</button>
           </div>
         )
       }else {
         return(
           <div className = "question-div">
           <p>{this.props.question.text}</p>
           <button
           value="true">True</button>
           <button style={{backgroundColor:this.state.backgroundColor}}
           value ="false">False</button>
           </div>
         )
       }
    }
  }
}


export default Question