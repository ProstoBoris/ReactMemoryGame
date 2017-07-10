import React, { Component } from 'react';
import Square from "./square";

class FirstGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill("HIDDEN"),
            openSquares: 0,
            clickable: true,
            firstNumber: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        self = this;
        if (this.state.clickable === false) {
            alert("You cannot click now!");
            return false;
        }
        console.log(this.state.firstNumber, index);
        if (this.state.firstNumber !== null
            && this.state.firstNumber%2 === 0
            && index%2 === 0) {
            console.log("they are even");
            this.setState({
                squares: Array(9).fill("OPEN"),
                openSquares: 0,
                clickable: true,
                firstNumber: null
            });
            return false;
        }

        const squares = this.state.squares.slice();
        squares[index] = this.state.squares[index] === 'HIDDEN' ? 'VISIBLE' : 'HIDDEN';
        let clickable = this.state.openSquares > 0 ? false : true;
        if (!clickable) {
            setTimeout(function () {
                self.setState({
                    clickable: true,
                    openSquares: 0,
                    firstNumber: null,
                    squares: Array(9).fill("HIDDEN")
                });
            }, 2000);
        }
        this.setState({
            squares: squares,
            openSquares: this.state.openSquares === 1 ? 0 : this.state.openSquares + 1,
            clickable: clickable
        });
        if (this.state.openSquares === 0) {
            this.state.firstNumber = index;
        }
        console.log(this.state.openSquares, clickable, squares[index]);
    }
    renderSquare(i) {
        return <Square
            value={i}
            onClick={this.handleClick}
            visible={this.state.squares[i]}
            clickable={this.state.clickable}
            />;
    }

    render() {
        return (
            <div>
                <h5>Our game field here</h5>
                <div className="row-of-squares">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row-of-squares">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row-of-squares">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default FirstGame;
