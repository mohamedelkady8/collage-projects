import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Style from '../Style/LoginReg.module.css'
export const Login = (props) => {
    props.navShow( false );
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: pass
        };
        const userData = JSON.parse(localStorage.getItem(formData.email));
        console.log(userData);
        if (userData) {
            if (userData.password === formData.password) {
                navigate('/home')
                alert(" You Are Successfully Logged In");
            } 
            else {
                alert("Email or Password is not matching with our record");
            }
        } else {
            alert("Email or Password is not matching with our record");
        }
        
        console.log(email);
    }
    return (
        <div className={Style.App}>
            <div className={Style.auth}>
            <h2>Login</h2>
            <form action="" className={Style.register} onSubmit={handleSubmit}>
                <label htmlFor="email" className={Style.label}>email</label>
                <input value={email} className={Style.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password" className={Style.label}>password</label>
                <input value={pass} className={Style.input} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" className={Style.button}>Log In</button>
            </form>
            <Link to="/reg" className={Style.link}>Register here</Link>
        </div>
        </div>
    )
}