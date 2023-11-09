import React, { useState } from 'react'
import Navber from './Navber'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

function BookTicket() {


    const location = useLocation();
    console.log(location.state.traind)
    let train = location.state.traind;
    // console.log(trainNo);
    const navigate = useNavigate();
    const[totalPrice,setTotalPrice ]= useState(0);
    const { username } = useSelector((state) => state.auth.value);
    const [show, setShow] = useState(false);

    // var price = 0;



    const paymentStart = async () => {

        let amount = document.getElementById("paymentValue").value;

        if (amount == '' || amount == null) {
            alert("amount is required");
            return;
        }
        try {
            const response = await axios.get("http://localhost:9980/payment/create_order/" + amount);
            console.log(response.data);
            openTransactionModal(response.data)
        } catch (error) {
            alert(error);
        }


    }

    function openTransactionModal(response) {
        var options = {
            order_id: response.orderId,
            key: response.key,
            amount: response.amount,
            currency: response.currency,
            name: 'Rail Booker',
            description: 'Payment for ticket Booking',
            image: 'https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_1280.jpg',
            handler: (res) => {
                processResponse(res);
            },
            prefill: {
                name: 'RBA',
                email: 'railbooker@gmail.com',
                contact: '9464782992'
            },
            notes: {
                address: 'Online Ticket Booking'
            },
            theme: {
                color: '#F37256'
            }
        };


        var razorpay = new window.Razorpay(options);
        razorpay.open();
        


    }

    function processResponse(resp) {
        console.log(resp);
        if(resp)
        {
            addTicketHandler();
        }else{
            console.log("Payment is not done ");
        }
    }




    const totalprice = async (noofseats, quota) => {
        

        console.log("inside this");
        console.log(train.classWisePrice[quota]);
        console.log(document.getElementById('quota').value);

       let price = await train.classWisePrice[quota] * Number(noofseats)
        console.log(train);
        setTotalPrice(price)

    }
const clicked = ()=>{
    totalprice(document.getElementById('noofseats').value, document.getElementById('quota').value)
}
    const addTicketHandler = async () => {
            console.log(document.getElementById('date').value);
        var payload = {
            "noOfSeats": Number(document.getElementById('noofseats').value),
            "passengers": [
                {
                    "name": "Passenger 1",
                    "mobileNo": "8907353829",
                    "age": 23,
                    "aadhar": "388801876478930"
                },
                {
                    "name": "Passenger 2",
                    "mobileNo": "8907353829",
                    "age": 23,
                    "aadhar": "388801876478930"
                }

            ],
            "bookingDate":document.getElementById('date').value,
            "quota": String(document.getElementById('quota').value),
            "trainNo": String(document.getElementById('trainno').value),
            "userEmail": username
        }


        try {

          const response =  await axios.post("http://localhost:9092/ticket/createTicket",payload)
          console.log(response.data)
        //   alert("Ticket Created")
            setShow(true);
            setTimeout(() => {
                setShow(false);
                navigate('/viewTicket') // Redirect to viewticket
              }, 1000);
         
           
        } catch (error) {
            alert(error);
        }



    }

    return (
        <>
            <Navber />

            <div className='container' style={{ width: "60%", marginTop: "6rem" }}>

            <Alert variant="success" show={show} className='mt-2' onClose={() => setShow(false)} dismissible>
                 <Alert.Heading>Ticket Booked Successfully</Alert.Heading>
            </Alert>

                <h2 className='my-4'>Booking Details</h2>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputEmail4">Train No</label>
                            <input type="text" class="form-control" id="trainno" value={train.trainNo} readOnly placeholder="Train No" required />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">User Email</label>
                            <input type="text" class="form-control" id="useremail" value={username} readOnly required />
                        </div>
                        <div class="form-group col-md-4">
                            {/* <label for="inputPassword4">No Of Seats</label>
                            <input type="text" class="form-control" id="noofseats" placeholder="Choose No of Seat" required /> */}
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                    <label class="mr-sm-2" for="inlineFormCustomSelect">No Of Seats</label>
                                    <select class="custom-select mr-sm-2" id="noofseats">
                                        <option selected>Choose Seats</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        {/* <option value="SL">Sleeper Class</option> */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                    <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                                    <select class="custom-select mr-sm-2" id="quota">
                                        <option selected>Choose Class</option>
                                        <option value="FC">First AC</option>
                                        <option value="TwAC">Second AC</option>
                                        <option value="ThAC">Third AC</option>
                                        <option value="SL">Sleeper Class</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label className="form-label" htmlFor="form6Example4">Date</label>
                            <input type="date" id="date" min='2023-10-26' className="form-control" />
                        </div>
                    </div>
                </form>
                <div className="text-center">
                        <button className='btn btn-success' onClick={clicked} data-toggle="modal" data-target=".bd-example-modal-lg">Book Ticket</button>
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
                                    <input type="text" class="form-control" id="paymentValue" value={totalPrice} readOnly placeholder="" required />
                                </form>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" onClick={paymentStart} data-dismiss="modal" > Pay Now </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            {/* <button type="button" class="btn btn-primary">Make Appointment</button> */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default BookTicket