import React, { Component } from 'react';
import Squares from "./squares";
import Result from "./result";

class FirstGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGames: 0,
            finalScore: 0,
            results: [1,2]
        };
        this.showResult = this.showResult.bind(this);
    }

    showResult(attempts) {
        console.log("Cooooool!");
        let numOfGames = this.state.numberOfGames;
        this.setState({
            numberOfGames: numOfGames + 1,
            finalScore: attempts
        });
    }

    render() {
                    console.log(this.state.numberOfGames, this.state.finalScore);
        return (
            <div className="content-container">
                <Squares
                    onClick={this.showResult}
                />
                <Result
                    numberOfGames={this.state.numberOfGames}
                    finalScore={this.state.finalScore}
                    results={this.state.results}
                />
            </div>
        )
    }
}

export default FirstGame;