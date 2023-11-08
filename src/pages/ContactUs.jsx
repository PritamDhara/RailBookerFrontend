import React from 'react'
import Footer from './Footer'
import Navber from './Navber'
function ContactUs() {
    return (
        <>
            <Navber />
            <div className="container" style={{marginTop:"7rem"}}>
            <center><h1 className='mt-2'>Get In Touch</h1></center>
            <div className='container mt-3' style={{ width: '60%' }}>
                <form>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example1">Name</label>
                        <input type="text" id="form4Example1" class="form-control" />
                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="email">Email address</label>
                        <input type="email" id="email" class="form-control" />
                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example3">Message</label>
                        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                </form>
            </div>
            </div>
            <Footer />

        </>
    )
}

export default ContactUs