import React, { Component } from 'react'
import TextField from '../../common/TextField';

const initialState = {
    FirstName : '',
    LastName : '',
    UserName : '',
    Email: '',
    City: '',
    Password: '',
}

export class Register extends Component {
    state = {
        ...initialState
    }
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        const { message, error } = this.props;
        const { FirstName , LastName ,UserName ,Email, City , Password } = this.state
        if (message !== null) {
            this.setState({
                ...initialState
            }, () => {
                this.props.history.push('/login')
            })
        }

        if (error !== null || error !== undefined) {
            // console.log(error)
        }

        return (
           <div className='register'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-8 auto'>
                       <h1 className="display-4 text-center">Sign Up</h1>
                         <form onSubmit = {this.onSubmit}>
                         <TextField  type='text'
                             name='FirstName'
                             label='First Name'
                             placeholder='Enter FirstName'
                             value={FirstName}
                             onChange={this.onChange}
                             />
                             <TextField  type='text'
                             name='LastName'
                             label='Last Name'
                             placeholder='Enter LastName'
                             value={LastName}
                             onChange={this.onChange}
                             />
                             <TextField  type='text'
                             name='UserName'
                             label='Username'
                             placeholder='Enter username'
                             value={UserName}
                             onChange={this.onChange}
                             />
                              <TextField  type='text'
                             name='Email'
                             label='Email'
                             placeholder='Enter Email'
                             value={Email}
                             onChange={this.onChange}
                             />
                              <TextField  type='text'
                             name='City'
                             label='City'
                             placeholder='Enter City'
                             value={City}
                             onChange={this.onChange}
                             />
                             <TextField  type='password'
                             name='Password'
                             label='password'
                             placeholder='Enter password'
                             value={Password}
                             onChange={this.onChange}
                             />   
                             <button type='Submit' className='btn btn-primary'>Submit</button>
                             </form>
                       </div>
                   </div>
               </div>
           </div> 
        )
    }
}

// Login.propTypes = {
//     userName: PropTypes.object.isRequired,
//     password: PropTypes.object.isRequired
// }


