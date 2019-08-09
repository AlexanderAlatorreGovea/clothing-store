import React, { Component } from 'react';

import SHOP_DATA from './ShopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                <div className='shop-page'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Shop;