import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

import HomePage from './pages/homepage/hompage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import CheckoutPage from './pages/chekcout/checkout.component.jsx'
import './App.css';

import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'


import { checkUserSession } from './redux/user/user.actions'



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount ()  {
    const {checkUserSession } = this.props;
    checkUserSession()
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }


  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route 
            exact 
            path="/signin" 
            render = {()=> 
               this.props.currentUser ? (
                <Redirect to='/' />
                ) : (
                <SignInAndSignUpPage/>
                ) 
          }
          />
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: ()=>dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
