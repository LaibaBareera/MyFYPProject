import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/person_1.jpg';
import img2 from '../images/person_2.jpg';
import img3 from '../images/person_3.jpg';
import img4 from '../images/person_4.jpg';
export default class Testmodtive extends Component {
    render() {
        return (
            <Carousel showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}>
                <div className="item ">
                    <div className="testimony-wrap py-4 ">

                        <div className="d-flex align-items-center">
                            <div className="user-img" style={{ backgroundImage: `url(${img1})`, width: '25vh', height: '25vh' }}></div>
                            <div className="pl-3 myCarousel">

                                <p className="name">Roger Scott</p>
                                <span className="position">Marketing Manager</span>
                                <div className="text">
                                    <p className="mb-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item ">
                    <div className="testimony-wrap py-4 ">

                        <div className="d-flex align-items-center">
                            <div className="user-img" style={{ backgroundImage: `url(${img2})`, width: '25vh', height: '25vh' }}></div>
                            <div className="pl-3 myCarousel">

                                <p className="name">Roger Scott</p>
                                <span className="position">Marketing Manager</span>
                                <div className="text">
                                    <p className="mb-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item ">
                    <div className="testimony-wrap py-4 ">

                        <div className="d-flex align-items-center">
                            <div className="user-img" style={{ backgroundImage: `url(${img3})`, width: '25vh', height: '25vh' }}></div>
                            <div className="pl-3 myCarousel">

                                <p className="name">Roger Scott</p>
                                <span className="position">Marketing Manager</span>
                                <div className="text">
                                    <p className="mb-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item ">
                    <div className="testimony-wrap py-4 ">

                        <div className="d-flex align-items-center">
                            <div className="user-img" style={{ backgroundImage: `url(${img4})`, width: '25vh', height: '25vh' }}></div>
                            <div className="pl-3 myCarousel">

                                <p className="name">Roger Scott</p>
                                <span className="position">Marketing Manager</span>
                                <div className="text">
                                    <p className="mb-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}
