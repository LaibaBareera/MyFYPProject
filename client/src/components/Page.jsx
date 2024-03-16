import React, { useState, useEffect } from 'react';
import img1 from '../images/person_1.jpg';
import img2 from '../images/person_2.jpg';
import img3 from '../images/person_3.jpg';
import img4 from '../images/person_4.jpg';
import img5 from '../images/person_5.jpg';
import img6 from '../images/person_6.jpg';
import img7 from '../images/image_1.jpg';
import img8 from '../images/image_2.jpg';
import img9 from '../images/image_3.jpg';
import img10 from '../images/image_4.jpg';
import img11 from '../images/company-1.jpg';
import img12 from '../images/company-2.jpg';
import { useNavigate } from 'react-router-dom';
import img13 from '../images/company-3.jpg';
import img14 from '../images/company-4.jpg';
import Testmodtive from './Testmodtive';

export const Page = () => {
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
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pr-lg-5">
                            <div className="row justify-content-center pb-3">
                                <div className="col-md-12 heading-section ">
                                    <span className="subheading">Recently Added Jobs</span>
                                    <h2 className="mb-4">Featured Jobs Posts For This Week</h2>
                                </div>
                            </div>

                            <div className="col-lg-12 pr-lg-8">
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
                            </div>
                        </div>
                        <div className="col-lg-3 sidebar">
                            <div className="row justify-content-center pb-3">
                                <div className="col-md-12 heading-section ">
                                    <h2 className="mb-4">Top Recruitments</h2>
                                </div>
                            </div>
                            <div className="sidebar-box ">
                                <div className="">
                                    <a href="#" className="company-wrap"><img src={img11} className="img-fluid" alt="Colorlib Free Template" /></a>
                                    <div className="text p-3">
                                        <h3><a href="#">Company Company</a></h3>
                                        <p><span className="number">500</span> <span>Open position</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box ">
                                <div className="">
                                    <a href="#" className="company-wrap"><img src={img12} className="img-fluid" alt="Colorlib Free Template" /></a>
                                    <div className="text p-3">
                                        <h3><a href="#">Facebook Company</a></h3>
                                        <p><span className="number">700</span> <span>Open position</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box ">
                                <div className="">
                                    <a href="#" className="company-wrap"><img src={img13} className="img-fluid" alt="Colorlib Free Template" /></a>
                                    <div className="text p-3">
                                        <h3><a href="#">IT Programming INC</a></h3>
                                        <p><span className="number">700</span> <span>Open position</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box ">
                                <div className="">
                                    <a href="#" className="company-wrap"><img src={img14} className="img-fluid" alt="Colorlib Free Template" /></a>
                                    <div className="text p-3">
                                        <h3><a href="#">IT Programming INC</a></h3>
                                        <p><span className="number">700</span> <span>Open position</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center heading-section ">
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-4">Happy Clients</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel ftco-owl">
                                <Testmodtive />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-candidates bg-primary">
                <div className="container">
                    <div className="row justify-content-center pb-3">
                        <div className="col-md-10 heading-section heading-section-white text-center ">
                            <span className="subheading">Candidates</span>
                            <h2 className="mb-4">Latest Candidates</h2>
                        </div>
                    </div>
                </div>
                <div className="containers">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="carousel-candidates owl-carousel">
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img1})` }}></div>
                                        <h2>Danica Lewis</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img2})` }}></div>
                                        <h2>Nicole Simon</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img3})` }}></div>
                                        <h2>Cloe Meyer</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img4})` }}></div>
                                        <h2>Rachel Clinton</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img5})` }}></div>
                                        <h2>Dave Buff</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#" className="team text-center">
                                        <div className="img" style={{ backgroundImage: `url(${img6})` }}></div>
                                        <h2>Dave Buff</h2>
                                        <span className="position">Western City, UK</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <span className="subheading">Our Blog</span>
                            <h2><span>Recent</span> Blog</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex ">
                            <div className="blog-entry align-self-stretch">
                                <a href='/login' className="block-20" style={{ backgroundImage: `url(${img7})` }}>
                                </a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div><a href="#">August 28, 2019</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ">
                            <div className="blog-entry align-self-stretch">
                                <a href="/blog_single" className="block-20" style={{ backgroundImage: `url(${img8})` }}>
                                </a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div><a href="#">August 28, 2019</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ">
                            <div className="blog-entry align-self-stretch">
                                <a href="/blog_single" className="block-20" style={{ backgroundImage: `url(${img9})` }}>
                                </a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div><a href="#">August 28, 2019</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ">
                            <div className="blog-entry align-self-stretch">
                                <a href="/blog_single" className="block-20" style={{ backgroundImage: `url(${img10})` }}>
                                </a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div><a href="#">August 28, 2019</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
