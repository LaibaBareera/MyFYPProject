import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import back from '../images/bg_1.jpg';

export default function Company() {
  const navigate = useNavigate();
  // const [userdata, setUserdata] = useState();
  const [pos, setPos] = useState([]);
  const [post, setPost] = useState([]);
  const [apply, setApply] = useState([]);
  const callapi = async () => {
    try {
      const res = await fetch('/companydetail', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        const error = new Error(res.error);
        throw error;
      }
      else {
        setPos(data);
        console.log(data);
      }
    }
    catch (Err) {
      console.error(Err);
      navigate('/');
    }
  }
  const call = async () => {
    try {
      const res = await fetch('/post', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        const error = new Error(res.error);
        throw error;
      }
      else {
        setPost(data);
        console.log(data);
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
  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <div className="hero-wraps hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
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

      <section className="vh-100" style={{ backgroundColor: '#5f59f7' }}>
        <MDBContainer className="py-5 h-10">
          <MDBRow className="justify-content-center align-items-center h-100">
            {pos.map((val, key) => {
              return (<>
                <MDBCol sm="5">
                  <MDBCard className="mb-4" style={{ paddingLeft: '15px' }}>
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="6">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">{val.name}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="6">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">{val.email}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="6">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">{val.phone}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </>);
            })}


            <MDBCol xl='10'>
              <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                  <MDBTable align='middle'>
                    <MDBTableHead>
                      <tr>
                        <th scope='col'>Company Name</th>
                        <th scope='col'>Company Location</th>
                        <th scope='col'>Job Title</th>
                        <th scope='col'>Job Type</th>
                        <th scope='col'>Apply</th>
                        <th scope='col'>Employee Name</th>

                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {post.map((val, key) => {
                        return (<><tr>
                          <td>

                            <p className='fw-bold mb-1'>{val.CompanyName}</p>
                          </td>
                          <td>
                            <p className='fw-normal mb-1'>{val.Location}</p>
                          </td>
                          <td>
                            <p className='fw-normal mb-1'>{val.jobTitle}</p>

                          </td>
                          <td>
                            <p className='fw-normal mb-1'>{val.JobType}</p>
                          </td>
                          <td>
                            <button className="btn btn-primary py-2" onClick={async () => {
                              try {
                                const res = await fetch(`/${val.id}/applyforjob`, {
                                  method: 'GET',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  credentials: 'include'
                                });
                                const data = await res.json();
                                if (res.status === 422 || !data) {
                                  const error = new Error(res.error);
                                  throw error;
                                }
                                else {
                                  setApply(data);
                                  console.log(data);
                                }
                              }
                              catch (Err) {
                                console.error(Err);
                                navigate('/');
                              }
                            }}>Apply</button>
                          </td>
                          {apply.map((val, key) => {
                            return (<td>
                              <p className='fw-normal mb-1'>{val.name}</p>
                            </td>);
                          })}
                        </tr></>);
                      })}

                    </MDBTableBody>
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}