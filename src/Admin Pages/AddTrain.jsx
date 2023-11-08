import React from 'react'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom/dist';
import axios from 'axios';

function AddTrain() {

  const navigate = useNavigate();


  const addTrainHandler = async ()=>{

    const trainno = document.getElementById('trainno').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const price3ac = document.getElementById('price3ac').value;
    const price2ac = document.getElementById('price2ac').value;
    const price1ac = document.getElementById('price1ac').value;
    const pricesleeper = document.getElementById('pricesleeper').value;
    const seat3ac = document.getElementById('seat3ac').value;
    const seat2ac = document.getElementById('seat2ac').value;
    const seat1ac = document.getElementById('seat1ac').value;
    const seatsleeper = document.getElementById('seatsleeper').value;
    const tarinname = document.getElementById('trainname').value;
    const time = document.getElementById('traintime').value;

    if(
      trainno.trim() =='' || trainno== null || 
      source.trim() =='' || source== null ||
      destination.trim() =='' || destination== null ||
      price3ac.trim() =='' || price3ac== null ||
      price2ac.trim() =='' || price2ac== null ||
      price1ac.trim() =='' || price1ac== null ||
      pricesleeper.trim() =='' || pricesleeper== null ||
      seat3ac.trim() =='' || seat3ac== null ||
      seat2ac.trim() =='' || seat2ac== null ||
      seat1ac.trim()=='' || seat1ac== null ||
      seatsleeper.trim() =='' || seatsleeper== null ||
      tarinname.trim() =='' || tarinname== null ||
      time.trim() =='' || time== null 
    ){
      alert("Please Provide All Details Correctly")
    }
    else{
  var payload = {
    "trainNo": String(document.getElementById('trainno').value),
    "sourceStation": String(document.getElementById('source').value),
    "destinationStation": String(document.getElementById('destination').value),
    "classWisePrice": {
      "ThAC": Number(document.getElementById('price3ac').value),
      "TwAC": Number(document.getElementById('price2ac').value),
      "FC": Number(document.getElementById('price1ac').value),
      "SL": Number(document.getElementById('pricesleeper').value)
    },
    "classWiseSeat": {
      "ThAC": Number(document.getElementById('seat3ac').value),
      "TwAC": Number(document.getElementById('seat2ac').value),
      "FC": Number(document.getElementById('seat1ac').value),
      "SL": Number(document.getElementById('seatsleeper').value)
    },
    "trainName": String(document.getElementById('trainname').value),
    "weeklyDays": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "time": String(document.getElementById('traintime').value)
  }
    var url = "http://localhost:9092/train/addTrain"
    try {
      const response = await axios.post(url,payload);
      console.log(response.data);
      alert("Train Added Successfully")
      navigate('/adminhome')

  } catch (error) {
      alert(error);
  }
}
}
 
  return (
   <>
    <h2 className='text-center text-dark my-5'>Add a New Train</h2>
   <div className="container my-5">
   <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Train No</label>
      <input type="text" class="form-control" id="trainno" placeholder="Train No" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Train Name</label>
      <input type="text" class="form-control" id="trainname" placeholder="Train Name" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Source Station</label>
      <input type="text" class="form-control" id="source" placeholder="Source Station" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Destination Station</label>
      <input type="text" class="form-control" id="destination" placeholder="Destination Station" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Price for FC</label>
      <input type="number" class="form-control" id="price1ac" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Price for 2AC</label>
      <input type="number" class="form-control" id="price2ac" required />
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Price for 3AC</label>
      <input type="number" class="form-control" id="price3ac" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Price for Sleeper</label>
      <input type="number" class="form-control" id="pricesleeper" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Seats for FC</label>
      <input type="number" class="form-control" id="seat1ac" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Seats for 2AC</label>
      <input type="number" class="form-control" id="seat2ac" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Seats for 3AC</label>
      <input type="number" class="form-control" id="seat3ac" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Seats for Sleeper</label>
      <input type="number" class="form-control" id="seatsleeper" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Train Time</label>
      <input type="time" class="form-control" id="traintime" placeholder="Train Time" required/>
    </div>
  </div>
  <div className="text-center">
    <Link to={'/adminhome'}>
    <button type="submit" class="btn btn-primary mx-5">Back To Home</button>
    </Link>
     <button type="submit" class="btn btn-success mx-5" onClick={addTrainHandler}>Add Train</button>
   
  </div>
  
</form>
</div> 
   </>
  )
}

export default AddTrain