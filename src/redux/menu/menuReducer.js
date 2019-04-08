import {combineReducers} from "redux";
import {FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS,GET_ORDER_BY_ID_SUCCESS,GET_ORDER_BY_ID_REQUEST} from "../orders/ordersTypes";
import {
    FETCH_MENU_SUCCESS,
    FETCH_MENU_REQUEST,
    FETCH_MENU_ERROR,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_ITEM_BY_CATEGORY_SUCCESS,
    ADD_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_SUCCESS,
    CHANGE_FILTER,
    GET_MENU_ITEM_SUCCESS,
    GET_MENU_ITEM_REQUEST,
    FETCH_CATEGORIES_ERROR,

} from './menuTypes'





 function  itemsReducer ( state = [], action){
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return state
        case FETCH_MENU_SUCCESS:
            return action.payload

        case ADD_MENU_ITEM_SUCCESS:
            return [...state,action.payload]
        case DELETE_MENU_ITEM_SUCCESS:
            return state.filter(item=>item.id !== action.payload)
        case FETCH_ITEM_BY_CATEGORY_SUCCESS:
            return action.payload

            default:
    }  return state
 }

 function  isLoadingReducer (state = false,{type}){
     switch (type) {
         case FETCH_MENU_SUCCESS:
         case ADD_MENU_ITEM_SUCCESS:
         case DELETE_MENU_ITEM_SUCCESS:
         case FETCH_MENU_ERROR:
         case GET_MENU_ITEM_SUCCESS:
         case FETCH_ORDERS_SUCCESS:
         case GET_ORDER_BY_ID_SUCCESS:

             return false
         case FETCH_MENU_REQUEST:
         case GET_MENU_ITEM_REQUEST:
         case FETCH_ORDERS_REQUEST:
         case  GET_ORDER_BY_ID_REQUEST:
             return true
         default:
             return state
     }
}

function  errorReducer (state = null,{type,payload}){
    switch (type) {
        case FETCH_MENU_SUCCESS:
        case ADD_MENU_ITEM_SUCCESS:
        case DELETE_MENU_ITEM_SUCCESS:
        case FETCH_CATEGORIES_SUCCESS:
            return null

        case FETCH_MENU_ERROR:
            return payload
        default:
            return state
    }
}

export const categoryReducer = (state=[],{type,payload})=>{
    switch(type){
        case FETCH_CATEGORIES_SUCCESS:
            return payload
        case FETCH_CATEGORIES_ERROR:
            return payload
        default:
            return state
    }
}

export const filterReducer=(state = "", {type,payload})=>{
    switch (type) {
        case CHANGE_FILTER:
            return payload
        default:
            return state;

    }
}

export const getItemMenuByIdReducer = (state = null,{type,payload})=>{
    switch (type) {
        case GET_MENU_ITEM_REQUEST:
            return state
        case GET_MENU_ITEM_SUCCESS:
            return payload
        default:
            return state

    }
}

export default combineReducers({
    items: itemsReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
    

})
