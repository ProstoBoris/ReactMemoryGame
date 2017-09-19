import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="result-container">
                <ul>
                    <li>Result: { this.props.finalScore } and { this.props.numberOfGames }</li>
                </ul>
            </div>
        )
    }
}

export default Result;