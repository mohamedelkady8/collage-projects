import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = ()=>{
    const [prod , setProd] = useState({title : '' , description:'' , price: 0 , discountPercentage:0, brand:'' , category:'' ,rating : 0 , stock:0, images:'https://source.unsplash.com/random' });
    const handleChange = (e)=>{
        const {name , value} = e.target;
        setProd(old=>({
            ...old,[name]:value
        }))
    }
    const navigate = useNavigate();
    let add_prod = (e)=>{
        e.preventDefault();
        axios.post("  http://localhost:1000/products" , prod)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/Products')
    }
    return (
        <div className="mb-5">
            <h1 className="text-center">Add Product</h1>
            <form action="" onSubmit={add_prod} className="container">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" name="title" onChange={handleChange}/>
                    <label htmlFor="name">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="description" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" name="price" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" name="discountPercentage" onChange={handleChange}/>
                    <label htmlFor="floatingInput">DiscountPercentage</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="brand" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Brand</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="category" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Category</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="rating" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Rating</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="stock" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Stock</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" name="images" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Image</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default AddProduct