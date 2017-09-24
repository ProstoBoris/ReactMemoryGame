import React, { Component } from 'react';
import Squares from "./squares";
import Result from "./result";

class FirstGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGames: 0,
            finalScore: 0,
            results: []
        };
        this.showResult = this.showResult.bind(this);
    }

    showResult(attempts) {
        let numOfGames = this.state.numberOfGames;
        this.setState({
            numberOfGames: numOfGames + 1,
            finalScore: attempts
        });
    }

    render() {
        let gameNumber = this.state.numberOfGames;
        let score = this.state.finalScore;
        let newResult = { gameNumber, score };
        if (gameNumber > 0) {
            this.state.results.push(newResult);
        }
                console.log(this.state.results);
        return (
            <div className="content-container">
                <Squares
                    onClick={this.showResult}
                />
                <Result
                    results={this.state.results}
                />
            </div>
        )
    }
}

export default FirstGame;