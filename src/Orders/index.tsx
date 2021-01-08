import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';

import './styles.css';
import { OrderLocationdata, Product } from './types';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
    


    useEffect(() => {
        fetchProducts().then((resp) => setProducts(resp.data))
        .catch(err => console.log())
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}


export default Orders;