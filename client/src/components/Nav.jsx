import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();
    const [pos, setPos] = useState('');
    // const [userdata, setUserdata] = useState();
    const callapi = async () => {
        try {
            const res = await fetch('/getinfo', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await res.json();
            if (res.status === 426 || !data) {
                const error = new Error(res.error);
                throw error;
            }
            else if (res.status === 201) {
                setPos('user');
            }
            else {
                setPos("Company");
                // console.log(data[0].title);
            }
        }
        catch (Err) {
            console.error(Err);
            navigate('/Login');
        }
    }

    useEffect(() => {
        callapi();
    }, []);
    const RenderMenu = () => {
        if (pos === 'user') {
            return (<>
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/browser" className="nav-link">Browse Jobs</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/form" className="nav-link">Registration</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>
                <li className="nav-item cta cta-colored"><Link to="/job_single" className="nav-link">Want a Job</Link></li>
                <li className="nav-item cta mr-md-1"><Link to="/layout" className="nav-link">Admin Chat</Link></li>
            </>);
        }
        else if (pos === 'Company') {
            return (<>
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/candidate" className="nav-link">Canditates</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/company" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>
                <li className="nav-item cta mr-md-1"><Link to="/post" className="nav-link">Post a Job</Link></li>
                <li className="nav-item cta mr-md-1"><Link to="/layout" className="nav-link">Admin Chat</Link></li>

            </>);
        }
        else {
            return (<>
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/browser" className="nav-link">Browse Jobs</Link></li>
                <li className="nav-item"><Link to="/candidate" className="nav-link">Canditates</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/form" className="nav-link">Registration</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>
                <li className="nav-item cta mr-md-1"><Link to="/post" className="nav-link">Post a Job</Link></li>
                <li className="nav-item cta cta-colored"><Link to="/job_single" className="nav-link">Want a Job</Link></li>

            </>);
        }

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container-fluid px-md-4	">
                    <Link className="navbar-brand" to="/">DreamJob</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <RenderMenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
