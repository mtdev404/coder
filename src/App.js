import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  state = {
    greet: 'hello misio',
  };

  render() {
    const { greet } = this.state;
    return (
      <div className='App'>
        <h1>{greet}</h1>
      </div>
    );
  }
}

export default App;
