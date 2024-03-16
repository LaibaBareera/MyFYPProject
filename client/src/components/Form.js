import React, { useState } from 'react'
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
// import Avail from "./Avail";

import { Button } from 'react-bootstrap';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import back from '../images/bg_1.jpg';

export default function Form() {

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    experience: '',
    careerlevel: '',
    salary: '',
    city: '',
    phone: '',
    degreetitle: '',
    field: '',
    institute: '',
    instituteCity: '',
    completionYear: '',
    gpa: '',
    jobTitle: '',
    Company: '',
    industry: '',
    manage: '',
    jobcity: '',
    Expsalary: '',
    startDate: '',
    EndDate: ''

  });


  const FormTitles = ["About", "Education", "Work Experience"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
    // else if (page === 3) {
    //   return <Avail formData={formData} setFormData={setFormData} />;
    // }

  };
  const handle = async () => {
    const {
      firstName,
      lastName,
      dob,
      gender,
      experience,
      careerlevel,
      salary,
      city,
      phone,
      degreetitle,
      field,
      institute,
      instituteCity,
      completionYear,
      gpa,
      jobTitle,
      Company,
      industry,
      manage,
      jobcity,
      Expsalary,
      startDate,
      EndDate
    } = formData;
    const ras = await fetch("/userdatail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        dob,
        gender,
        experience,
        careerlevel,
        salary,
        city,
        phone,
        degreetitle,
        field,
        institute,
        instituteCity,
        completionYear,
        gpa,
        jobTitle,
        Company,
        industry,
        manage,
        jobcity,
        Expsalary,
        startDate,
        EndDate
      }),
    });
    const res = await ras.json();
    // if (ras.status === 422 || !res) {
    //   setError_message("Already have a account ");
    // }
    // else if (ras.status === 420 || !res) {
    //   setError_message("Already have a account as a Tutor");
    // }
    if (ras.status === 424 || ras.status === 422 || !res) {
      // setError_message("You have an errror");
      alert("You have an error")
    }
    else if (ras.status === 423 || !res) {
      alert('You are not able to submit this form');
    }
    else {
      alert("Form is successfully submitted")
      navigate("/profile");
    }
  };


  return (<>
    <div class="hero-wraps hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="containers">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12  text-center mb-5">
            <h1 class="mb-3 bread">Registration</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='formsubmit'>

      <MDBContainer>
        <MDBCard className="shadow-5"
          style={{ borderRadius: "25px", width: "60%", height: "230vh", transform: "none" }}>
          <MDBCardBody>

            <div className='progressbar'>
              <div
                style={{
                  width: page === 0 ? "33%" : page === 1 ? "66%" : "100%"
                }}
              ></div>
            </div>

            <div className='form-container'>
              <div className='header'>
                <h1>{FormTitles[page]}</h1>
              </div>
              <div className='body'>{PageDisplay()}</div>
              <div className='footer'>
                <Button style={{ width: "8vw", marginLeft: "17vw", marginTop: "3vh", backgroundColor: "blue" }} disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}>Back</Button>
                <Button style={{ width: "8vw", marginLeft: "3vw", marginTop: "3vh", backgroundColor: "blue" }} onClick={() => {
                  if (page === FormTitles.length - 1) {
                    // alert("FORM SUBMITTED");
                    handle();
                    console.log(formData);

                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}>{page === FormTitles.length - 1 ? "Submit" : "Next"}</Button>
              </div>



            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

    </div>
  </>

  )
}
