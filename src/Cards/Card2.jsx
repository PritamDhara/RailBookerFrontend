import React from 'react'

function Card2() {
  return (
    <>
      <div className="col col-md-4 col-sm-6 text-center">
        <div className="card h-100">
          <div
            className="card-img-circle"
            style={{ width: "100%", height: "200px" }}
          >
            <img
              src="https://i.pinimg.com/564x/37/05/4e/37054efae85d3b049ce5e312f19d1051.jpg"
              className="rounded-circle"
              alt="Review 1"
              style={{ width: "60%", height: "100%" }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Customer Review 1
            </h5>
            <p className="card-text">
              This is a customer review. Share what a customer had to say about
              your services.
            </p>
          </div>
        </div>
      </div>
      <div className="col col-md-4 col-sm-6 text-center">
        <div className="card h-100">
          <div
            className="card-img-circle"
            style={{ width: "100%", height: "200px" }}
          >
            <img
              src="https://i.pinimg.com/564x/5e/96/4b/5e964b4d1a6a514bf141c694f5037537.jpg"
              className="rounded-circle"
              alt="Review 2"
              style={{ width: "60%", height: "100%" }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Customer Review 2
            </h5>
            <p className="card-text">
              Another customer review. Add their feedback and comments here.
            </p>
          </div>
        </div>
      </div>
      <div className="col col-md-4 col-sm-6">
        <div className="card h-100 text-center">
          <div
            className="card-img-circle"
            style={{ width: "100%", height: "200px" }}
          >
            <img
              src="https://i.pinimg.com/564x/6a/51/34/6a5134a8dd0d253a4c6f7423f559afcc.jpg"
              className="rounded-circle"
              alt="Review 3"
              style={{ width: "60%", height: "100%" }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" style={{ paddingBottom: "0.5rem" }}>
              Customer Review 3
            </h5>
            <p className="card-text">
              Yet another customer review. Share different customer experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2