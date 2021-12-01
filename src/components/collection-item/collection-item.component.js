import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { 
    CollectionFooterContainer, 
    CollectionImageContainer, 
    CollectionItemButton, 
    CollectionItemContainer, 
    NameContainer, 
    PriceContainer 
} from './collection-item.styles';


function CollectionItem({item}) {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <CollectionImageContainer className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer> { name } </NameContainer>
                <PriceContainer> {price} </PriceContainer>
            </CollectionFooterContainer>
            <CollectionItemButton inverted onClick={() => dispatch(addItem(item))} > ADD TO CART </CollectionItemButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;