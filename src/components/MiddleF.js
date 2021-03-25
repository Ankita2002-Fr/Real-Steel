import React from "react";
import myimage from "./images/dog-img.jpg";

function MiddleF() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
           1111 With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn any room into a complete home gym.
          </p>
          <img class="cara-img" src={myimage}></img>
        </div>

        <div class="carousel-item">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
           2222 With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn any room into a complete home gym.
          </p>
          <img class="cara-img" src={myimage}></img>
        </div>
        <div class="carousel-item">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
           3333 With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn any room into a complete home gym.
          </p>
          <img class="cara-img" src={myimage}></img>
        </div>
        <div class="carousel-item">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
           4444 With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn any room into a complete home gym.
          </p>
          <img class="cara-img" src={myimage}></img>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default MiddleF;
