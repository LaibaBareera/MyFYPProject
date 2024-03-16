import React from 'react'
import { MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { Form, Button } from "react-bootstrap";
import Industory from './Industory';

export default function OtherInfo({ formData, setFormData }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="other-info-container">

      <Form className="input-form" onSubmit={handleSubmit}>
        <div className="my-3 col-md-12">
          <div className='my-3'>
            <Form.Label>Job Title</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g Manager"
              value={formData.jobTitle}
              onChange={(event) =>
                setFormData({ ...formData, jobTitle: event.target.value })
              }
            />
          </div>
          <div className='my-3'>
            <Form.Label>Company Name</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g Viteace Solution software house"
              value={formData.Company}
              onChange={(event) =>
                setFormData({ ...formData, Company: event.target.value })
              }
            />
          </div>
          <div className='my-3'>
            <Form.Group controlId="StartYear">
              <Form.Label>industry</Form.Label>
              <Form.Control
                as="select"
                name="Year"
                value={formData.industry}
                onChange={(event) => setFormData({ ...formData, industry: event.target.value })}
              >
                {Industory.length > 0 ? (
                  Industory.map(({ value }) => (
                    <option value={value}>{value}</option>
                  ))
                ) : (
                  <option value="none">Not Any Degree</option>
                )}
              </Form.Control>
            </Form.Group>
          </div>
          <Form.Group controlId="Subjects">
            <Form.Label>Did you directly manage the team?</Form.Label>
            <Form.Control
              as="select"
              name="manage"
              value={formData.manage}
              onChange={(event) =>
                setFormData({ ...formData, manage: event.target.value })
              }
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Control>
          </Form.Group>
          <div className='my-3'>
            <Form.Label>city</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g Karachi"
              value={formData.jobcity}
              onChange={(event) =>
                setFormData({ ...formData, jobcity: event.target.value })
              }
            />
          </div>
          <div className='my-3'>
            <Form.Label>Experience Salary</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g 50,000"
              value={formData.Expsalary}
              onChange={(event) =>
                setFormData({ ...formData, Expsalary: event.target.value })
              }
            />
          </div>

          <div className='my-3'>
            <Form.Label>Start Date</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g 25 july 2001"
              value={formData.startDate}
              onChange={(event) =>
                setFormData({ ...formData, startDate: event.target.value })
              }
            />
          </div>
          <div className='my-3'>
            <Form.Label>End Date</Form.Label>
            <MDBInput
              type="text"
              placeholder="E.g 25 july 2001"
              value={formData.EndDate}
              onChange={(event) =>
                setFormData({ ...formData, EndDate: event.target.value })
              }
            />
          </div>

        </div>
      </Form>

    </div>
  )
}
