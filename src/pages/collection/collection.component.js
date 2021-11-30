import React from 'react';
import './collection.styles.scss';

import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage({ match }) {
    const collection = useSelector(selectCollection(match.params.collectionId))
    console.log(collection)

    const { title, items } = collection

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage