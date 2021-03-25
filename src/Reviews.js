import React from "react";
import Headerplus from "./components/Headerplus";
import Down from "./components/Down";
import myimage from "./components/images/dog-img.jpg";

function Reviews() {
  return (
    <div>
      <Headerplus />
      <div>
        <div class="media">
          <img src={myimage} class="align-self-start mr-3 img-reviews" alt="..."></img>
          <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p>
              I’m gon’ put her in a coma. You give a hundred reasons why, and
              you say you're really gonna try. So I sat quietly, agreed
              politely. Suiting up for my crowning battle. And on my 18th
              Birthday we got matching tattoos. So très chic, yeah, she's a
              classic. I am ready for the road less traveled.
            </p>
            <p>
              I'm walking on air (tonight). But down to earth. You're original,
              cannot be replaced. But in another life I would be your girl. We
              drove to Cali and got drunk on the beach. We can dance, until we
              die, you and I, will be young forever. Saw you downtown singing
              the Blues.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="media">
          <img src={myimage} class="align-self-start mr-3 img-reviews" alt="..."></img>
          <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p>
              I’m gon’ put her in a coma. You give a hundred reasons why, and
              you say you're really gonna try. So I sat quietly, agreed
              politely. Suiting up for my crowning battle. And on my 18th
              Birthday we got matching tattoos. So très chic, yeah, she's a
              classic. I am ready for the road less traveled.
            </p>
            <p>
              I'm walking on air (tonight). But down to earth. You're original,
              cannot be replaced. But in another life I would be your girl. We
              drove to Cali and got drunk on the beach. We can dance, until we
              die, you and I, will be young forever. Saw you downtown singing
              the Blues.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="media">
          <img src={myimage} class="align-self-start mr-3 img-reviews" alt="..."></img>
          <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p>
              I’m gon’ put her in a coma. You give a hundred reasons why, and
              you say you're really gonna try. So I sat quietly, agreed
              politely. Suiting up for my crowning battle. And on my 18th
              Birthday we got matching tattoos. So très chic, yeah, she's a
              classic. I am ready for the road less traveled.
            </p>
            <p>
              I'm walking on air (tonight). But down to earth. You're original,
              cannot be replaced. But in another life I would be your girl. We
              drove to Cali and got drunk on the beach. We can dance, until we
              die, you and I, will be young forever. Saw you downtown singing
              the Blues.
            </p>
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default Reviews;
