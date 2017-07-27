import React, { Component } from 'react';
import { Link } from 'react-router';

export default class StartPage extends Component {

    render() {
        return (
            <div>
                <Link
                    to="/game1"
                    className="btn btn-primary">
                    Go To Game
                </Link>
            </div>
        );
    }
}