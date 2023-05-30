import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
export const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div class="containt-xxl">
          <div class="row">
            <div class="col-6">
              <div class="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main bannner"
                />
                <div class="main-banner-content position-absolute">
                  <h4>Super charged </h4>
                  <h5>ABCD</h5>
                  <p>Hello world </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div class="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Super charged </h4>
                    <h5>ABCD</h5>
                    <p>Hello world </p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
                <div class="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Super charged </h4>
                    <h5>ABCD</h5>
                    <p>Hello world </p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
                <div class="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Super charged </h4>
                    <h5>ABCD</h5>
                    <p>Hello world </p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
                <div class="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Super charged </h4>
                    <h5>ABCD</h5>
                    <p>Hello world </p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="services d-flex align-item-center justify-content-between">
                <div className="d-flex align-item-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all order over2</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daly Surpise Offer</h6>
                    <p className="mb-0"> save upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6> Support 24/7 </h6>
                    <p className="mb-0"> shop with an Expert </p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Price</h6>
                    <p className="mb-0">Get Factory defult Price</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="home-wrapper-2 py-5">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>SmartTv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>HeadPhone</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="watch" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="speaker" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>SmartTv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="watch" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="speaker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper-2 py-5">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
