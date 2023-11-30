import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext';


const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white bg-transparent">
                <div className="container">
                    <a className="navbar-brand fs-4" href="#">INWOOD</a>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: '#70908B' }}>
                        <div className="offcanvas-header text-dark border-bottom">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">INWOOD</h5>
                            <button type="button" className="btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link ms-5" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link ms-5" to="/products">Products</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link ms-5" to="/add">Add Product</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link ms-5" to="/search">Search</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/addtocart" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>{cartItems.length > 0 && (
                                        <sup
                                            style={{
                                                marginLeft: '2px',
                                                border: '1px solid red',
                                                borderRadius: '50%',
                                                padding: '1px 3px',
                                                backgroundColor: 'red'
                                            }}
                                        >
                                            {cartItems.length}
                                        </sup>
                                    )}
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Navbar