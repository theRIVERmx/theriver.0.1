import React, { Component } from 'react';
import '../uiDesign/styleButtons/button.css'

class logic extends Component {
    render() {
        if(this.props.categorie.key == 0) {
            console.log(this.props.categorie.name);
        }
    }
}

class theButton extends Component {
    render() {
        return (
            <li className="Button">
                <input type="checkbox" id={ this.props.categorie.name } />
                <label htmlFor={ this.props.categorie.name } ></label>
            </li>
        );
    }
};

export default theButton;