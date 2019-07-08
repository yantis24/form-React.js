import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        hobby:''
    }

change = x => {
    // this.props.onChange({[target.name]: target.value });
    this.setState({
     [x.target.name]: x.target.value
    });
};

onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state)
    this.setState({
        firstName:"",
        lastName:"",
        hobby:''
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
                onChange={x => this.change(x)}
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
                onChange={x => this.change(x)}
                />
            </label>

            <label className="label">
            Hobby:
                <select className="select"
                name='hobby'
                value={this.state.hobby}
                onChange={x => this.change(x)}>
                    <option value=''>Select from the list</option>
                    <option value='Travelling'>Travelling</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Coding'>Coding</option>
                </select>
            </label>
           
             <br/>
            <button className="button" type='submit' onClick={e => this.onSubmit(e)}>Submit</button>

        </form>

    );  
 }
}