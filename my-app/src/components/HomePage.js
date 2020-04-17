import React, { Component } from "react";
import history from "../history/index";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>WELCOME TO CODENAMES!</span>
          <p>To join a game, enter the lobby name and click 'Enter.'</p>
          <input type="text" id="game-name" onKeyPress={this.handleKeyPress} />
          <button onClick={this.startGame}>Enter</button>
          <footer>
            <p>Built by Kevin Lam</p>
            <p>Github Link Here.</p>
          </footer>
        </header>
      </div>
    );
  }

  //Helper Functions
  //Create a function to get the string value of the game name from the URI.
  startGame() {
    const gameName = document.getElementById("game-name").value;
    history.push("/" + gameName);
  }

  //Create a fn to listen for an event. If the event is ENTER, start the game.
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.startGame();
    }
  };
}

export default HomePage;
