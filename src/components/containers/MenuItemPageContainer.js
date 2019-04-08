import MenuItemPage from '../../components/MenuItemPage'
import {connect} from "react-redux";
import {getMenuItemByID,deleteMenuItem} from "../../redux/menu/menuActions";
import * as menuSelectors from '../../redux/menu/menuSelectors'

const mStP = (state) =>{
    return{
        item: menuSelectors.getMenuItem(state),
        loading:menuSelectors.getIsLoading(state),
        error:menuSelectors.getError(state)
    }

}
const mDtP = {getMenuItemByID,deleteMenuItem}

export default  connect(mStP,mDtP)(MenuItemPage)