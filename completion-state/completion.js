import React, { Component } from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import "./component-style.css"

class Completed extends Component {
  render() {
    console.log('Render Called');
    return (
      <div className={`container${this.props.name}`}>
      <Helmet>
        <style>{`
          .container${this.props.name}{
            --complete-color: ${this.props.competecolor};
            --total-color: ${this.props.totalcolor};
            --font-color: ${this.props.fontcolor};
            display: flex;
            border: 2px solid;
            width:100px;
            height: 30px;
            border-radius:5px;
            font-family: sans-serif;
          }
        `}</style>
      </Helmet>
        <div className="complete"><span>{this.props.complete}</span></div>
        <div className="divider"></div>
        <div className="total"><span>{this.props.total}</span></div>
      </div>
    );
  }
}


export default Completed;