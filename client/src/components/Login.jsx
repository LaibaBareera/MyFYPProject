import React, { useState, useContext } from "react";
import '../css/style.css';
import { userContext } from '../App.js';
import { NavLink, useNavigate } from 'react-router-dom';
import back from '../images/bg_1.jpg';
const Login = () => {
    const { state, dispatch } = useContext(userContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [Error_message, setError_message] = useState('');
    let name, value
    const getdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handle = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        const res = await fetch('/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );
        const data = await res.json();
        if (res.status === 422 || !data) {
            setError_message("Invalid Credentials");
        }
        else {
            dispatch({ type: 'USER', payload: true });
            navigate('/');
        }

    }
    return (
        <>
            <div class="hero-wraps hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="containers">
                    <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-12  text-center mb-5">
                            <h1 class="mb-3 bread">Login</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 mx-auto">
                        <div className="card mt-5">
                            <div className="card-body">
                                <div className="form-message form-message--error">{Error_message}</div>
                                <form onSubmit={handle} method="POST" name="login">
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email"
                                            value={user.email}
                                            onChange={getdata}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            value={user.password}
                                            onChange={getdata}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mt-4">
                                        Log in
                                    </button>
                                </form>
                                <div className="text-center mt-4">
                                    <p>Don't have an account?</p>
                                    <NavLink to='/register'>Sign up here</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;