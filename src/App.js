import React, {Component} from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    inputs:{}
  };

  // onChange = updatedValue => {
  //   this.setState({
  //     data: {
  //       ...this.state.data,
  //       ...updatedValue
  //     }
  //   })
  // }

  onSubmit = inputs => {
    this.setState({inputs})
    console.log({inputs});
  };

  
  render () {
    return (
      <div className="App">
        <h3 className="header">Your Personal Details</h3>
        <Form onSubmit={inputs=> this.onSubmit(inputs)}/>
        <p>
          {JSON.stringify(this.state.inputs,null,2)}
        </p>
        
      </div>
    );
  }
}



export default App;


