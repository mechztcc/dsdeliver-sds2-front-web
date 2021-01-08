import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';

import './styles.css';
import { Product } from './types';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);
    


    useEffect(() => {
        fetchProducts().then((resp) => setProducts(resp.data))
        .catch(err => console.log())
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
    )
}


export default Orders;