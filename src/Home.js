import React from 'react';
import './Home.css';
import Feature from './Feature';

function Home() {
    return (
        <div className="home">
            <h1 className="title">Veggis had never been so fresh</h1>
            <p className="subtitle">Our Harvest will show you your closest farm where you can get fresh and bio veggetables direct from the field</p>
            <div class="row feat">
                <Feature />
                <Feature />
                <Feature />
            </div>


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
       </div> 
    );
  }
  
  export default Home;