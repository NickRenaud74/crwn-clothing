import  React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { useHistory, useRouteMatch } from 'react-router-dom'
import { CollectionPreviewContainer, CollectionTitle, PreviewContainer } from './collection-preview.styles';


function CollectionPreview({ title, items, routeName }) {
    const history = useHistory();
    const match = useRouteMatch();
    const firstFourItems = items.filter((item, ind) => ind < 4)

    return (
        <CollectionPreviewContainer>
            <CollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
                {title}
            </CollectionTitle>
            <PreviewContainer>
                {
                    firstFourItems.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview