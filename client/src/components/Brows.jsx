import React, { useState, useEffect } from 'react'
import back from '../images/bg_1.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Brows = () => {
    const navigate = useNavigate();
    // const [userdata, setUserdata] = useState();
    const [pos, setPos] = useState([]);
    const callapi = async () => {
        try {
            const res = await fetch('/job', {
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
            else {
                setPos(data);
                // console.log(data[0].title);
            }
        }
        catch (Err) {
            console.error(Err);
            navigate('/');
        }
    }

    useEffect(() => {
        callapi();
    }, []);

    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12  text-center mb-5">
                            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>About</span></p>
                            <h1 className="mb-3 bread">Browse Jobs</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pr-lg-4">
                            <div className="row">
                                {pos.map((val, key) => {
                                    return (<>
                                        <div className="col-md-12 ">
                                            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                                <div className="one-third mb-4 mb-md-0">
                                                    <div className="job-post-item-header align-items-center">
                                                        <span className="subadge">{val.JobType}</span>
                                                        <h2 className="mr-3 text-black">{val.jobTitle}</h2>
                                                    </div>
                                                    <div className="job-post-item-body d-block d-md-flex">
                                                        <div className="mr-3"><span className="icon-layers"></span>{val.CompanyName}</div>
                                                        <div><span className="icon-my_location"></span> <span>{val.Location}</span></div>
                                                    </div>
                                                </div>

                                                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                                                    <button className="btn btn-primary py-2" onClick={async () => {
                                                        try {
                                                            const res = await fetch(`/${val.id}/applyjob`, {
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
                                                            else {
                                                                setPos(data);
                                                                // console.log(data[0].title);
                                                            }
                                                        }
                                                        catch (Err) {
                                                            console.error(Err);
                                                            navigate('/');
                                                        }
                                                    }}>Apply Job</button>
                                                </div>
                                            </div>
                                        </div></>);
                                })}
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-box bg-white p-4 ">
                                <h3 className="heading-sidebar">Browse Category</h3>
                                <form action="#" className="search-form mb-3">
                                    <div className="form-group">
                                        <span className="icon icon-search"></span>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                    </div>
                                </form>
                                <form action="#" className="browse-form">
                                    <label for="option-job-1"><input type="checkbox" id="option-job-1" name="vehicle" value="" checked /> Website &amp; Software</label><br />
                                    <label for="option-job-2"><input type="checkbox" id="option-job-2" name="vehicle" value="" /> Education &amp; Training</label><br />
                                    <label for="option-job-3"><input type="checkbox" id="option-job-3" name="vehicle" value="" /> Graphics Design</label><br />
                                    <label for="option-job-4"><input type="checkbox" id="option-job-4" name="vehicle" value="" /> Accounting &amp; Finance</label><br />
                                    <label for="option-job-5"><input type="checkbox" id="option-job-5" name="vehicle" value="" /> Restaurant &amp; Food</label><br />
                                    <label for="option-job-6"><input type="checkbox" id="option-job-6" name="vehicle" value="" /> Health &amp; Hospital</label><br />
                                </form>
                            </div>

                            <div className="sidebar-box bg-white p-4 ">
                                <h3 className="heading-sidebar">Select Location</h3>
                                <form action="#" className="search-form mb-3">
                                    <div className="form-group">
                                        <span className="icon icon-search"></span>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                    </div>
                                </form>
                                <form action="#" className="browse-form">
                                    <label for="option-location-1"><input type="checkbox" id="option-location-1" name="vehicle" value="" checked /> Sydney, Australia</label><br />
                                    <label for="option-location-2"><input type="checkbox" id="option-location-2" name="vehicle" value="" /> New York, United States</label><br />
                                    <label for="option-location-3"><input type="checkbox" id="option-location-3" name="vehicle" value="" /> Tokyo, Japan</label><br />
                                    <label for="option-location-4"><input type="checkbox" id="option-location-4" name="vehicle" value="" /> Manila, Philippines</label><br />
                                    <label for="option-location-5"><input type="checkbox" id="option-location-5" name="vehicle" value="" /> Seoul, South Korea</label><br />
                                    <label for="option-location-6"><input type="checkbox" id="option-location-6" name="vehicle" value="" /> Western City, UK</label><br />
                                </form>
                            </div>

                            <div className="sidebar-box bg-white p-4 ">
                                <h3 className="heading-sidebar">Job Type</h3>
                                <form action="#" className="browse-form">
                                    <label for="option-job-type-1"><input type="checkbox" id="option-job-type-1" name="vehicle" value="" checked /> Partime</label><br />
                                    <label for="option-job-type-2"><input type="checkbox" id="option-job-type-2" name="vehicle" value="" /> Fulltime</label><br />
                                    <label for="option-job-type-3"><input type="checkbox" id="option-job-type-3" name="vehicle" value="" /> Intership</label><br />
                                    <label for="option-job-type-4"><input type="checkbox" id="option-job-type-4" name="vehicle" value="" /> Temporary</label><br />
                                    <label for="option-job-type-5"><input type="checkbox" id="option-job-type-5" name="vehicle" value="" /> Freelance</label><br />
                                    <label for="option-job-type-6"><input type="checkbox" id="option-job-type-6" name="vehicle" value="" /> Fixed</label><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Brows