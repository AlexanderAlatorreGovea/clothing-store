import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection.js';
import WithSpinner from '../../components/Spinner/Spinner'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
    
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={props => (
                        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => (
                        <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
                    )}
                />
            </div>
        )
    }
}   

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);


