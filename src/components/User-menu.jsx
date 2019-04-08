import React,{Component,createRef} from 'react'
import {connect} from 'react-redux'
import Avatar from './Avatar'
import UserImg from '../user.jpeg'
import UserInfo from './User-info'
import {getUser} from "../redux/auth/sessionSelectors";


class UserMenu extends Component{
    containerRef = createRef()
    state ={
        isDropDownOpen:false
    }
    componentDidMount() {
        window.addEventListener('click',this.handleWindowClick)
    }
    componentWillUnmount() {
        window.removeEventListener('click',this.handleWindowClick)
    }

    handleWindowClick= e =>{
        const isTargetInsideContainer = this.containerRef.current.contains(e.target)

        const {isDropDownOpen} = this.state
        if( isDropDownOpen && !isTargetInsideContainer ){
            this.closeDropDown()
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isDropDownOpen !== nextState.isDropDownOpen
    }

    openDropDown=()=>{
        this.setState({isDropDownOpen:true})

    }
    closeDropDown(){
        this.setState({isDropDownOpen:false})
    }

    render(){
        const {name}= this.props.user


        const {isDropDownOpen} = this.state
        return(
         <div className='user__menu' onClick={this.openDropDown} ref={this.containerRef} >
            <Avatar img = {UserImg}/>
            <span>{name}</span>
             {isDropDownOpen && <UserInfo/>}
        </div>
        )}
}

const mapState = state =>({
        user: getUser(state)
    }
)



export default connect(mapState)(UserMenu)