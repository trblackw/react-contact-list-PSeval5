import React, { Component } from "react";
import { ContactForm } from "./AddContact";
import { ContactImageContainer } from "./Contact";
import { Button } from "./Contacts";
import { Link } from "react-router-dom";
import { reducer } from "../helpers";

export default class ContactToEdit extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    image_url: ""
  };

   //maintain id
  static getDerivedStateFromProps = ({ id }) => ({ id: Number(id) });

  collectState = () => {
     const inputs = [...this.contactForm.querySelectorAll("input")];
     const { name, email, phone_number, image_url } = reducer(inputs);
     //reducer function returns update { key-value pairs } for edit contact form
    this.setState({ name, email, phone_number, image_url }, () =>
      this.props.update(this.state)
    );
  };

  render() {
    const { name, email, number, image } = this.props;
    return (
      <ContactForm
        onSubmit={e => e.preventDefault()}
        ref={contactForm => (this.contactForm = contactForm)}
      >
        <h4>Editting {name}'s contact</h4>
        <ContactImageContainer>
          <img src={image} alt="contact" />
        </ContactImageContainer>
        <div id="form">
          <input type="text" name="name" defaultValue={name} autoFocus />
          <input type="email" name="email" defaultValue={email} />
          <input type="text" name="phone_number" defaultValue={number} />
          <input type="text" name="image_url" defaultValue={image} />
          <Button
            style={{ width: "auto" }}
            type="button"
            onClick={this.collectState}
          >
            Finish editing
          </Button>
        </div>
        <Link to="/">
          <Button style={{ background: "teal", width: "auto" }}>
            Return to contacts
          </Button>
        </Link>
      </ContactForm>
    );
  }
}
