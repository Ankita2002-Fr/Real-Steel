import React from "react";
import myimage from "./images/download (1).jpg";
// import styled from "styled-components";

function Cards() {
  return (
    <div class="card-whole">
      <div class="card card-1">
        <div>
          <img src={myimage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      <div class="card card-2">
        <div>
          <img src={myimage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      <div class="card card-3">
        <div>
          <img src={myimage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      <div class="card card-1">
        <div>
          <img src={myimage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

// const CardWrapper = styled.div`
//   width: 18rem;
//   vertical-align: middle;
// `;
