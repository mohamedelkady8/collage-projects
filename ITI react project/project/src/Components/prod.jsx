import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom";

const Post_details = ()=>{
    const [det , setDet] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const getId = (id)=>{
            axios.get(`http://localhost:1000/products/${id}`)
            .then((res)=>{
                console.log(res.data);
                setDet(res.data);
            })
            .catch((er)=>console.log(er));
        }
        getId(id);
    },[]);
    return(
        <div>
            <h1 className="text-center">Product Details</h1>
            <div className="card-body">
            <h4 className="card-title text-center">Brand : {det.brand}</h4>
            <p className="text-body-secondary text-center">Price : {det.price}</p>
            <img src={Array.isArray(det.images) ? det.images[1] : det.images} height={200}/>
            <p className="card-text text-center">Description : {det.description}</p>
            <p className="card-text text-center">Rating : {det.rating?det.rating:0}</p>
            <p className="text-center">Stock : {det.stock?(det.stock==30?<h1 className="text-danger">Sold Out!!</h1>:det.stock):0}</p>
            <div className="text-center">
            <Link to="/Products" class="btn btn-primary">Go to Poduct</Link>
            </div>
            </div>
        </div>
    )
}
export default Post_details