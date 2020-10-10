import React from 'react';
import ReactDOM from 'react-dom';

function NavBar() {
    return (
        <nav>
            <div class="nav-wrapper #1b5e20 green darken-4 z-depth-3" >
                <a href="#" class="brand-logo center">Our Harvest</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our farms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default NavBar;