import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
        <div className="header">
            <h2>Memory Game</h2>
            <h4>World Capitals</h4>
            {this.props.children}
        </div>
    );
  }
}