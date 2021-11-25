import  React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';


function CollectionPreview({ title, items }) {

    const firstFourItems = items.filter((item, ind) => ind < 4)

    return (
        <div className='collection-preview'>
            <h1 className='title'>
                {title}
            </h1>
            <div className='preview'>
                {
                    firstFourItems.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview