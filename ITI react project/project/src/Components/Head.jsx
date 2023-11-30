import axios from 'axios';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import Style from '../Style/Head.module.css'
const Head = () => {
    const [prds, setPrds] = useState([]);
    const[min , setMin] = useState(0);
    const[max , setMax] = useState(9);
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
            <main className={Style.body}>
            <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-sm-center fs-8 px-9 py-2">
                <h1>Exclusive Deals of Furniture Collection</h1>
                <pre></pre>
                <h6>Explore different categories. Find the best deals.</h6>
                <pre></pre>
                <Link to="/products" className="btn btn-success">Shop Now</Link>
            </section>
        </main>
        <div className="row mt-3">
            <h2 className='mb-3'>Our Arrival</h2>
                {
                    prds?(prds.map((p) => {
                        if (p.id <= max && p.id > min)
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
export default Head