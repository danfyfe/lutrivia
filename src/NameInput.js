import React from 'react'


class NameInput extends React.Component{
  render(){


    return(
      <div className="form">
        <form>
          <input className="name-input"type="text" name="name"placeholder="Name"/>
          <input className = "submit-button" type="submit" value="Submit Score"/>
        </form>
      </div>
    )


  }



}





export default NameInput