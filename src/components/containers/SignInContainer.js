import {connect} from 'react-redux'
import SignInForm from '../../components/SignInForm'
import {signIn} from '../../redux/auth/operations'



const mapDispatch = ({
    onSubmit: signIn
})


export default connect(null,mapDispatch)(SignInForm)

