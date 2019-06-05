import React from 'react'

class FalseButton extends React.Component{
  state = {
    answered:"false",
    correct: ""
  }

  // handleClick = (event)=>{
  //   // console.log(typeof(event.target.value))
  //   if (event.target.value === this.props.question.answer.toString()) {
  //     this.setState({
  //       correct: "true",
  //       answered: "true",
  //       backgroundColor: "green"
  //     })
  //   }else{
  //     this.setState({
  //       correct:"false",
  //       answered: "true",
  //       backgroundColor:"red"
  //     })
  //   }
  // }
  
  render(){
    // console.log("------------")
    // console.log("Is correct", this.state.correct)
    // console.log("Is answered", this.state.answered)
    // console.log("BackgroundColor", this.state.backgroundColor)
    // console.log("-----------")
    if (this.state.answered === "false") {
      return(
        <button onClick={this.props.handleClick} value = "false">False</button>
      )
    }
    else {
      if (this.state.correct === "true") {
        return(
          <button style={{backgroundColor: "green"}} value="false">False</button>
        )
      }else {
        return(
          <button style={{backgroundColor: "red"}} value="false">False</button>
        )
      }
    }
  }
}








export default FalseButton