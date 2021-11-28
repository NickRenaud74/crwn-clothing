import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'

function CartDropdown() {
    const cartItems = useSelector(selectCartItems);

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem  key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )
}

export default CartDropdown;