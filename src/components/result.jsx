import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="result-container">
                <ul>
                    {this.props.results.map((game, index) =>
                        <li key={index}>Game #: {game.gameNumber} -- {game.score}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Result;