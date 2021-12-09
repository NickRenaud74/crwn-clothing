import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match }) {
    const isCollectionFetching = useSelector(selectIsCollectionsLoaded);
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (
        <div>
             <Route 
                exact path={`${match.path}`} 
                render={props => (
                <CollectionsOverviewWithSpinner isLoading={!isCollectionFetching} {...props} /> 
                )}
            />
             <Route 
                path={`${match.path}/:collectionId`} 
                render={props => (
                    <CollectionPageWithSpinner isLoading={!isCollectionFetching} {...props} />
                )}
             />
        </div>
    )
}

export default ShopPage;