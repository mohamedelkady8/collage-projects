import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const found = cartItems.find((cartItem) => cartItem.id === item.id);
        if (found) {
            alert('Product already in the cart');
            return;
        }
        const newItem = { ...item, quantity: 1 };
        setCartItems((prevItems) => [...prevItems, newItem]);
    };
    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCartItems);
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};