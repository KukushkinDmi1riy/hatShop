import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview.component'

import {CollectionsOverviewContainer} from './collection-overview.styles'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionsOverviewContainer>
             {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
        </CollectionsOverviewContainer>
    )
}

const mapStateToPtops = createStructuredSelector({
    collections: selectCollectionsForPreview
})




export default connect(mapStateToPtops)(CollectionsOverview);