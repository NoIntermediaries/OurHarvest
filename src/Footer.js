import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="page-footer #1b5e20 green darken-3">
      <div className="container ">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright #1b5e20 green darken-4">
        <div className="container">
          © 2020 Copyright
          <a className="grey-text text-lighten-4 right" href="#!">We love trees</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;