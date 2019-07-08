import React, {Component} from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

class App extends Component {
  onSubmit = inputs => {
    console.log("App comp got", inputs);
  };

  render () {
    return (
      <div className="App">
        <Form onSubmit={inputs=> this.onSubmit(inputs)}/>
      </div>
    );
  }
}


export default App;
