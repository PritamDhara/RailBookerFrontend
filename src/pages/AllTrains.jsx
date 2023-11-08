import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "../assets/cardcss.css"
import Navber from './Navber';
import axios from 'axios';
import Footer from './Footer';


function AllTrain() {

    const navigate = useNavigate();

    const [trains, setTrains] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const viewAllTrains = async (event) => {
        event.preventDefault();
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        if(source==""||source==null)
        {
            alert("Please provide Source Station")
        }

        if(destination==""||destination==null)
        {
            alert("Please provide Destination Station")
        }

        try {
            const response = await axios.get("http://localhost:9092/train/viewTrainBySourceAndDestination/"+source+"/"+destination);
            console.log(response.data);
                setIsEmpty(true);
            setTrains(response.data);
        } catch (error) {
            // alert(error);
            setIsEmpty(false)
        }

    }

    function bookTickethandler(train)
    {
        console.log(train)
        console.log("inside bookTicketHandler");
        navigate('/bookticket',{state:{traind:train}})
    }

    return (
    <>
        <div>
            <Navber />
            <div className='container ' style={{marginTop:"8rem"}}>

                <form className='my-5'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Select Source Station</label>
                            <input type="text" class="form-control" id="source" placeholder="Source Station" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Select Destination Station</label>
                            <input type="text" class="form-control" id="destination" placeholder="Destination Station" />
                        </div>
                    </div>
                    <button type="submit" onClick={viewAllTrains} class="btn btn-primary">Check Available Trains</button>
                </form>
                
                {
                    isEmpty?<div>{

                        trains?.map(train =>
                            <div class="card my-2">
                                <h1 class="card-header">
                                    {train.trainName}/{train.trainNo}
                                </h1>
                                <div class="card-body traincard float-container">
                                    <h2 class="card-title">{train.sourceStation} to {train.destinationStation}</h2>
                                    <h3>Time : {train.time}</h3>
                                    <p class="card-text">
                                        <div className='float-child'>
                                            <h3>Price</h3>
                                            <ul>
                                                {Object.entries(train.classWisePrice).map(([key, value]) => (
                                                    <li key={key} style={{listStyleType:"none"}}>
                                                        <strong>{key} : </strong> ₹{value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='float-child'> 
                                            <h3>Available Seats</h3>
                                            <ul>
                                                {Object.entries(train.classWiseSeat).map(([key, value]) => (
                                                    <li key={key} style={{listStyleType:"none"}}>
                                                        <strong>{key} : </strong>{value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </p>
                                    <button class="btn btn-primary" onClick={()=>bookTickethandler(train)}>Book Ticket</button>
                                </div>
                            </div>
    
                        )
                    }
                    </div> :<h1 className='text-center text-danger'>Train is not available</h1>


                }

                

            </div>


        </div>

        

    </>);
}

export default AllTrain;