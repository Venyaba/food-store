import axios from "axios";
import {FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_ERROR,
    DELETE_ORDER_SUCCESS,
    ADD_ORDER_SUCCESS,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_REQUEST
} from "./ordersTypes";


const fetchOrdersRequest = ()=>({
    type: FETCH_ORDERS_REQUEST
})

const fetchOrdersSuccess = orders => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
})

const fetchOrdersError = err =>({
    type:FETCH_ORDERS_ERROR,
    payload: err
})

const deleteOrderSuccess = id =>({
    type:DELETE_ORDER_SUCCESS,
    payload:id
})

const addOrderSuccess = itm =>({
    type:ADD_ORDER_SUCCESS,
    payload: itm
})

const getOrderByIdRequest = ()=>({
    type: GET_ORDER_BY_ID_REQUEST

})

const getOrderByIdSuccess = id =>({
    type: GET_ORDER_BY_ID_SUCCESS,
    payload: id
})

export const fetchOrders= () =>dispatch=>{
    dispatch(fetchOrdersRequest())
    axios
        .get('http://localhost:3000/orders')
        .then(res=>dispatch(fetchOrdersSuccess(res.data)))
        .catch(err=>dispatch(fetchOrdersError(err)))

}


export const deleteOrder = id => dispatch=>{
    axios
        .delete(`http://localhost:3000/orders/${id}`)
        .then(res=>dispatch(deleteOrderSuccess(res)))
        .catch(err=>dispatch(fetchOrdersError(err)))

}

export const addNewOrder = itm => dispatch =>{
    axios
        .post('http://localhost:3000/orders',itm)
        .then(res=>dispatch(addOrderSuccess(res.data)))
        .catch(err=>dispatch(fetchOrdersError(err)))
}

export const getOrderById = id => dispatch=>{
     dispatch(getOrderByIdRequest())
    axios
        .get(`http://localhost:3000/orders/${id}`)
        .then(res=>dispatch(getOrderByIdSuccess(res.data)))
        .catch(err=>dispatch(fetchOrdersError(err)))
}