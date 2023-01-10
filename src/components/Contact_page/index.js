import React from "react";
import Particlebackground from "../Particlejs/particlebackground";
import "./index.css";
const Contact = () => {
  return (
    <>
      <div id="contact_main">
        {/* Particle Js component here */}
        <div id="ts">
          <Particlebackground />
        </div>
        <div id="content">
          <div id="subc1">
            <h1>CONTACT</h1>
          </div>
          <div id="subc2">
            {/* Your email here */}
            <h3>
              Email: <span>xyz@gmail.com</span>
            </h3>
            <br></br>
            {/* Your instagram id here */}
            <h3>
              Instagram: <span>xyz</span>
            </h3>
            <br></br>
            {/* Your Linkedin id here along with link in href tag */}
            <h3>
              LinkedIn:{" "}
              <a
                href="#"
                style={{ "text-decoration": "none" }}
              >
                <span>xyz</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
