import React, { Component } from 'react';
import Buttons from '../NavComp/theButtons';

class FilterControllers extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                { key: 1, name: 'stay' }, 
                { key: 2, name: 'meet' }, 
                { key: 3, name: 'create' }, 
                { key: 4, name: 'join' }
            ]
        }
    }

    render() {
        return (
            <div className="FilterControllers"> 
                <Buttons categories={this.state.categories} />
            </div> 
        );
    }
};

export default FilterControllers;