import React,{ Component} from 'react';
import {connect} from "react-redux";
import {signUp} from "../redux/auth/operations";

const INITIAL_STATE = {name:'',email:'',password:''}

class SignUpForm extends Component{
    state = {...INITIAL_STATE}

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit = e => {
         e.preventDefault()
        this.props.onSubmit({...this.state})
         this.setState({...INITIAL_STATE})
    }


    render(){
        const {name,email,password}= this.state
        return(
            <div className='signIn'>
                <form className='SignInForm' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                           name ='name'
                            value= {name}
                            onChange={this.handleChange}
                            placeholder='name...'
                    />
                    <input type='password'
                           name='password'
                           onChange={this.handleChange}
                            value={password}
                           placeholder='password...'
                    />
                    <input type='email'
                           name='email'
                           onChange={this.handleChange}
                            value={email}
                           placeholder='email...'
                    />
                    <button >Sign up</button>
                </form>
            </div>
        )
    }
}

const mapDispatch = {
    onSubmit: signUp
}

export default connect(null,mapDispatch)(SignUpForm)