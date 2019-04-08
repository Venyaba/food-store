import axios from 'axios'
import {
    FETCH_MENU_ERROR,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_ITEM_BY_CATEGORY_SUCCESS,
    CHANGE_FILTER,
    GET_MENU_ITEM_SUCCESS,
    GET_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    ADD_MENU_ITEM_SUCCESS,
    FETCH_CATEGORIES_ERROR

} from './menuTypes';




 const fetchAllMenuRequest = ()=>({
    type: FETCH_MENU_REQUEST
})

const fetchAllMenuSuccess = menu => ({
    type: FETCH_MENU_SUCCESS,
    payload: menu
})

const fetchMenuError = err =>({
    type:FETCH_MENU_ERROR,
    payload: err

})

const fetchCategoriesSuccess = data =>({
    type:FETCH_CATEGORIES_SUCCESS,
    payload: data
})

const fetchcategoriesError = err =>({
     type:FETCH_CATEGORIES_ERROR,
    payload:err

})

const getMenuItemRequest = ()=>({
    type:GET_MENU_ITEM_REQUEST
})

const getMenuItemSuccess= item =>({
    type:GET_MENU_ITEM_SUCCESS,
    payload: item
})

const deleteMenuItemSuccess = id =>({
    type:DELETE_MENU_ITEM_SUCCESS,
    payload: id
})

//=================================================================REST API

export const fetchMenu = () => dispatch=>{
        dispatch(fetchAllMenuRequest())
        axios
            .get('http://localhost:3000/menu')
            .then(res=>
            dispatch(fetchAllMenuSuccess(res.data))).catch(err=>
            dispatch(fetchMenuError(err.response))
            )
}

export const addMenuItemSuccess = item=>({
    type:ADD_MENU_ITEM_SUCCESS,
    payload:item
})


export const fetchCategories =()=> dispatch=>{
    axios
        .get('http://localhost:3000/categories')
        .then(res=> dispatch(fetchCategoriesSuccess(res.data)))
        .catch(error=>dispatch(fetchcategoriesError(error)))

}


export const fetchMenuItemByCategory = category =>dispatch=>{
    axios
        .get(`http://localhost:3000/menu?category=${category}`)
        .then(res => dispatch({
            type: FETCH_ITEM_BY_CATEGORY_SUCCESS,
            payload:res.data.filter(item=> item.category === category)
        }))

}


export const getMenuItemByID = id => dispatch=>{
 dispatch(getMenuItemRequest())
    axios
        .get(`http://localhost:3000/menu/${id}`)
        .then(itm=>dispatch(getMenuItemSuccess(itm.data)))
        .catch(error=>dispatch(fetchMenuError(error.response)))
}

export const changeFilter = filter =>({
    type: CHANGE_FILTER,
    payload: filter

})

export const addMenuItem = item=> dispatch=>{
     axios.post('http://localhost:3000/menu',item)
         .then(res=>dispatch(addMenuItemSuccess(res.data)))
         .catch(error=>dispatch(fetchMenuError(error)))
}

export const deleteMenuItem = id => dispatch=>{
     axios
         .delete(`http://localhost:3000/menu/${id}`)
         .then(res=>dispatch(deleteMenuItemSuccess(res)))
         .catch(err=>dispatch(fetchMenuError(err)))
}

