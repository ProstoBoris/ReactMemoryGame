import React, { Component } from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        //this.toggleSquare = this.toggleSquare.bind(this);
    }

    render() {
        let squareNumber = this.props.value;
        let addedClass = this.props.visible !== "HIDDEN" ? "showPicture" : "hidePicture";
        return (
            <button className={ `square number-${squareNumber} ${addedClass}` }
                    onClick={() => {this.props.onClick(squareNumber)}}
                    clickable={this.props.clickable}
            >{ this.props.visible !== "HIDDEN" ? squareNumber : ""}</button>
        )
    }
}

export default Square;
