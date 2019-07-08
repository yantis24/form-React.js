import React, {Component} from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    data: {}
  };

  onChange = updatedValue => {
    this.setState({
      data: {
        ...this.state.data,
        ...updatedValue
      }
    })
  }
  onSubmit = inputs => {
    console.log("App comp got", inputs);
  };

  render () {
    return (
      <div className="App">
        <h3 className="header">Your Personal Details</h3>
        <Form onSubmit={inputs=> this.onSubmit(inputs)}/>
      </div>
    );
  }
}


export default App;
