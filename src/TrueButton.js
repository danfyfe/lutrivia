import React from 'react'

class TrueButton extends React.Component{
  state = {
    answered:"false",
    correct: ""

  }
  //
  // handleClick = (event)=>{
  //   // console.log(typeof(event.target.value))
  //   if (event.target.value === this.props.question.answer.toString()) {
  //     this.setState({
  //       answered: "true",
  //       correct: "true",
  //       backgroundColor: "green"
  //     })
  //   }else{
  //     this.setState({
  //       answered: "true",
  //       correct:"false",
  //       backgroundColor:"red"
  //     })
  //   }
  // }
  render(){


    // console.log("------------")
    // console.log("Is correct", this.state.correct)
    console.log("Is answered", this.state.answered)
    // // console.log("BackgroundColor", this.props.backgroundColor)
    // console.log(this.props.handleClick)
    // console.log("-----------")

    if (this.state.answered === "false") {
      return(
        <button onClick={this.props.handleClick} value="true">True</button>
      )
    }else {
      if (this.state.correct === "true") {
        return(
          <button style={{backgroundColor: "green"}} value="true">True</button>
        )
      }else {
        return(
          <button style={{backgroundColor: "red"}} value="true">True</button>
        )
      }
    }
  }
}







export default TrueButton
