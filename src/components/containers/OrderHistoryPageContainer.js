import {connect} from "react-redux";
import OrderHistoryPage from '../../components/OrderHistoryPage'
import {fetchOrders,deleteOrder,addNewOrder,getOrderById} from "../../redux/orders/ordersActions";
import {getOrders} from "../../redux/orders/ordersSelectors";
import {getIsLoading} from "../../redux/menu/menuSelectors";



const mStP = state =>({
    orders: getOrders(state),
    isLoading: getIsLoading(state),
    order: getOrderById(state)
})

const mDtP = {fetchOrders,deleteOrder,addNewOrder,getOrderById}


export default connect(mStP,mDtP)(OrderHistoryPage)