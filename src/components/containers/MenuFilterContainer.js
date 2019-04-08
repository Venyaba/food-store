import MenuFilter from '../../components/MenuFilter';
import {connect} from "react-redux";
import {changeFilter} from '../../redux/menu/menuActions'
import * as menuSelectors from '../../redux/menu/menuSelectors'



const mStP = state =>({
    filter: menuSelectors.getFilter(state)
})

const mDtP = { onChange:changeFilter }



export default connect(mStP,mDtP)(MenuFilter)


