import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="container_contact">
        <div className="contact-heading">
          <h3>Contact Us</h3>
          <p>Please enter your details below:</p>
        </div>

        <div className="formbox">
          <form onSubmit={this.handleSubmit}>
            <div className="row input-field s6">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" onChange={this.handleChange} />
            </div>

            <div className="row input-field s6">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" onChange={this.handleChange} />
            </div>

            <div className="row input-field s6">
              <label htmlFor="phone">Phone no:</label>
              <input type="text" id="phone" onChange={this.handleChange} />
            </div>

            <div className="row input-field s6">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="validate"
                onChange={this.handleChange}
              />
            </div>

            <div className="row input-field s6">
              <label htmlFor="message">Message(optional):</label>
              <textarea
                name="message"
                id="message"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>

            <button className="btn waves-effect waves-light">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
