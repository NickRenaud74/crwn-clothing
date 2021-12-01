import React from 'react';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';

import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage({ match }) {
    const collection = useSelector(selectCollection(match.params.collectionId))
    console.log(collection)

    const { title, items } = collection

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export default CollectionPage