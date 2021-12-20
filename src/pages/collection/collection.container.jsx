import { connect } from 'react-redux'

import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import collectionComponent from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )// eslint-disable-next-line no-unexpected-multiline
    (collectionComponent)

export default CollectionPageContainer
