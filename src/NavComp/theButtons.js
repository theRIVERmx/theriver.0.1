import React, { Component } from 'react';
import Button from './ItemComponent/theButton';

class theButtons extends Component {
    render() {
        let navButtons;
        if(this.props.categories) {
            navButtons = this.props.categories.map(categorie => {
                return (<Button key={categorie.key} categorie={categorie} />);
            });
        }
        return (
            <div className="theButtons"> 
                { navButtons }
            </div> 
        );
    }
};

export default theButtons;