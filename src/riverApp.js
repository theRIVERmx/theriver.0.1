import React, { Component } from 'react';
import Filters from './NavComp/FilterControllers';

class riverApp extends Component {
  render() {
    return( 
      <div className="riverApp"> 
        <Filters />
      </div> 
    );
  }
}

export default riverApp;
