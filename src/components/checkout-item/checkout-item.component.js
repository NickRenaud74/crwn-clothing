import React from 'react';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import { Arrow, CheckoutItemContainer, ImageContainer, RemoveButton, Value, StyledSpan } from './checkout-item.styles'

function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity } = cartItem

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <StyledSpan>{name}</StyledSpan>
            <StyledSpan quantity>
                <Arrow onClick={() => dispatch(removeItem(cartItem))} > &#10094; </Arrow>
                <Value> {quantity} </Value> 
                <Arrow onClick={() => dispatch(addItem(cartItem))} > &#10095; </Arrow>
            </StyledSpan>
            <StyledSpan>{price}</StyledSpan>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}> &#10005; </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem