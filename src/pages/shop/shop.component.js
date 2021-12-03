import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match }) {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(async(snapshot) => {
            const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collectionsMap));
            setLoading(false);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
             <Route 
                exact path={`${match.path}`} 
                render={props => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> 
                )}
            />
             <Route 
                path={`${match.path}/:collectionId`} 
                render={props => (
                    <CollectionPageWithSpinner isLoading={loading} {...props} />
                )}
             />
        </div>
    )
}

export default ShopPage;