import React, { Component } from 'react';
import FirstGame from "./first_game";

export default class App extends Component {

    handleClick(e) {
        //document.querySelector('h5').innerHTML = "Let's start NOW!";
    }

  render() {
    return (
        <div>
            <h2>React</h2>
            <button
                className="btn btn-primary"
                onClick={this.handleClick}
            >Go To Game
            </button>
            {this.props.children}
        </div>
    );
  }
}