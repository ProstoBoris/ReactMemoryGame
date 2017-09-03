import React, { Component } from 'react';
import { Link } from 'react-router';

export default class StartPage extends Component {

    render() {
        return (
            <div>
                <div className="card-header">
                    <p>
                        This is a popular memory game in which you can test and improve you memory.
                        You should open cards one by one. If the images match, the cards remain open.
                        The goal is to open all the cards in as few attempts as possible.
                    </p>
                    <p>
                        The first game is easier and there you should match the pictures of the world capitals.
                        The second one is more difficult and is about various front-end technologies.
                    </p>
                    <p>
                        Choose whichever game you like, test your memory and enjoy the game!<br />
                        Good luck!
                    </p>
                </div>
                <div className="game-start-button">
                    <Link
                        to="/game1"
                        className="btn btn-primary btn-lg">
                        World Capitals
                    </Link>
                </div>
                <div className="game-start-button">
                    <Link
                        to="/game2"
                        className="btn btn-primary btn-lg">
                        Front-End Tools
                    </Link>
                </div>
            </div>
        );
    }
}