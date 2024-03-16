import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import back from '../images/bg_1.jpg';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SpaIcon from '@mui/icons-material/Spa';
import GroupIcon from '@mui/icons-material/Group';

import { Page } from './Page';
import Diversity1Icon from '@mui/icons-material/Diversity1';



export const Home = () => {
    const countries = 46;
    const companies = 450;
    const active = 80000;
    return (
        <>

            <div className="hero-wrap img" style={{ backgroundImage: `url(${back})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-10 d-flex align-items-center ">
                            <div className="text text-center pt-5 mt-md-5">
                                <p className="mb-4">Find Job, Employment, and Career Opportunities</p>
                                <h1 className="mb-5">The Eassiest Way to Get Your New Job</h1>
                                <div className="ftco-counter ftco-no-pt ftco-no-pb">
                                    <div className="row">
                                        <div className="col-md-4 d-flex justify-content-center counter-wrap ">
                                            <div className="block-18">
                                                <div className="text d-flex">
                                                    <div className="icon mr-2">
                                                        <span className="flaticon-worldwide"></span>
                                                    </div>
                                                    <div className="desc text-left">
                                                        <strong className="number">{countries}</strong>
                                                        <span>Countries</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center counter-wrap ">
                                            <div className="block-18 text-center">
                                                <div className="text d-flex">
                                                    <div className="icon mr-2">
                                                        <span className="flaticon-visitor"></span>
                                                    </div>
                                                    <div className="desc text-left">
                                                        <strong className="number" >{companies}</strong>
                                                        <span>Companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center counter-wrap ">
                                            <div className="block-18 text-center">
                                                <div className="text d-flex">
                                                    <div className="icon mr-2">
                                                        <span className="flaticon-resume"></span>
                                                    </div>
                                                    <div className="desc text-left">
                                                        <strong className="number" >{active}</strong>
                                                        <span>Active Employees</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="category-wrap">
                                <div className="row no-gutters">
                                    <div className="col-md-2">
                                        <div className="top-category text-center no-border-left">
                                            <h3><a href="#">Website &amp; Software</a></h3>
                                            <span className="icon flaticon-contact"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="top-category text-center active">
                                            <h3><a href="#">Education &amp; Training</a></h3>
                                            <span className="icon flaticon-mortarboard"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="top-category text-center">
                                            <h3><a href="#">Graphic &amp; UI/UX Design</a></h3>
                                            <span className="icon flaticon-idea"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="top-category text-center">
                                            <h3><a href="#">Accounting &amp; Finance</a></h3>
                                            <span className="icon flaticon-accounting"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="top-category text-center">
                                            <h3><a href="#">Restaurant &amp; Food</a></h3>
                                            <span className="icon flaticon-dish"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="top-category text-center">
                                            <h3><a href="#">Health &amp; Hospital</a></h3>
                                            <span className="icon flaticon-stethoscope"></span>
                                            <p><span className="number">143</span> <span>Open position</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Job Categories</span>
                            <h2 className="mb-0">Top Categories</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="category text-center">
                                <li><a href="#">Web Development <br /><span className="number">354</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Graphic Designer <br /><span className="number">143</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Multimedia <br /><span className="number">100</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Advertising <br /><span className="number">90</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="category text-center">
                                <li><a href="#">Education &amp; Training <br /><span className="number">100</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">English <br /><span className="number">200</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Social Media <br /><span className="number">300</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Writing <br /><span className="number">150</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="category text-center">
                                <li><a href="#">PHP Programming <br /><span className="number">400</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Project Management <br /><span className="number">100</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Finance Management <br /><span className="number">222</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Office &amp; Admin <br /><span className="number">123</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="category text-center">
                                <li><a href="#">Web Designer<br /><span className="number">324</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Customer Service <br /><span className="number">564</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Marketing &amp; Sales <br /><span className="number">234</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                                <li><a href="#">Software Development <br /><span className="number">425</span> <span>Open position</span><ArrowForwardIosIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section services-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ">
                            <div className="media block-6 services d-block">
                                <div className="icon"><FilePresentIcon style={{ width: '10vh', height: "10vh", color: 'white' }} /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Search Millions of Jobs</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ">
                            <div className="media block-6 services d-block">
                                <div className="icon"><Diversity1Icon style={{ width: '10vh', height: "10vh", color: 'white' }} /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Easy To Manage Jobs</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ">
                            <div className="media block-6 services d-block">
                                <div className="icon"><SpaIcon style={{ width: '10vh', height: "10vh", color: 'white' }} /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Top Careers</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ">
                            <div className="media block-6 services d-block">
                                <div className="icon"><GroupIcon style={{ width: '10vh', height: "10vh", color: 'white' }} /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Search Expert Candidates</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Page />



        </>
    );
}
