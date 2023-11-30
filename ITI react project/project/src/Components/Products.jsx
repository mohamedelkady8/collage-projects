import axios from 'axios';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

import '../Style/Products.css'
const Products = () => {
    const [prds, setPrds] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext);
    const getPrds = useCallback(() => {
        axios.get("http://localhost:1000/products")
            .then(res => {
                console.log(res.data)
                setPrds(res.data)
            }).catch(err => console.log(err))
    }, [prds])
    useEffect(() => {
        getPrds()
    }, []);
    return (
        <div>
            <h2 style={{margin:'5px 0'}}>Our Products</h2>
            <div className="row">
                {
                    prds?(prds.map((p) => {
                        return (
                            <div className="con col-12 col-lg-4">
                                <div className="card-img-container">
                                    <img
                                        src={Array.isArray(p.images) ? p.images[0] : p.images}
                                        className="card-img-top"
                                        alt="..."
                                        height="200"
                                        
                                    />
                                    <div className="buttons">
                                        <Link to={`/product/${p.id}`} className="btn btn-success">
                                            Explore
                                        </Link>
                                        <button onClick={() => addToCart(p)} className="btn btn-danger ms-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="body">
                                    <h5>{p.title}</h5>
                                    <p>{p.price}$</p>
                                </div>
                            </div>
                        );
                    })):<h1>Loading.....</h1>
                }
            </div>
        </div>
    );
};

export default Products;