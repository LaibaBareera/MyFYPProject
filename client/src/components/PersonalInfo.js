import React from 'react'
import { MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { Form, Button } from "react-bootstrap";
import DegreeTitle from './DegreeTitle';
import Years from "./Years";
import GPA from './GPA';

export default function PersonalInfo({ formData, setFormData }) {


  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="personal-info-container">
      <Form className="input-form" onSubmit={handleSubmit}>
        <div className="my-3 col-md-12">
          <div className='my-3'>
            <Form.Group controlId="StartYear">
              <Form.Label>Degree Title</Form.Label>
              <Form.Control
                as="select"
                name="Year"
                value={formData.degreetitle}
                onChange={(event) => setFormData({ ...formData, degreetitle: event.target.value })}
              >
                {DegreeTitle.length > 0 ? (
                  DegreeTitle.map(({ value }) => (
                    <option value={value}>{value}</option>
                  ))
                ) : (
                  <option value="none">Not Any Degree</option>
                )}
              </Form.Control>
            </Form.Group>
          </div>


          <div className="my-3">
            <Form.Label>Field of study</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g Software Engineering"
              value={formData.field}
              onChange={(event) =>
                setFormData({ ...formData, field: event.target.value })
              }
            />
          </div>


          <Form.Label>Institute</Form.Label>
          <MDBInput
            type="text"
            placeholder="E.g UET Taxila"
            value={formData.institute}
            onChange={(event) =>
              setFormData({ ...formData, institute: event.target.value })
            }
          />
          <Form.Label>City of Institute</Form.Label>
          <MDBInput
            type="text"
            placeholder="Lahore"
            value={formData.instituteCity}
            onChange={(event) =>
              setFormData({ ...formData, instituteCity: event.target.value })
            }
          />
          <div className='my-3'>
            <Form.Group controlId="StartYear">
              <Form.Label>Completion Year</Form.Label>
              <Form.Control
                as="select"
                name="Year"
                value={formData.completionYear}
                onChange={(event) => setFormData({ ...formData, completionYear: event.target.value })}
              >
                {Years.length > 0 ? (
                  Years.map(({ value }) => (
                    <option value={value}>{value}</option>
                  ))
                ) : (
                  <option value="">Not Any Year</option>
                )}
              </Form.Control>
            </Form.Group>

          </div>

          <div className="my-3">
            <Form.Group controlId="GPA">
              <Form.Label>GPA</Form.Label>
              <Form.Control
                as="select"
                name="gpa"
                value={formData.gpa}
                onChange={(event) =>
                  setFormData({ ...formData, gpa: event.target.value })
                }
              >
                {GPA.length > 0 ? (
                  GPA.map(({ value }) => (
                    <option value={value}>{value}</option>
                  ))
                ) : (
                  <option value="none">Not Any gpa</option>
                )}


              </Form.Control>
            </Form.Group>
          </div>





        </div>




      </Form>
    </div>
  )
}
