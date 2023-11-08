import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/cardcss.css';

function Navber() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-info p-3" style={{ maxWidth: "100vw" , backgroundColor:"#132043" }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Rail Booker</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                            <Link to={'/userhome'} >
                                <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/about'}>
                                <a class="nav-link mx-2" href="#">About Us</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/alltrains'}>
                                <a class="nav-link mx-2" href="#">Search Train</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/viewticket'}>
                                <a class="nav-link mx-2" href="#">My Tickets</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'}>
                                <a class="nav-link mx-2" href="#">Contact us</a>
                            </Link>
                        </li>
                    </ul>
                    


                    <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                        <Link to={'/profile'}>
                            <a className="nav-link mx-2 text-dark" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navber