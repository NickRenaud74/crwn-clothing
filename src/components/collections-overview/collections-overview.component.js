import React, { useState, useEffect } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import { CollectionsOverviewContainer } from './collections-overview.styles';


function CollectionsOverview(){
    const [collections, setCollections] = useState([])
    const shopData = useSelector(selectCollectionsForPreview)

    useEffect(() => {
        setCollections(shopData);
        // eslint-disable-next-line
    }, []);

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))         
            }
        </CollectionsOverviewContainer>
    )
};

export default CollectionsOverview