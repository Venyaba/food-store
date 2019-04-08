import React,{Component} from 'react'
import OrderHistory from './OrderHistory'
import Modal from './Modal'
import Loader from 'react-loader-spinner'

const getFormattedTime =(time)=> {
    const date = new Date(time);
    let day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear()
    return `${day}/${month}/${year}`

}
const time = Date.now()

const styles={
    position: 'absolute',
    top: '50%',
    left:'50%',
    fontSize: '40px',
}

class OrderHistoryPage extends Component{
    state ={
        isModalOpen:false,
        item:{
            date: getFormattedTime(time),
            address:'',
            price:'',
            rating:'',
        }
    }
    componentDidMount() {
        this.props.fetchOrders()

    }


    handleDeleteOrderItem = id =>{
         this.props.deleteOrder(id)
    }

    handleShowMoreOrderInfo =(id)=>{
        this.props.getOrderById(id)

            this.setState(state=>({
                ...state,
                isModalOpen:true,

            }))

    }

    handleChange = e => {
        this.setState({item:{
            ...this.state.item,
            [e.target.name]: e.target.value
            }
    })

    }


    handleAddOrderItem = (e) =>{
        e.preventDefault()

        this.props.addNewOrder(this.state.item)
        document.querySelector('.orderForm').reset()

        }



    handleCloseModal=()=>{

        this.setState({isModalOpen:false})
        this.props.history.push({
            pathname: '/orders'
        })
    }

    render(){
        const {orders,isLoading} = this.props

        const {isModalOpen}= this.state
        return(
            <div className='order__box'>
                <OrderHistory  items={orders}
                               onDelete={this.handleDeleteOrderItem}
                               onShowMoreInfo ={this.handleShowMoreOrderInfo}
                />
                {isLoading &&<div style={styles}> <Loader type="ThreeDots" color="#2EE59D" height={80} width={80} /></div>}
                {isModalOpen && <Modal onClose={this.handleCloseModal}  />}

                <form className='orderForm' onSubmit={this.handleAddOrderItem} >
                    <input type ='text' name='address'  placeholder='address...' onChange={this.handleChange}/>
                    <input type ='text' name='price' placeholder='price...' onChange={this.handleChange}/>
                    <input type ='text' name='rating' placeholder='rating...' onChange={this.handleChange}/>
                    <button type='submit'>Добавить заказ</button>
                </form>
            </div>
        )

    }
}




export default OrderHistoryPage;