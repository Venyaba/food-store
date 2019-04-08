import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import AppHeader from './components/App-header'
import MenuPage from './components/containers/MenuPageContainer';
import SignInForm from './components/containers/SignInContainer'
import SignUpForm from './components/SignUpForm.jsx'
import OrderHistoryPage from './components/containers/OrderHistoryPageContainer'
import MenuItemPage from './components/containers/MenuItemPageContainer'
import NewMenuItem from './components/containers/NewMenuItemContainer'



class App extends Component {


  render() {

        return (
            <div className="App">
                <AppHeader/>

                <Switch>
                    <Route exact path={`/menu/add`} component={NewMenuItem}/>
                    <Route exact path='/menu/:id' component={MenuItemPage}/>
                    <Route  path='/menu' component={MenuPage}/>
                    <Route path='/orders' component={OrderHistoryPage}/>
                    <Route path = '/signin' component = {SignInForm}/>
                    <Route path = '/signup' component = {SignUpForm}/>

                </Switch>
            </div>
        );
    }
}

export default App;
