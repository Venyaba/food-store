import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import queryString from 'query-string'
import MenuGrid from './MenuGrid'
import MenuFilter from './containers/MenuFilterContainer'
import CategorySelector from '../components/CategorySelector'
import * as menuApi from '../services/menu-api'



const getCategoryFromProps = props => queryString.parse(props.location.search).category

const styles={
    position: 'absolute',
    top: '50%',
    left:'50%',
    fontSize: '40px',
}



class MenuPage extends Component {

    handleCategoryChange = category => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `category=${category}`,
        })

    }


    componentDidMount() {

        this.props.fetchCategories()

        const category = getCategoryFromProps(this.props);

        if(!category) return this.props.fetchMenu()

        this.props.fetchMenuItemByCategory(category)



    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        const category = getCategoryFromProps(this.props)

        const prevCategory = getCategoryFromProps(prevProps)
        const nextCategory = getCategoryFromProps(this.props)


        if (prevCategory === nextCategory) return
        if(category) return this.props.fetchMenuItemByCategory(nextCategory)

        this.props.fetchMenu()

    }



    handleCleanSelector = () => {

        this.props.history.push({
            pathname: this.props.location.pathname
        })

    }

    handleOnshowMoreInfo = (id) => {
        menuApi.getMenuItemById(id).then(itm => itm)

    }



    render() {
        const currentCategory = getCategoryFromProps(this.props)
        const { error, isLoading, items } = this.props;


        return (
            < div className='menu__page'>
                <NavLink  to={`/menu/add`} className="Nav_link"> Добавить элемент меню</NavLink>

                <div className='filters__box'>
                    <CategorySelector options={this.props.categories}
                                      value={currentCategory}
                                      onChange={this.handleCategoryChange}
                                      onClean={this.handleCleanSelector}/>
                    <MenuFilter value ={this.props.filter} onChane={this.props.onChange}/>
                </div>
                {error?<div style={{fontSize:'40px',marginTop:'20px'} }>Error!{`${error.status} ${error.statusText}`}</div>:null}
                {isLoading?<div style={styles}><Loader type="ThreeDots" color="#2EE59D" height={80} width={80} /></div>:
                 <MenuGrid items={items} onShowMoreInfo={this.handleOnshowMoreInfo}/>}

            </div>
        )
    }
}

export default MenuPage;