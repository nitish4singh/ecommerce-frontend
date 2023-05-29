import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
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
                <Link>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
