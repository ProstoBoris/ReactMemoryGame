import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="result-container">
                <div className="result-header">
                    <div>Game #</div> <div>Attempts</div>
                </div>
                <div>
                    {this.props.results.map((game, index) => {
                            return <div className="result-row">
                                <div key={index}>{game.gameNumber}</div>
                                <div>{game.score}</div>
                            </div>
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default Result;