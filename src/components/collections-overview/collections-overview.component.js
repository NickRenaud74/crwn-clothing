import React, { useState, useEffect } from 'react'
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component'

import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'


function CollectionsOverview(){
    const [collections, setCollections] = useState([])
    const shopData = useSelector(selectCollectionsForPreview)

    useEffect(() => {
        setCollections(shopData);
    }, []);

    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))         
            }
        </div>
    )
};

export default CollectionsOverview