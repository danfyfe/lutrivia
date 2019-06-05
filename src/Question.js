import React from 'react'
// import TrueButton from './TrueButton.js'
// import FalseButton from './FalseButton.js'

class Question extends React.Component{
  state = {
    correct:"",
    answered: "false",
    backgroundColor:""
  }

  handleClick = (event)=>{
    if (event.target.value === this.props.question.answer.toString()) {
      this.setState({
        correct:"true",
        answered: "true",
        backgroundColor: "green"
      })
    }else{

      this.setState({
        correct:"false",
        answered: "true",
        backgroundColor: "red"
      })
    }
  }




  render(){
    if (this.state.answered === "false") {

      return(
        <div className = "question-div">
          <p>{this.props.question.text}</p>
          <button onClick={this.handleClick} value="true">True</button>
          <button onClick={this.handleClick} value = "false">False</button>
        </div>
      )
    }else {
       // question answered
       console.log(this.state.answered)
       console.log(this.state.correct)
       if (this.state.correct === "true") {
         return(
           <div className = "question-div">
           <p>{this.props.question.text}</p>
           <button style={{backgroundColor:this.state.backgroundColor}}value="true">True</button>
           <button style={{backgroundColor:this.state.backgroundColor}} value ="false">False</button>
           </div>
         )
      }else {
        return(
          <div className = "question-div">
          <p>{this.props.question.text}</p>
          <button style={{backgroundColor:this.state.backgroundColor}}value="true">True</button>
          <button style={{backgroundColor:this.state.backgroundColor}} value ="false">False</button>
          </div>
        )
      }
    }


  //   if (this.state.answered === "false") {
  //     console.log("not answered")
  //     return(
  //
  //       <div className = "question-div">
  //         <p>{this.props.question.text}</p>
  //         <button onClick={this.handleClick} value="true">True</button>
  //         <button onClick={this.handleClick} value = "false">False</button>
  //       </div>
  //     )
  //   }else {
  //     console.log("answered")
  //     console.log(this.state.backgroundColor)
  //
  //     if (this.state.correct === "true") {
  //
  //     }
  //     return(
  //       <div className = "question-div">
  //
  //         <p>{this.props.question.text}</p>
  //
  //
  //         <button style={{backgroundColor: this.state.backgroundColor}}onClick={this.handleClick} value="true">True</button>
  //
  //
  //         <button style={{backgroundColor: this.state.backgroundColor}} onClick={this.handleClick} value = "false">False</button>
  //       </div>
  //     )
  //   }
  //
  }
}


export default Question