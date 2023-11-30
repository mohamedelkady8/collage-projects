import React from 'react';
import styles from '../Style/footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.column}>

            <div className={ styles.logo }>
            <i class="fa-solid fa-chair"></i>
            <h4>INWOOD</h4>
                </div>
            <div className={ styles.box }>
                        <div className={ styles.icons }>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i class="fa-solid fa-globe"></i>
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <h5>Address</h5>
                        <p>+17373536920</p>
                        <p>877,  Bronx, NY</p>
                        <p>1468, NGE, USA</p>
            </div>
                <p className= {styles.pg}>Copyright  &copy;2020 INWOOD,All Rights Reserved</p>
            </div>
            <div className={styles.column}>
            <h4>My Account</h4>
            <h5>Sign In</h5>
            <h5>Register</h5>
            <h5>Order Status</h5>
            </div>

            <div className={styles.column}>
            <h4>Help</h4>
            <h5>Shipping</h5>
            <h5>Returns</h5>
            <h5>Sizing</h5>
            </div>
            <div className={styles.column}>
            <h4>Shop</h4>
            <h5>All Products</h5>
            <h5>Bedroom</h5>
            <h5>Dinning Room</h5>
            </div>
            <div className={styles.column}>
            <h4>Legal Stuff</h4>
            <h5>Shipping & Delivery</h5>
            <h5>Terms & Conditions</h5>
            <h5>Privacy & Policy</h5>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;
