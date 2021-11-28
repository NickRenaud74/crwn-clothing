import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

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
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   cartItems.length ?
                    cartItems.map(cartItem => <CartItem  key={cartItem.id} item={cartItem} />)
                    : <span className='empty-message'>Your cart is empty.</span>
                }
            </div>
            <CustomButton onClick={handleClick}>
                 GO TO CHECKOUT 
            </CustomButton>
        </div>
    )
}

export default CartDropdown;