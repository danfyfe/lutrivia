import React from 'react';
// import Score from './Score.js'
// import NewGameButton from './NewGameButton.js'

class GameContainer extends React.Component{



  
  render(){
    return(
        <div className="game-container">
          {this.props.game === "not playing" ? <button className="new-game-button" onClick={
          this.props.handleNewGameClick
          }>New Game</button> : <span className = "score">Score: 0</span>}
        </div>
    )
  }
}

export default GameContainer