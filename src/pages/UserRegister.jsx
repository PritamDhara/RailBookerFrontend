import React, { useState } from "react";
// import sendDetailsToServer from "../component/senddetailstoserver";
import { BrowserRouter, Route, Link, useNavigate, Navigate } from 'react-router-dom/dist';
import axios from "axios";

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

function UserRegister() {

  const navigate = useNavigate();

  const [emailValid, setEmailValid] =  useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [formValues, setFormValues] = useState({
    userName:"",
    userEmail:"",
    mobile:"",
    password:"",
    gender:"",
    age:0,
    address:"",
    role:""
});        
//Destructuring
let {userName,userEmail,mobile,password,gender,age,address,role}=formValues;
const changeHandler = e =>{
    const name = e.target.name;
    const value = e.target.value;
    setFormValues(
        {
            ...formValues,[e.target.name]:[e.target.value]
        }
    );
}
//,() => { validateField(name, value) }
const submitHandler =e=>{
  e.preventDefault()
    var mail = document.getElementById('useremail').value;
    // console.log(mail);
    var password = document.getElementById('password').value;
    // console.log(password);
    var username = document.getElementById('username').value;
    // console.log(username);
    var mobile = document.getElementById('mobile').value
    // console.log(mobile);
    var gender = document.getElementById('gender').value
    // console.log(gender);
    var age = document.getElementById('age').value
    // console.log(age);
    var address = document.getElementById('address').value
    // console.log(address);
 
  if(
    mail.trim()=='' || mail==null ||
    password.trim()=='' || password==null ||
    username.trim()=='' || username==null ||
    mobile.trim()=='' || mobile==null ||
    gender.trim()=='' || gender==null ||
    age.trim()=='' || age==null ||
    address.trim()=='' || address==null 
    )
    {
      alert("Please Provide all details")
      return;
    }else{

    //Call api
var payload = {
    "userName": String(document.getElementById('username').value),
    "userEmail": String(document.getElementById('useremail').value),
    "mobile" : String(document.getElementById('mobile').value),
    "password" : String(document.getElementById('password').value),
    "gender" : String(document.getElementById('gender').value),
    "age" : Number(document.getElementById('age').value),
    "address" : String(document.getElementById('address').value),
    "role":"ROLE_USER"
}


    var url = "http://localhost:9092/user/register"
    var result= axios.post(url,payload);
    console.log("ok")
        result.then((res) => {
            console.log(res.data);
            navigate('/')
            console.log("HI");
        }).catch((err)=>{
            alert("Register Not Done "+ err.data)
        })
  // }else{
  //   console.log("inside else");
  // }
}
}
// const [contactNoValid, setContactNoValid] = useState(true);
// const [ageValid, setAgeValid] = useState(true);
// const [genderValid, setGenderValid] = useState(true);
// const [isValid, setIsValid] = useState(false);

// function validateField(formValues) {
//     let count =0;
//     //Email Validation
//     let validateEmail = formValues.userEmail.toString()
//     // || (!validateEmail.includes("@")) || (!validateEmail.includes(".com" || ".in" || ".ac")
//     if(validateEmail.length <=5){
//       console.log(validateEmail);
//       console.log("count true 1");  
//       setEmailValid(false);
//     }else{
//         setEmailValid(true);
//         count++;
//     }
//     //Password Validation
//     let validatePassword = formValues.password.toString()
   
//     if(validatePassword.length <8){
//         setPasswordValid(false);
        
//     }
//     else{
//       console.log("password true");
//         setPasswordValid(true);
//         count++;
//         console.log("count 2" + count);
//     }

//     if(count===2)
//     {
//       return true;
//     }else {
//       console.log("return false");
//       return false;
//     }

// }




  return (
    <div className='container'>
    <MDBContainer fluid className='p-10'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best way to <br />
            <span className="text-primary">book a train ticket</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Using this service you can easily book train tickets
          </p>

        </MDBCol>

        <MDBCol md='6'>

        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <form onSubmit={submitHandler}>
            <MDBCardBody className='p-4 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign up for User</h2>
              <center className="text-dark-50 mb-3">Please enter your details!</center>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='Name' id='username' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='Mobile No' id='mobile' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
               
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2 w-100' label='Email address' id='useremail' type='email' size="lg"/>
                  {/* {emailValid ? <div></div> : <div>  <span className="text-danger">Email id is not valid</span></div>} */}
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2 w-100' label='Password' id='password' type='password' size="lg" />
                  {/* {passwordValid ? <div></div> : <div>  <span className="text-danger">Password is not valid</span></div>}  */}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='Gender' id='gender' type='text' />
                  {/* {genderValid ? <div></div> : <div>  <span className="text-danger">Please Provide Male/Female/Others</span></div>} */}
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='Age' id='age' type='text'/>
                  {/* {ageValid ? <div></div> : <div>  <span className="text-danger">Please enter valid age</span></div>} */}
                </MDBCol>
              </MDBRow>


              <MDBInput wrapperClass='mb-2 w-100' label='Address' id='address' type='text' size="lg"/>
              

               </MDBCardBody>
            </form>
            <div className="text-center">
            <button className='btn btn-primary' onClick={submitHandler} style={{width:"10rem"}}>
                Sign up
              </button> 
              </div>

              <center style={{padding:5}}>Already have an account?<Link to="/">Login Here</Link></center>
           
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default UserRegister;