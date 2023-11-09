import React, { useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {

    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        mobile: '',
        userEmail: '',
        password: '',
        gender: '',
        age: '',
        address: '',
        role:'ROLE_USER'
    });

    const [formErrors, setFormErrors] = useState({
        userName: '',
        mobile: '',
        userEmail: '',
        password: '',
        gender: '',
        age: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // You can add validation here and update formErrors.
        validateField(id, value);
    };

    const validateField = (field, value) => {
        let errorMessage = '';

        if (field === 'userEmail') {
            if (!value.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
                errorMessage = 'Invalid email address';
            }
        } else if (field === 'password') {
            if (value.length < 6) {
                errorMessage = 'Password must be at least 6 characters long';
            }
        } else if (field === 'mobile') {
            if (value.length < 10 || value.length>10) {
                errorMessage = 'Mobile must be at least 10 digits long';
            }
        }else if (field === 'userName') {
            if (value.length < 5) {
                errorMessage = 'Name must be at least 5 character long';
            }
        }else if (field === 'gender') {
            if (value.length < 4) {
                errorMessage = 'Should be male/female/others';
            }
        }
        // Add validation logic for other fields here.

        setFormErrors({ ...formErrors, [field]: errorMessage });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if there are any validation errors
        for (const field in formErrors) {
            if (formErrors[field]) {
                alert('Please fix the form errors before submitting.');
                return;
            }
        }
        console.log(formData);
        var url = "http://localhost:9092/user/register"
      var result = axios.post(url, formData);
    //   console.log("ok")
      result.then((res) => {
        console.log(res.data);
        navigate('/')
        console.log("HI");
      }).catch((err) => {
        alert("Register Not Done " + err)
        // setShow(false);
      })

        // If there are no errors, you can proceed with form submission.
        // Perform your form submission logic here, e.g., sending data to the server.
    };

    return (
        <>
          

            <MDBContainer fluid className='p-10'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best way to <br />
                            <span className="text-primary">book a train ticket</span>
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                            Using this service you can easily book train tickets
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <form onSubmit={handleSubmit}>
                                <MDBCardBody className='p-4 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign up for User</h2>
                                    <center className="text-dark-50 mb-3">Please enter your details!</center>

                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput
                                                id="userName"
                                                type="text"
                                                label="Name"
                                                value={formData.userName}
                                                onChange={handleInputChange}
                                                placeholder="Name"
                                            />
                                            {formErrors.userName && <span className="text-danger">{formErrors.userName}</span>}
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput
                                                id="mobile"
                                                type="text"
                                                label="Mobile No"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                                placeholder="Mobile No"
                                            />
                                            {formErrors.mobile && <span className="text-danger">{formErrors.mobile}</span>}
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>

                                        <MDBCol col='6'>
                                            <MDBInput
                                                id="userEmail"
                                                type="email"
                                                label="Email"
                                                value={formData.userEmail}
                                                onChange={handleInputChange}
                                                placeholder="Email address"
                                            />
                                            {formErrors.userEmail && <span className="text-danger">{formErrors.userEmail}</span>}
                                            {/* {emailValid ? <div></div> : <div>  <span className="text-danger">Email id is not valid</span></div>} */}
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput
                                                id="password"
                                                label="Password"
                                                type="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                placeholder="Password"
                                            />
                                            {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                                            {/* {passwordValid ? <div></div> : <div>  <span className="text-danger">Password is not valid</span></div>}  */}
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-2' label='Gender' value={formData.gender}
                                                onChange={handleInputChange} id='gender' type='text' />
                                            {/* {genderValid ? <div></div> : <div>  <span className="text-danger">Please Provide Male/Female/Others</span></div>} */}
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-2' label='Age' value={formData.age}
                                                onChange={handleInputChange} id='age' type='text' />
                                            {/* {ageValid ? <div></div> : <div>  <span className="text-danger">Please enter valid age</span></div>} */}
                                        </MDBCol>
                                    </MDBRow>


                                    <MDBInput wrapperClass='mb-2 w-100' label='Address' value={formData.address}
                                                onChange={handleInputChange} id='address' type='text' size="lg" />


                                </MDBCardBody>
                                <div className="text-center">
                                <button className='btn btn-primary' type='submit'  style={{ width: "10rem" }}>
                                    Sign up
                                </button>
                            </div>
                            </form>
                            

                            <center style={{ padding: 5 }}>Already have an account?<Link to="/">Login Here</Link></center>

                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </>

    );
}

export default SignupForm;
