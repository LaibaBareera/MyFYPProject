import React, { useState } from "react";
import '../css/style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import back from '../images/bg_1.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmed: ""
  });
  const [Error_message, setError_message] = useState("");
  const navigate = useNavigate();
  let name, value;
  const getdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  const handle = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmed } = user;
    const ras = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "http://localhost:5000"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        confirmed
      })
    });
    const res = await ras.json();
    if (ras.status === 422 || !res) {
      setError_message("Invalid Credentials");
    }
    else {
      navigate('/login');
    }

  }
  const han = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmed } = user;
    const ras = await fetch('/companysignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "http://localhost:5000"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        confirmed
      })
    });
    const res = await ras.json();
    if (ras.status === 422 || !res) {
      setError_message("Invalid Credentials");
    }
    else {
      navigate('/login');
    }

  }
  return (<>
    <div class="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12  text-center mb-5">
            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>SignUp</span></p>
            <h1 class="mb-3 bread">SignUp</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-7 mx-auto">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign up</h3>
              <div className="form-message form-message--error">{Error_message}</div>
              <form method="POST" name="registration" >
                <div className="form-group">
                  <label htmlFor="email">Name</label>
                  <input
                    type="text"
                    name='name'
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={getdata}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name='email'
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={getdata}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Phone Number</label>
                  <input
                    type="number"
                    name='phone'
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone Number"
                    value={user.phone}
                    onChange={getdata}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={getdata}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmed"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={user.confirmed}
                    onChange={getdata}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4" onClick={handle}>
                  Sign up as a Employee
                </button>
                <button type="submit" className="btn btn-primary btn-block mt-4" onClick={han}>
                  Sign up as a Company
                </button>
              </form>
              <div className="text-center mt-4">
                <p>Already have an account?</p>
                <NavLink to='/login'>Login here</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export default SignUp;