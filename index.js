import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Completed from './completion-state/completion';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hello name='world' />
        <Completed complete="1" total="100"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
