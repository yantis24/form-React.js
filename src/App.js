import React, {Component} from 'react';
import Header from './components/Header';
import { useMediaQuery } from 'react-responsive';
import './App.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    hobby:'',
    summary:'',
}

  onSubmit = (e) => {
    e.preventDefault();
    const firstN = this.state.firstName;
    const lastN = this.state.lastName;
    const myHobby = this.state.hobby;
    this.setState({
        firstName:'',
        lastName:'',
        hobby:'',
        summary:
        ( 'My full name is ' + firstN + ' ' + lastN + ' ' + 'and one of my hobbies is' + ' ' + myHobby )    
    });
};

  onSubmit2 = (x) => {
    x.preventDefault();
    this.setState({
      summary:''
    });
  };

  render () {
    return (   
      <div className="App">
        <Header/>
        <form className="form">
          <h3 className="title">Your Personal Details</h3>
            <label className="label">
            First Name: 
                <input 
                name= 'firstName'
                type='text'
                placeholder='First Name' 
                value={this.state.firstName} 
                onChange={e => this.setState({firstName: e.target.value})}/>
            </label>
            <label className="label">
            Last Name:
                <input 
                name='lastName'
                type='text'
                placeholder='Last Name' 
                value={this.state.lastName} 
                onChange={e => this.setState({lastName: e.target.value})}/>
            </label>
            <label className="label">
            Hobby:
                <select className="select"
                name='hobby'
                value={this.state.hobby}
                onChange = { e => this.setState({hobby: e.target.value})}>
                  <option value=''>Select from the list</option>
                  <option value='Travelling'>Travelling</option>
                  <option value='Cooking'>Cooking</option>
                  <option value='Coding'>Coding</option>
                </select>
            </label>
            <button className="button" type='submit' onClick={e => this.onSubmit(e)}>Submit</button>
            <textarea 
                name='summary'
                placeholder="Your details will be displayed here..." 
                value={this.state.summary}
                onChange = { () => this.setState()}>
            </textarea>
            <button className="button-text" type='submit' onClick={x => this.onSubmit2(x)}>Cleared Text</button> 
          </form>
      </div>
      );
    }
  }
export default App;


