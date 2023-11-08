import React from 'react'

function Card1() {
  return (
    <>
      <div className="col col-md-4 col-sm-6">
        <div className="card h-100">
          <img
            src="https://i.pinimg.com/564x/85/59/4d/85594d579ec00dbb7962c46ecdfb637c.jpg"
            className="card-img-top"
            alt="Fast Booking"
          />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Fast Booking
            </h5>
            <p className="card-text">
              We offer lightning-fast booking services to save your time and
              hassle.
            </p>
          </div>
        </div>
      </div>
      <div className="col col-md-4 col-sm-6">
        <div className="card h-100">
          <img
            src="https://i.pinimg.com/564x/68/cd/f1/68cdf1c19b951957789965c459a93f97.jpg"
            className="card-img-top"
            alt="Cheap Cost"
          />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Cheap Cost
            </h5>
            <p className="card-text">
              Enjoy cost-effective travel options without compromising quality.
            </p>
          </div>
        </div>
      </div>
      <div className="col col-md-4 col-sm-6">
        <div className="card h-100">
          <img
            src="https://i.pinimg.com/564x/ce/8b/dc/ce8bdc5ba3960e7bd89468231e332ded.jpg"
            className="card-img-top"
            alt="Best Services"
          />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Best Services
            </h5>
            <p className="card-text">
              Experience top-notch services and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1