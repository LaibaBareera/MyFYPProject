import React, { useState, useEffect } from 'react'
import back from '../images/bg_1.jpg';
import { useNavigate } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        subject: "",
        message: ""
    });
    const [contact, setContact] = useState([]);
    const navigate = useNavigate();
    let name, value;
    const getdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handle = async (e) => {
        e.preventDefault();
        const { name, subject, message } = user;
        const ras = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                subject,
                message
            })
        });
        const res = await ras.json();
        if (ras.status === 422 || !res) {
            alert('Your network is not stable');
        }
        else {
            alert("message is successfully send");
            setUser({
                name: "",
                subject: "",
                message: ""
            });
            navigate('/contact');

        }

    }
    const callcontact = async () => {
        try {
            const res = await fetch('/getcontact',
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': "application/json"
                    },
                    credentials: "include"
                });
            const data = await res.json();
            console.log(data);
            setContact(data);
            if (res.status === 400) {
                alert("you have an error");
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        callcontact();
    }, [])
    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12 text-center mb-5">
                            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>Contact</span></p>
                            <h1 className="mb-3 bread">Contact us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h3">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-3">
                            <p><span>Address:</span> University of Engineering & Technology, Taxila </p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Phone:</span> <a href="tel://1234567920">+923035800531</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">dreamjob_ip@gmail.com</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <a href="/">dreamjob.com</a></p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6  d-flex">
                            <form onSubmit={handle} className="bg-white p-5 contact-form" method='POST'>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" name='name' value={user.name} onChange={getdata} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" name='subject' value={user.subject} onChange={getdata} />
                                </div>
                                <div className="form-group">
                                    <textarea name='message' id="" cols="30" rows="7" className="form-control" placeholder="Message" onChange={getdata} value={user.message}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6 d-flex order-md-last">
                            <div id="map" className="bg-white"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact