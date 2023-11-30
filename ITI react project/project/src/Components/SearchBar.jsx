import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/SearchBar.module.css';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1000/products')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setProducts(data);
                    setFilteredProducts(data);
                }
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul className={styles.productList}>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;