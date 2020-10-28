import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer #1b5e20 green darken-3">
      <div className="container ">
        <div className="row">
          <div className="col s12">
            <h5 className="white-text">OUR HARVEST</h5>
            <div className="row">
              <div className="col s12">
                <p>
                  We help to connect consumers to discover and contact <br />
                  local farmers directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright #1b5e20 green darken-4">
        <div className="container">
          <div className="row">
            <div className="col s4">
              <a className="grey-text text-lighten-4 left" href="#!">
                Imprint and Legal Information
              </a>
            </div>

            <div className="grey-text text-lighten-4 col s4">
              ©2020 OURHARVEST.All rights reserved.
            </div>

            <div className="col s4">
              <a className="grey-text text-lighten-4 right" href="#!">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
