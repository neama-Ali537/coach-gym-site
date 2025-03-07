import React from "react";

export default function FeedBack() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-8 m-auto">
            <div id="carouselExample" className="carousel slide">
              <h2 className="p-3 text-end">: دا جزء بسيط من شهاداتي-</h2>
              <div className="carousel-inner rounded-1">
                <div className="carousel-item active">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/rev/cert1.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/rev/cert4.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/rev/cert2.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/rev/cert3.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row w-75 m-auto">
          <div className="col-md-8 m-auto">
            <h3 className="p-3 text-end">: دا جزء من أراء الكلاينت في شغلي:-</h3>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {Array.from({ length: 34 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {Array.from({ length: 34 }).map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/Assets/rev/rev${index + 1}.jpg`}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

