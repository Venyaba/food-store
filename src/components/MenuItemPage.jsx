import React from 'react';
import Loader from 'react-loader-spinner'




const styles={
    position: 'absolute',
    top: '50%',
    left:'50%',
    fontSize: '40px',
}

class MenuItemPage extends React.Component {


    componentDidMount() {

        this.props.getMenuItemByID(this.props.match.params.id)

    }

    handleGoBackToMenu = ()=>{
        this.props.history.push(this.props.location.state.from)

    }
    handleDeleteMenuItem = id =>{
        this.props.deleteMenuItem(this.props.match.params.id)
        this.props.history.push(this.props.location.state.from)

    }



    render() {

         const menuItem = this.props.item?<div className='menuItem'>
             <img src={this.props.item.image} alt={this.props.item.name} width={320} height={240}/>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
             <p style={{fontStyle:'italic'}}>{`категория:${this.props.item.category}`}</p>
             <h4> Ингредиенты</h4>
            <ul>{this.props.item.ingredients.map(item=><li key={item}> {item}</li>)}</ul>
            <p className='price'>{`${this.props.item.price} грн.`}</p><button type='button' onClick={this.handleDeleteMenuItem}>Удалить</button></div>:null
        return (
            <div className='menuItem__box'>
                <button type='button' onClick={this.handleGoBackToMenu}>Назад в меню</button>
                {this.props.error?<div style={{fontSize:'40px',marginTop:'20px'} }>Error!{`${this.props.error.status} ${this.props.error.statusText}`}</div>:null}
                {this.props.loading?<div style={styles}><Loader type="ThreeDots" color="#2EE59D" height={80} width={80} />
                </div>:menuItem}
            </div>)


    }
}

export default MenuItemPage;

