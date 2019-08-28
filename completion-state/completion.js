import React, { Component } from 'react';
import { render } from 'react-dom';
import "./component-style.css"

class Completed extends Component {
  render() {
    console.log('Render Called');
    return (
      <div className="container">
        <div className="complete"><span>{this.props.complete}</span></div>
        <div className="divider"></div>
        <div className="total"><span>{this.props.total}</span></div>
      </div>
    );
  }
}


export default Completed;