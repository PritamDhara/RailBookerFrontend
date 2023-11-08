import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "../assets/cardcss.css"
import Navber from './Navber';
import axios from 'axios';
import { useSelector } from 'react-redux';
function ViewYourTicket() {

    const { username } = useSelector((state) => state.auth.value);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(username);
                // const response = await axios.get("http://localhost:9093/ticket/viewTicketsByMail/pritam012@Gmail.com");
                fetch('http://localhost:9093/ticket/viewTicketsByMail/'+username)
                    .then((response) => response.json())
                    .then((data) => setTickets(data));
                console.log(tickets);
                // setTickets(response.data);
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [tickets])

    const deleteTicket = async (pnrno)=>{
        try {
        await axios.delete("http://localhost:9093/ticket/cancelTicket/"+pnrno)

        setTickets((prevTickets) => {
			return prevTickets.filter((ticket) => ticket.pnrNo !== pnrno);
		});

        // useEffect();
    } catch (error) {
        alert(error);
        // setIsEmpty(false)
    }

    }




    return (<>
        <Navber />

        <div className='container' style={{marginTop:"8rem"}}>

            {
                tickets?.map(ticket =>
                    <div class="card my-4">
                        <h2 class="card-header text-center">
                           Ticket Details
                        </h2>
                        <div class="card-body traincard float-container w-100">
                            <h2 class="card-title">{ticket.source} to {ticket.destination}</h2>
                                <h3>Details</h3>
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th> Train No </th>
                                            <th> PNR No </th>
                                            <th> Quota </th>
                                            <th> No Of Seats </th>
                                            <th> Total Fare</th>
                                            <th> Booking Date </th>
                                            <th> Time </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr key={ticket.ticketId}>
                                            <td>{ticket.trainNo}</td>
                                            <td>{ticket.pnrNo}</td>
                                            <td>{ticket.quota}</td>
                                            <td>{ticket.noOfSeats}</td>
                                            <td>{ticket.totalFare}</td>
                                            <td>{ticket.bookingDate}</td>
                                            <td>{ticket.time}</td>
                                        </tr>

                                    </tbody>

                                </table>

                                <h2>Passenger Details</h2>

                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th> Passenger Name </th>
                                            <th> Passenger Age </th>
                                            <th> Passenger Mobile No </th>
                                            <th> Passenger Aadhar No </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {ticket.passengers.map((value,index) => (
                                                    
                                            <tr>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            <td>{value.mobileNo}</td>
                                            <td>{value.aadhar}</td>
                                        
                                         </tr>
                                                   
                                        ))}

                                        

                                    </tbody>

                                </table>

                            

                            <Link to={"/viewTicket"} class="btn btn-danger" onClick={()=>{deleteTicket(ticket.pnrNo)}}>Cancel Ticket</Link>
                        </div>
                    </div>
                )
            }

        </div>
    </>

    )
}

export default ViewYourTicket