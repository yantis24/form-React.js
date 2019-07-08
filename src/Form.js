import React, {Component} from 'react';

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        hobby:''
    }

change =x => {
    this.setState({
     [x.target.name]: x.target.value
    });
};

onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
        firstName:"",
        lastName:""
    });
};

 render (){
    return(
        <form>
            
            <input 
            name= 'firstName'
            placeholder='First Name' 
            value={this.state.firstName} 
            onChange={x => this.change(x)}
            />
            <br/>
            <input 
            name='lastName'
            placeholder='Last Name' 
            value={this.state.lastName} 
            onChange={x => this.change(x)}
            />
             <br/>
            <button onClick={e => this.onSubmit(e)}>Submit</button>

        </form>

    );  
 }
}