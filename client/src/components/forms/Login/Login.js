import React, { Component } from 'react'
import TextField from '../../common/TextField'
import PropTypes from 'prop-types'

const initialState = {
    UserName : '',
    Password : ''
}

export class Login extends Component {
    state = { ...initialState }
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userlogin(this.state);
    }


    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

   

    render() {
        const { authenticated , error } = this.props
        const { UserName , Password } = this.state

        if(authenticated){
            this.props.history.push('/dashboard')
            console.log(authenticated);
        }

        if (error !== null || error !== undefined) {
         console.log(error)
        }


        return (
           <div className='login'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-8' style={{paddingTop:'15%'}}>
                       <h1 style={{textAlign:'center'}}>Log In</h1>
                         <form onSubmit={this.onSubmit}>
                             <TextField  type='text'
                             name='UserName'
                             label='Username'
                             placeholder='Enter username'
                             value={UserName}
                             onChange={this.onChange}
                             />
                             <TextField  type='password'
                             name='Password'
                             label='Password'
                             placeholder='Enter Password'
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

