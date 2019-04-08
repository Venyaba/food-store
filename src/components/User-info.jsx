import React from 'react';
import {Link} from 'react-router-dom'
import {signOut} from "../redux/auth/operations";
import {connect} from "react-redux";


const UserInfo =({onSignOut = ()=>null})=>(
    <div className='user__info'>
        <Link to ='/account'><p>accaunt</p></Link>
        <Link to ='/orders'> <p>orderhistory</p></Link>
        <Link to='/'><p>meal plan</p></Link>
        <button type='text' onClick={onSignOut}>Logout</button>

    </div>

)

const mapDispatch=({
    onSignOut: signOut
})


export default connect(null,mapDispatch)(UserInfo)



