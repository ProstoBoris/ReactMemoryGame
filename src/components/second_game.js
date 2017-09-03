import React, { Component } from 'react';
import Square from "./square";
import { Link } from 'react-router';

class SecondGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffledArray: this.createArray(),
            visibility: Array(25).fill("HIDDEN"),
            openSquares: 0,
            clickable: true,
            firstNumber: null,
            attempts: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    handleClick(index) {

        let self = this;
        if (this.state.clickable === false) {
            //alert("You cannot click now!");
            return false;
        }
        const squares = this.state.visibility.slice();
        if (this.state.visibility[index] === 'HIDDEN') {
            squares[index] = 'VISIBLE';
        } else if (this.state.visibility[index] === 'VISIBLE') {
            squares[index] = 'HIDDEN';
        } else { squares[index] = 'OPEN' }

        let clickable = this.state.openSquares > 0 ? false : true;

        if (this.state.firstNumber !== null  && this.state.firstNumber !== index &&
            (this.state.firstNumber%2 === 0 && index === this.state.firstNumber + 1) || (this.state.firstNumber%2 === 1 && index === this.state.firstNumber - 1))
        {
            squares[this.state.firstNumber] = "OPEN";
            squares[index] = "OPEN";
        }

        this.setState({
            visibility: squares,
            openSquares: this.state.openSquares === 1 ? 0 : this.state.openSquares + 1,
            clickable: clickable,
            firstNumber: this.state.openSquares === 0 ? index : null,
            attempts: this.state.openSquares === 1 ? this.state.attempts + 1 : this.state.attempts
        });

        if (!clickable) {
            setTimeout(function () {
                for (let i = 0; i < squares.length; i++) {
                    if (squares[i] === 'VISIBLE') {
                        squares[i] = 'HIDDEN';
                    }
                }
                self.setState({
                    clickable: true,
                    openSquares: 0,
                    firstNumber: null,
                    visibility: squares
                });
            }, 500);
        }
    }

    startGame() {
        this.setState({
            shuffledArray: this.createArray(),
            visibility: Array(25).fill("HIDDEN"),
            openSquares: 0,
            clickable: true,
            firstNumber: null,
            attempts: 0
        });
    }

    renderSquare(i, key) {
        return <Square
            value={i}
            key={key}
            onClick={this.handleClick}
            visible={this.state.visibility[i]}
            clickable={this.state.clickable}
        />;
    }

    render() {
        return (
            <div className="content-container">
                <div className="squares-container-25">
                    <Link
                        to="/"
                        className="btn btn-default">
                        Go Back
                    </Link>
                    {
                        this.state.shuffledArray.map((elem, key) => {
                            return this.renderSquare(elem, key)
                        })
                    }
                    <div className="footer-info">
                        <h3>Number of attempts: { this.state.attempts }</h3>
                        <button className="btn btn-success" onClick={this.startGame}>Start New Game</button>
                    </div>
                </div>
            </div>
        )
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
            console.log(array);
        return array;
    }
    createArray() {
        const initArray = [];
        for (let i = 0; i < 25; i++) {
            initArray.push(i);
        }
        const shuffledArray = this.shuffle(initArray);
        return shuffledArray;
    }
}

export default SecondGame;