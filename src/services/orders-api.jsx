import axios from 'axios'

const BASE_URL = 'http://localhost:3000/orders';


const getAllOrders = ()=>{
    return axios.get(BASE_URL).then(res => res.data)
}

const getOrderById = id => axios.get(`${BASE_URL}/${id}`).then(res=>res.data)


const deleteOrderById = id=> axios.delete(`${BASE_URL}/${id}`).then(res=> res.status === 200 )


const addOrderItem = item => axios.post(BASE_URL,item).then(res=>res.data)

export {getAllOrders,getOrderById,deleteOrderById,addOrderItem}