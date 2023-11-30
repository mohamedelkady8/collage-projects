import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from '../Style/LoginReg.module.css'
export const Register = (props) => {
    props.navShow(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            password: pass
        };
        localStorage.setItem(formData.email, JSON.stringify(formData));
        console.log(formData);
        navigate('/');
        console.log(email);
    }

    return (
        <div className={Style.App}>
            <div className={Style.auth}>
                <h2>Register</h2>
                <form className={Style.register} onSubmit={handleSubmit}>
                    <label className={Style.label} htmlFor="name">Full name</label>
                    <input className={Style.input} value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className={Style.label} htmlFor="email">Email</label>
                    <input className={Style.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className={Style.label} htmlFor="password">Password</label>
                    <input className={Style.input} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" className={Style.button}>Register</button>
                </form>
                <button className={Style.button} onClick={() => navigate('/')}>Already have an account? Login here.</button>
            </div>
        </div>

    )
}
