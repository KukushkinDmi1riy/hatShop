import React from 'react';

import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component'

// import CustomButton from '../custom-button/custom-button.component'

import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton} from './cart-dropdown.styles'

// import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return(
        <CartDropdownContainer>
            <CartItemsContainer>

                {cartItems.length ? 
                    (cartItems.map((cartItem)=> (
                    <CartItem key = {cartItem.id} item={cartItem}/>
                ))):
                (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}

            </CartItemsContainer>
            <CartDropdownButton onClick ={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = (state) => ( {
    cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown));