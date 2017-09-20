import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="result-container">
                <ul>
                    {this.props.results.map((number, index) =>
                        <li key={index}>Result: {number}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Result;