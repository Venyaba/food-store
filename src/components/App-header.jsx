import React from 'react';
import {connect} from 'react-redux'
import Logo from './Logo-app'
import appLogo from '../logo.jpg'
import Nav from './App-nav'
import AppNav from './User-menu'
import AuthNav from './AuthNav/AuthNav'
import * as selectors from '../redux/auth/sessionSelectors'




const AppHeader = ({isAuthenticated}) =>(
    <div className='header'>
        <div className='header__logo'>
            <Logo image={appLogo}/>
        </div>
        <div className='header__appNav'>
            <Nav/>
        </div>

        <div>
            {isAuthenticated? <AppNav/> : <AuthNav/>}
        </div>
    </div>
                )



const mapState = state=>({
    isAuthenticated: selectors.isAuthenticated(state)
})

export default connect(mapState)(AppHeader);