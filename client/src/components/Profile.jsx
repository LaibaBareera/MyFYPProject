import React, { useEffect, useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import back from '../images/bg_1.jpg';

export default function Profile() {
    const navigate = useNavigate();
    // const [userdata, setUserdata] = useState();
    const [pos, setPos] = useState([]);
    const callapi = async () => {
        try {
            const res = await fetch('/getuserdata', {
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
            else if (res.status === 400) {
                alert("no Registration");
            }
            else {
                setPos(data);
                // console.log(data[0].title);
            }
        }
        catch (Err) {
            console.error(Err);
            navigate('/profile');
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
                            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>Profile</span></p>
                            <h1 className="mb-3 bread">Profile</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section style={{ backgroundColor: '#eee' }}>
                {pos.map((val, key) => {
                    return (
                        <><MDBContainer className="py-5">
                            <MDBRow>
                                <MDBCol lg="4">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody className="text-center">
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: '150px' }}
                                                fluid />
                                            <p className="text-muted mb-1">{val.field}</p>
                                            <p className="text-muted mb-4">{val.jobTitle}</p>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Full Name</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.firstName + " " + val.lastName}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Email</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.email}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Phone</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.phone}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Gender</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.gender}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Date of Birth</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.dob}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Work Experience</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.experience}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Address</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{val.city}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    <MDBCardText className="mb-4" style={{ fontSize: '1.3rem', color: 'blue', paddingLeft: '120px' }}> Education</MDBCardText>
                                                    <MDBCardText className="mb-1" style={{ fontSize: '1.0rem' }}>Field of Study: {val.degreetitle + " " + val.field}</MDBCardText>


                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.0rem' }}>Institute : {val.institute}</MDBCardText>


                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.0rem' }}>GPA: {val.gpa}</MDBCardText>





                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol md="6">
                                            <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    <MDBCardText className="mb-4" style={{ fontSize: '1.3rem', color: 'blue', paddingLeft: '80px' }}> Work Experience</MDBCardText>
                                                    <MDBCardText className="mb-1" style={{ fontSize: '1.0rem' }}>Company: {val.Company}</MDBCardText>


                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.0rem' }}>Job Title : {val.jobTitle}</MDBCardText>


                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.0rem' }}>Completion: {val.startDate + ' - ' + val.EndDate}</MDBCardText>

                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer></>
                    );
                })}

            </section>
        </>

    );
}