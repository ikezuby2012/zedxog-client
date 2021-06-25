import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="popup-flex popup-box">
                <div className={`popup-center popup--animate popup--${this.props.color}`}>
                    <h3>hello {this.props.name}!</h3>
                    <h2>{this.props.content}</h2>
                </div>
            </div>
        );
    }
}

export default Popup;
