
import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import style from '../Style/Cart.module.css'

const Cart = () => {
    const { cartItems , increaseQuantity  ,decreaseQuantity} = useContext(CartContext);
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            const itemPrice = parseFloat(item.price);
            const itemQuantity = parseInt(item.quantity);
            totalPrice += (itemPrice * (item.discountPercentage / 100)) * itemQuantity;
        });
        return totalPrice.toFixed(2);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul className={style.cart}>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <div className={style.details}>
                            <img src={item.images[0]} width={60} height={60}/>
                            <span className={style.title}>{item.title}</span>
                            <span className={style.price}>${item.price}</span>
                        </div>
                        <div className={style.quantity}>
                            Quantity: {item.quantity}
                            <button className={style.btn} onClick={() => increaseQuantity(item)}>+</button>
                            <button className={style.btn} onClick={() => decreaseQuantity(item)}>-</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h3 className={style.total}>Total Price: ${calculateTotalPrice()}</h3>
        </div>
    );
};

export default Cart;
