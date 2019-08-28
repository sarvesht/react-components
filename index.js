import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Completed from './completion-state/completion';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Completed name="1"
          complete="1" 
          total="100" 
          competecolor="rgb(46, 84, 155)" 
          totalcolor="rgb(125, 185, 14)" 
          fontcolor="white"
        />
        <br/>
        <Completed  name="2"
          complete="1" 
          total="100" 
          competecolor="black" 
          totalcolor="gray" 
          fontcolor="white"
        />
        <br/>
        <Completed  name="3"
          complete="1" 
          total="100" 
          competecolor="red" 
          totalcolor="white" 
          fontcolor="black"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
