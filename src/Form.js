import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        hobby:'',
        summary:''
    }

// userInput = (x) => {
//     this.setState({
//      [x.target.name]: x.target.value
//     });
// };

onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        firstName:'',
        lastName:'',
        hobby:'',
        summary:'',
    });
};

 render (){
    return(
        <form className="form">
            <label className="label">
            First Name: 
                <input 
                name= 'firstName'
                type='text'
                placeholder='First Name' 
                value={this.state.firstName} 
                onChange={e => this.setState({firstName: e.target.value})}
                // onChange={x => this.userInput(x)}
                />
            </label>
            <br/>
            <label className="label">
            Last Name:
                <input 
                name='lastName'
                type='text'
                placeholder='Last Name' 
                value={this.state.lastName} 
                onChange={e => this.setState({lastName: e.target.value})}
                // onChange={x => this.userInput(x)}
                />
            </label>

            <label className="label">
            Hobby:
                <select className="select"
                name='hobby'
                value={this.state.hobby}
                onChange = { e => this.setState({hobby: e.target.value})}
                // onChange={x => this.userInput(x)}
                >
                    <option value=''>Select from the list</option>
                    <option value='Travelling'>Travelling</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Coding'>Coding</option>
                </select>
            </label>
           
            <br/>
            <button className="button" type='submit' onClick={e => this.onSubmit(e)}>Submit</button>
            <br/>
            <textarea 
                name='summary'
                placeholder="Your details will be display here..." 
                value={this.state.summary}
                onChange = { e => this.setState({summary: e.target.value})}
                >
            </textarea>
        </form>

    );  
 }
}