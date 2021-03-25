import React from "react";
import Headerplus from "./components/Headerplus";
import Down from "./components/Down";

function ContactUs() {
  return (
    <div>
      <Headerplus />
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default ContactUs;
