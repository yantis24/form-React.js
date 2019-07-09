import React, {Component} from 'react';
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
    console.log(inputs);
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
