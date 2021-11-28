import React, { useState, useEffect } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data'

function ShopPage() {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        setCollections(SHOP_DATA);
    },[]);

    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;