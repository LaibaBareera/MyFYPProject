import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { MDBInput, MDBCheckbox } from "mdb-react-ui-kit";


export default function SignUpInfo({ formData, setFormData }, props) {



  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-container">
      <Form className="input-form" onSubmit={handleSubmit}>
        <div className="my-3 col-md-12">
          <Form.Label>First Name</Form.Label>
          <MDBInput
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />

          <div className="my-3">
            <Form.Label>Last Name</Form.Label>
            <MDBInput
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </div>
          <div className="my-3">
            <Form.Label>Date of birth</Form.Label>
            <MDBInput
              type="text"
              placeholder="eg 18 july 2023"
              value={formData.dob}
              onChange={(event) =>
                setFormData({ ...formData, dob: event.target.value })
              }
            />
          </div>
          <Form.Group controlId="Subjects">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={(event) =>
                setFormData({ ...formData, gender: event.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">other</option>
            </Form.Control>
          </Form.Group>
          <div className="my-3">
            <Form.Label>Work Experience</Form.Label>
            <MDBInput
              type="text"
              name="experience"
              placeholder="eq less than 1 year"
              value={formData.experience}
              onChange={(event) =>
                setFormData({ ...formData, experience: event.target.value })
              }
            >
            </MDBInput>
          </div>

          <Form.Group controlId="careerlevel">
            <Form.Label>Career Level</Form.Label>
            <Form.Control
              as="select"
              name="careerlevel"
              value={formData.careerlevel}
              onChange={(event) =>
                setFormData({ ...formData, careerlevel: event.target.value })
              }
            >

              <option value="Intern">Intern</option>
              <option value="Student">Student</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Professional Experience">Professional Experience</option>
              <option value="Department Head">Department Head</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>

          <div className="my-3">
            <Form.Group controlId="Experinece">
              <Form.Label>Desired Salary</Form.Label>
              <Form.Control
                as="select"
                name="salary"
                value={formData.salary}
                onChange={(event) =>
                  setFormData({ ...formData, salary: event.target.value })
                }
              >
                <option value="0 - 10,000">0 - 10,000</option>
                <option value="10,000 - 20,000">10,000 - 20,000</option>
                <option value="10,000 - 20,000">20,000 - 30,000</option>
                <option value="10,000 - 20,000">30,000 - 40,000</option>
                <option value="10,000 - 20,000">40,000 - 50,000</option>
                <option value="10,000 - 20,000">50,000 - 60,000</option>
                <option value="10,000 - 20,000">60,000 - 70,000</option>
                <option value="10,000 - 20,000">70,000 - 80,000</option>
                <option value="10,000 - 20,000">80,000 - 90,000</option>
                <option value="10,000 - 20,000">90,000 - 100,000</option>
                <option value="none">None of above</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="my-3">
            <Form.Label>City</Form.Label>
            <MDBInput
              type="text"
              placeholder="city"
              value={formData.city}
              onChange={(event) =>
                setFormData({ ...formData, city: event.target.value })
              }
            />
          </div>
          <div className="my-3">

            <Form.Label>Phone Number</Form.Label>
            <div class="input-group">
              <input type="text" class="form-control"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                } />
            </div>
          </div>

        </div>
      </Form>
    </div>
  );
}
