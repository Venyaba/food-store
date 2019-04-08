import {connect} from "react-redux";
import NewMenuItem from '../../components/NewMenuItem'
import {addMenuItem} from "../../redux/menu/menuActions";
import {getCategories} from "../../redux/menu/menuSelectors";
import {fetchCategories,fetchMenu} from "../../redux/menu/menuActions";

const mStP = state => ({
    categories:getCategories(state)
})

const mDtP ={addMenuItem,fetchCategories,fetchMenu}


export default connect(mStP,mDtP)(NewMenuItem)