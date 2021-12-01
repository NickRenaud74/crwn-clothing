import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles'

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

function CartDropdown() {
    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCartHidden())
        history.push('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {   cartItems.length ?
                    cartItems.map(cartItem => <CartItem  key={cartItem.id} item={cartItem} />)
                    : <EmptyMessage>Your cart is empty.</EmptyMessage>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={handleClick}>
                 GO TO CHECKOUT 
            </CartDropdownButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;