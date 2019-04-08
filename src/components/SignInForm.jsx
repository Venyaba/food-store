import React from 'react';


const initialState = {
    email:'',
    password:''
}

class SignInForm extends React.Component{
    state={
        email:'',
        password:''
    }
    handleLoginChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }
    reset =()=>{
        this.setState({
            ...initialState
        })

    }

    render(){
        const {email,password} = this.state
        return(
            <div className='signIn'>
            <form className='signInForm' onSubmit={this.handleSubmit}>
                <input type='text'
                       name ='email'
                       value={email}
                       onChange={this.handleLoginChange}
                       placeholder='email..'
                />
                <input type='password'
                       name='password'
                        onChange={this.handleLoginChange}
                       value={password}
                       placeholder='password'
                />
                <button >Sign In</button>
            </form>
            </div>
        )
    }
}


export default SignInForm;


