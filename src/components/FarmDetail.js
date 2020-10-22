import React, { Component } from "react";
import './FarmDetail.css';


    function FarmDetail() {

        return(
            <div className="farm-box">
                <img className="farm-img" src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt=""/>
                <div className="farm-info">
                    <h4 className="farm-title">Fantasy Farm Name</h4>
                    <h6 className="farm-address">Fantasy Street 11, 12345 Fantasy Town</h6>
                    <h6 className="farm-products">Products: apples, potatos</h6>
                    <p className="farm-descr">This is a general description of the farm. We are a family-led farm south of 
                    Fantasy Town. Feeling fed up with the busy city life? Come visit us and learn about our organically grown
                    veggies and fruits. You will never want to buy anything at a supermarket ever again! If you have any questions
                    in advance, feel free to contact us via phone or email. See you soon!</p>
                    <p className="farm-contact">phone: 01234/56789 email: fantasy@farm.com</p>
                </div>
            </div>
        );
    }


export default FarmDetail;