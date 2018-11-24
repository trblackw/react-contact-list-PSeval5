import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Contacts";
import { Link } from "react-router-dom";
import { ContactsContext } from "./ContactsContext";

export default class AddContact extends Component {
  state = {
    id: Math.round(Math.random() * 100000000),
    name: "",
    email: "",
    phone_number: "",
    image_url: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.contactForm.reset();
  };

  isValidEmail = email => {
    if (!/^[^@]+@[^@.]+\.[a-z]+$/i.test(email)) {
      alert("please enter a valid email");
    }
  };

  formatNumber = number => {
    const formattedNumber = number.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
    this.number.value = formattedNumber;
  };

  handleName = e => this.setState({ name: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handleNumber = e => this.setState({ phone_number: e.target.value });
  handleImage = e => this.setState({ image_url: e.target.value });

  render() {
    return (
      <ContactsContext.Consumer>
        {({ add }) => (
          <ContactForm
            onSubmit={e => this.handleSubmit(e)}
            ref={contactForm => (this.contactForm = contactForm)}
          >
            <h1>New Contact</h1>
            <Link to="/">
              <Button style={{ background: "lightblue", color: "black" }}>
                Back
              </Button>
            </Link>
            <hr />
            <div id="form">
              <label htmlFor="name">Contact Name</label>
              <input
                type="text"
                placeholder="name"
                onChange={this.handleName}
              />
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                placeholder="email"
                onChange={this.handleEmail}
                onBlur={() => this.isValidEmail(this.state.email)}
              />
              <label htmlFor="number">Contact Number</label>
              <input
                type="text"
                placeholder="number"
                onChange={this.handleNumber}
                ref={number => (this.number = number)}
                onBlur={() => this.formatNumber(this.number.value)}
              />
              <label htmlFor="image">Contact Image</label>
              <input
                type="text"
                placeholder="image"
                onChange={this.handleImage}
              />
            </div>
            <Button
              type="submit"
              style={{ width: "200px" }}
              onClick={() => add(this.state)}
            >
              Add
            </Button>
          </ContactForm>
        )}
      </ContactsContext.Consumer>
    );
  }
}

const ContactForm = styled.form`
  margin: 1.5em auto;
  padding: 1em;
  border: 2px solid black;
  border-radius: 5px;
  background: whitesmoke;
  color: black;
  width: 50%;
  justify-content: center;

  h1 {
    text-align: center;
  }

  #form {
    margin: 1em;
  }

  input {
    display: block;
    margin: 1.5em 0;
    padding: 0.5em;
    width: 70%;
  }
`;
