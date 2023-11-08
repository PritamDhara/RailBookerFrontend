import React, { useEffect, useState } from 'react'
import AdminSideBar from './AdminSideBar'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ViewAllTrain() {

    const navigate = useNavigate();

    const [trains, setTrains] = useState([]);
    const [trainByNo, setTrainByNo] = useState(
        {
            "trainId": '',
            "trainNo": '',
            "sourceStation": '',
            "destinationStation": '',
            "classWisePrice": {
                "ThAC": '',
                "TwAC": '',
                "FC": '',
                "SL": ''
            },
            "classWiseSeat": {
                "ThAC": '',
                "TwAC": '',
                "FC": '',
                "SL": ''
            },
            "trainName": '',
            "weeklyDays": [
                "Mon",
                "Wed",
                "Fri"
            ],
            "time": ''
        }

    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("http://localhost:9093/ticket/viewTicketsByMail/pritam012@Gmail.com");
                fetch('http://localhost:9092/train/viewAllTrains')
                    .then((response) => response.json())
                    .then((data) => setTrains(data));
                console.log(trains);
                // setTickets(response.data);
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [])


    const removeTrainHandler = async (trainno) => {
        try {
            await axios.delete("http://localhost:9092/train/removeTrain/" + trainno)

            setTrains((prevTrains) => {
                return prevTrains.filter((train) => train.trainNo !== trainno);
            });
        } catch (error) {
            alert(error);
        }
    }

    const viewTrainHandler = async (trainno) => {
        try {
            const response = await axios.get("http://localhost:9092/train/searchTrainByTrainNo/" + trainno)
            console.log(response.data)
            setTrainByNo(response.data)
            // useEffect();
        } catch (error) {
            alert(error);
            // setIsEmpty(false)
        }

    }

    const updateTrainHandler = async () => {

        var payload = {
            "trainId": Number(document.getElementById('trainid').value),
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

        try {
            const response = await axios.put("http://localhost:9092/train/updateTrain",payload);
            console.log(response.data);
            alert("Train Updated Successfully")
            // setTrains((prevTrains) => {
            //     return prevTrains.filter((train) => train.trainNo !== 0);
            // });
            navigate("/adminhome");
            
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
                                <th> Train Name</th>
                                <th> Source & Destination </th>
                                <th> Time </th>
                                <th> Update Train Details </th>
                                <th> Remove Train</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trains.map(train =>
                                    <tr key={train.trainId}>
                                        <td>{train.trainNo}</td>
                                        <td>{train.trainName}</td>
                                        <td>{train.sourceStation} To {train.destinationStation}</td>
                                        <td>{train.time}</td>
                                        <td><button type="button" onClick={() => { viewTrainHandler(train.trainNo) }} class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-lg">Update</button></td>
                                        <td><button type="button" onClick={() => { removeTrainHandler(train.trainNo) }} class="btn btn-danger">Remove</button></td>
                                        {/* onClick={()=>{removeCenterHandler(centers.centerId)}} */}
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>


            </div>


            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Train Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Train Id</label>
                                            <input type="text" class="form-control" id="trainid" value={trainByNo.trainId} readOnly placeholder="Train Name" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Train No</label>
                                            <input type="text" class="form-control" id="trainno" value={trainByNo.trainNo} readOnly placeholder="Train No" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Train Name</label>
                                            <input type="text" class="form-control" id="trainname" value={trainByNo.trainName} readOnly placeholder="Train Name" required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Source Station</label>
                                            <input type="text" class="form-control" id="source" value={trainByNo.sourceStation} readOnly placeholder="Source Station" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Destination Station</label>
                                            <input type="text" class="form-control" id="destination" value={trainByNo.destinationStation} readOnly placeholder="Destination Station" required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Price for FC</label>
                                            <input type="number" class="form-control" id="price1ac" defaultValue={trainByNo.classWisePrice.FC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Price for 2AC</label>
                                            <input type="number" class="form-control" id="price2ac" defaultValue={trainByNo.classWisePrice.TwAC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Price for 3AC</label>
                                            <input type="number" class="form-control" id="price3ac" defaultValue={trainByNo.classWisePrice.ThAC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Price for Sleeper</label>
                                            <input type="number" class="form-control" id="pricesleeper" defaultValue={trainByNo.classWisePrice.SL} required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Seats for FC</label>
                                            <input type="number" class="form-control" id="seat1ac" defaultValue={trainByNo.classWiseSeat.FC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Seats for 2AC</label>
                                            <input type="number" class="form-control" id="seat2ac" defaultValue={trainByNo.classWiseSeat.TwAC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Seats for 3AC</label>
                                            <input type="number" class="form-control" id="seat3ac" defaultValue={trainByNo.classWiseSeat.ThAC} required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Seats for Sleeper</label>
                                            <input type="number" class="form-control" id="seatsleeper" defaultValue={trainByNo.classWiseSeat.SL} required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Train Time</label>
                                            <input type="time" class="form-control" id="traintime" defaultValue={trainByNo.time} placeholder="Train Time" required />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={updateTrainHandler}>Save Changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Make Appointment</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAllTrain