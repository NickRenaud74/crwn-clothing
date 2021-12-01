import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

function CartIcon() {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartItemsCount)

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon />
            <ItemCount> {itemCount} </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;