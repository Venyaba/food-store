import axios from 'axios'

axios.defaults.baseURL='http://localhost:4040'

export default function setAuthorization(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete axios.defaults.headers.common['Athorization']
    }

}