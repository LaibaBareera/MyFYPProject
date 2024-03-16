import React, { useEffect, useState } from 'react'
import back from '../images/bg_1.jpg';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const New_post = () => {
    const [user, setUser] = useState({
        jobTitle: "",
        Salary: "",
        CompanyName: "",
        JobType: "",
        Location: "",
        jobDescription: ""
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
        const { jobTitle, Salary, CompanyName, JobType, Location, jobDescription } = user;
        const ras = await fetch('/postnewjob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jobTitle, Salary, CompanyName, JobType, Location, jobDescription
            })
        });
        const res = await ras.json();
        if (ras.status === 422 || !res) {
            alert('Your network is not stable');
        }
        else {
            alert("Post is successfully added");
            navigate('/');

        }

    }
    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12  text-center mb-5">
                            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>Job Post</span></p>
                            <h1 className="mb-3 bread">Post A Job</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-lg-8 mb-5">

                            <form method='POST' onSubmit={handle} className="p-5 bg-white">

                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" for="fullname">Job Title</label>
                                        <input onChange={getdata} name='jobTitle' value={user.jobTitle} type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" for="fullname">Salary</label>
                                        <input onChange={getdata} name='Salary' value={user.Salary} type="text" id="fullname" className="form-control" placeholder="eg. 50000" />
                                    </div>
                                </div>
                                <div className="row form-group mb-5">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" for="fullname">Company</label>
                                        <input onChange={getdata} name='CompanyName' value={user.CompanyName} type="text" id="fullname" className="form-control" placeholder="eg. Facebook, Inc." />
                                    </div>
                                </div>


                                <div className="row form-group">
                                    <div className="col-md-12"><h3>Job Type</h3></div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-1">
                                            <input onChange={getdata} name='JobType' value='Full Time' type="radio" id="option-job-type-1" /> Full Time
                                        </label>
                                    </div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-2">
                                            <input onChange={getdata} name='JobType' value='Part Time' type="radio" id="option-job-type-2" /> Part Time
                                        </label>
                                    </div>

                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-3">
                                            <input onChange={getdata} name='JobType' value='Freelance' type="radio" id="option-job-type-3" /> Freelance
                                        </label>
                                    </div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-4">
                                            <input onChange={getdata} name='JobType' value='Internship' type="radio" id="option-job-type-4" /> Internship
                                        </label>
                                    </div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-4">
                                            <input onChange={getdata} name='JobType' value='Termporary' type="radio" id="option-job-type-4" /> Termporary
                                        </label>
                                    </div>

                                </div>

                                <div className="row form-group mb-4">
                                    <div className="col-md-12"><h3>Location</h3></div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <input onChange={getdata} name='Location' value={user.Location} type="text" className="form-control" placeholder="Western City, UK" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12"><h3>Job Description</h3></div>
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <textarea name="jobDescription" className="form-control" id="" cols="30" rows="5" onChange={getdata} value={user.jobDescription}></textarea>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary  py-2 px-5">Post</button>
                                    </div>
                                </div>


                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">Contact Info</h3>
                                <p className="mb-0 font-weight-bold">Address</p>
                                <p className="mb-4">University of Engineering & Technology, Taxila </p>

                                <p className="mb-0 font-weight-bold">Phone</p>
                                <p className="mb-4"><a href="#">+923035800531</a></p>

                                <p className="mb-0 font-weight-bold">Email Address</p>
                                <p className="mb-0"><a href="#"><span className="__cf_email__" data-cfemail="671e081215020a060e0b2703080a060e094904080a">[email&#160;protected]</span></a></p>

                            </div>

                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">More Info</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
                                <p><a href="#" className="btn btn-primary  py-2 px-4">Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default New_post