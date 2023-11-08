import React, { useEffect, useState } from 'react'
import AdminSideBar from './AdminSideBar'
import axios from 'axios'

function ViewAllTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("http://localhost:9093/ticket/viewTicketsByMail/pritam012@Gmail.com");
                fetch('http://localhost:9092/ticket/viewAllTicket')
                    .then((response) => response.json())
                    .then((data) => setTickets(data));
                console.log(tickets);
                
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [])

    const removeTicketHandler = async (pnrno) => {
        try {
            await axios.delete("http://localhost:9092/ticket/cancelTicket/" + pnrno)

            setTickets((prevTickets) => {
                return prevTickets.filter((ticket) => ticket.pnrNo !== pnrno);
            });
        } catch (error) {
            alert(error);
        }
    }


  return (
    <>
      <AdminSideBar />
            <div id='content conatiner' style={{ marginLeft: '25%', marginRight: '3%', marginBottom: "5%" }}>
                <span>
                    <h2 className="text-center my-4">Train List</h2>
                </span>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Train No </th>
                                <th> PNR No</th>
                                <th> No of Passeneger </th>
                                <th> Total Fare </th>
                                <th> Booking Date </th>
                                <th> User Email Id </th>
                                <th> Delete Ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets.map(ticket =>
                                    <tr key={ticket.ticketId}>
                                        <td>{ticket.trainNo}</td>
                                        <td>{ticket.pnrNo}</td>
                                        <td>{ticket.noOfSeats}</td>
                                        <td>{ticket.totalFare}</td>
                                        <td>{ticket.bookingDate}</td>
                                        <td>{ticket.userEmail}</td>
                                        <td><button type="button" onClick={() => { removeTicketHandler(ticket.pnrNo) }} class="btn btn-danger">Remove</button></td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>


            </div>
    
    </>
  )
}

export default ViewAllTickets