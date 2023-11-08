import axios from 'axios';
// import Razorpay from 'razorpay';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Payment() {

    //first request to server create an order
    const navigate = useNavigate();

    const paymentStart = async ()=>{
        
        let amount = document.getElementById("paymentValue").value;

        if(amount==''||amount==null)
        {
            alert("amount is required");
            return;
        }
            try {
                const response = await axios.get("http://localhost:9980/payment/create_order/"+amount);
                console.log(response.data);
                openTransactionModal(response.data)
            } catch (error) {
                alert(error);
            }

 
    }

function openTransactionModal(response)
{
    var options={
        order_id:response.orderId,
        key:response.key,
        amount:response.amount,
        currency:response.currency,
        name:'Rail Booker',
        description:'Payment for ticket Booking',
        image:'https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_1280.jpg',
        handler:(res)=>{
            processResponse(res);
        },
        prefill:{
            name:'RBA',
            email:'railbooker@gmail.com',
            contact:'9464782992'
        },
        notes:{
            address:'Online Ticket Booking'
        },
        theme:{
            color:'#F37256'
        }
    };


   var razorpay = new window.Razorpay(options);
    razorpay.open();


}

function processResponse(resp)
{
    if(resp)
    {
        navigate('/about')
    }
    console.log(resp);
}

  return (
    <>   
    
        <h1 className='text-center my-4 text-dark'>Pay Here</h1>
        <div className="container">
            <input type="text" id='paymentValue' className="form-control my-2" placeholder='Enter the amount Here' />
            <div className="text-center">
            <button type="text" onClick={paymentStart} className="btn btn-success my-2 btn-lg w-50">PAY</button>
            </div>
            

        </div>
    
    </>

  )
}

export default Payment