import  React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, CollectionTitle, PreviewContainer } from './collection-preview.styles';


function CollectionPreview({ title, items }) {

    const firstFourItems = items.filter((item, ind) => ind < 4)

    return (
        <CollectionPreviewContainer>
            <CollectionTitle>
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