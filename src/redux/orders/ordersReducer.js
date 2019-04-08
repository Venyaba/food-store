import {combineReducers} from "redux/es/redux";
import {FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_ERROR,
    DELETE_ORDER_SUCCESS,
    ADD_ORDER_SUCCESS,
    GET_ORDER_BY_ID_SUCCESS} from "./ordersTypes";

 const itemsReducer = (state =[],{type, payload})=>{
    switch (type) {
        case FETCH_ORDERS_REQUEST:
            return state
        case FETCH_ORDERS_SUCCESS:
            return payload
        case DELETE_ORDER_SUCCESS:
            return state.filter(itm=>itm.id !== payload)
        case ADD_ORDER_SUCCESS:
            return[...state,payload]

        default:
            return state

    }
}


  const ordersErrorReducer = ( state = null, {type,payload}) =>{
    switch (type) {
        case FETCH_ORDERS_REQUEST:
        case FETCH_ORDERS_SUCCESS:
        case ADD_ORDER_SUCCESS:
            return null
        case FETCH_ORDERS_ERROR:
            return payload

        default:
            return state

    }
 }

 const orderByIdReducer = (state=null,{type,payload})=>{
     switch (type) {
         case GET_ORDER_BY_ID_SUCCESS:
             return payload
         default:
             return state
     }
 }

export default combineReducers({
    items:itemsReducer,
    error: ordersErrorReducer,
    order: orderByIdReducer
})


