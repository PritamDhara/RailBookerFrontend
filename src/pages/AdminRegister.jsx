import React from 'react';
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css'
import "../assets/uselogincss.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function AdminRegister() {
  return (
    <div className='container'>
    <MDBContainer fluid className='p-10'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Welcome to<br />
            <span className="text-primary">Admin Register</span>
          </h1>

         

        </MDBCol>

        <MDBCol md='6'>

        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign up for Admin</h2>
              <center className="text-dark-50 mb-3">Please enter your details!</center>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Mobile No' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Gender' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Age' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>


              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='formControlLg' type='password' size="lg"/>
              

              <button className='btn btn-primary'>
                Sign up
              </button> 

              <center style={{padding:5}}>Already have an account?<Link to="/adminlogin">Login Here</Link></center>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default AdminRegister;