import React from 'react'
import Navber from './Navber';
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2'
import imgHome from '../assets/slider.png'
import '../assets/cardcss.css'
import axios from 'axios';
import Footer from './Footer';

function UserHome() {
  return (
    <>
    <Navber/>
    <div className="text-center" style={{marginTop:"3rem"}}>
        <div>
          <img
            src={imgHome}
            alt="Image Description"
            style={{ width: "100%", height: "auto" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              padding: "10px",
              opacity: 0,
              animation: "fadeIn 3s ease-in forwards",
            }}
          >
            <h1 style={{ fontSize: 80, color: "rgba(255, 255, 255, 0.73)" }}>
              Welcome to the Rail Booker
            </h1>
          </div>
        </div>
      </div>

      <div
        class="container cards"
        style={{ paddingBottom: "5rem", paddingTop: "2rem" }}
      >
        <div class="row text-center" style={{ paddingLeft: "1rem" }}>
          <h1>OUR SERVICES</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <Card1 />
          </div>
        </div>
      </div>

      <div
        class="container cards"
        style={{ paddingBottom: "5rem", paddingTop: "1rem" }}
      >
        <div class="row text-center" style={{ paddingLeft: "1rem" }}>
          <h1>FEEDBACKS</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <Card2 />
          </div>
        </div>
      </div>

      <section
        id="testimonials"
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingBottom: "5rem",
        }}
      >
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 testimonial-image"
                style={{ height: "25rem" }}
                src="https://images.wallpaperscraft.com/image/single/train_railway_platform_124422_1280x720.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 testimonial-image"
                style={{ height: "25rem" }}
                src="https://images.wallpaperscraft.com/image/single/railway_train_rails_151651_1280x720.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 testimonial-image"
                style={{ height: "25rem" }}
                src="https://i.pinimg.com/564x/db/ee/95/dbee95242ceb264390650e46c6aabe08.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <Footer/>

      {/* <Footer /> */}
    
    </>
  )
}

export default UserHome