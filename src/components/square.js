import React, { Component } from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        //this.toggleSquare = this.toggleSquare.bind(this);
    }

    render() {
        let squareNumber = this.props.value;
        return (
            <button className={ `square number-${squareNumber}` }
                    onClick={() => {this.props.onClick(squareNumber)}}
                    clickable={this.props.clickable}
            >{ this.props.visible !== "HIDDEN" ? squareNumber : this.props.visible}</button>
        )
    }
}

export default Square;
