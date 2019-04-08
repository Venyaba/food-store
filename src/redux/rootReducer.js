import {combineReducers} from "redux";
import menuReducer,{categoryReducer,filterReducer,getItemMenuByIdReducer} from './menu/menuReducer'
import orderReducer from './orders/ordersReducer'
import sessionReducer from './auth/sessionReducer'


export default combineReducers({
    menu:menuReducer,
    categories:categoryReducer,
    filter: filterReducer,
    item: getItemMenuByIdReducer,
    orders: orderReducer,
    session: sessionReducer

})