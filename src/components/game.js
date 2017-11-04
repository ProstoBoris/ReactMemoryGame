import React, { Component } from 'react';
import Squares from "./squares";
import Squares25 from "./squares_25";
import Result from "./result";

class Game extends React.Component {
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
        return (
            <div className="content-container">
                { this.props.location.pathname === "/game1" ?
                    <Squares
                        onClick={this.showResult}
                        finalScore={this.state.finalScore}
                    />
                    :
                    <Squares25
                        onClick={this.showResult}
                        finalScore={this.state.finalScore}
                    /> }
                <Result
                    results={this.state.results}
                />
            </div>
        )
    }
}

export default Game;