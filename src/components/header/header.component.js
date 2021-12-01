import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

function Header() {
    const currentUser = useSelector(selectCurrentUser)
    const cartHidden = useSelector(selectCartHidden)

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                        <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT </OptionLink>
                    :
                        <OptionLink to='/signin'> SIGN IN </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {cartHidden ? null : <CartDropdown /> }
        </HeaderContainer>
    )   
};

export default Header;