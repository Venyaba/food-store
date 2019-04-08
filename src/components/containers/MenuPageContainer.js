import {connect} from "react-redux";
import MenuPage from '../../components/MenuPage';
import {fetchMenu,fetchCategories,fetchMenuItemByCategory} from "../../redux/menu/menuActions";
import * as menuSelectors from '../../redux/menu/menuSelectors'


const mStP = state => {
    return{
        items: menuSelectors.getVisibleMenu(state),
        isLoading: menuSelectors.getIsLoading(state),
        error: menuSelectors.getError(state),
        categories: menuSelectors.getCategories(state),

    }
}
const mDtP = {fetchMenu,fetchCategories,fetchMenuItemByCategory}


export default connect(mStP,mDtP)(MenuPage);