import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="page-footer #1b5e20 green darken-3">
      <div class="container ">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright #1b5e20 green darken-4">
        <div class="container">
          © 2020 Copyright
          <a class="grey-text text-lighten-4 right" href="#!">We love trees</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;