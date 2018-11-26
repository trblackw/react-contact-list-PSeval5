import React, { Component } from "react";
import { ContactForm } from "./AddContact";
import { ContactImageContainer } from "./Contact";
import { Button } from "./Contacts";
import { Link } from "react-router-dom";

export default class ContactToEdit extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    image_url: ""
  };

  static getDerivedStateFromProps = ({ id }) => ({ id: Number(id) });

  checkChanges = () => {
    const inputs = [...this.contactForm.querySelectorAll("input")];
    const newState = inputs.reduce((newStateObj, input) => {
      newStateObj[input.name] =
        input.value !== input.defaultValue ? input.value : input.defaultValue;
      return newStateObj;
    }, {});
    this.setState(
      {
        name: newState.name,
        email: newState.email,
        phone_number: newState.phone_number,
        image_url: newState.image_url
      },
      () => this.props.update(this.state)
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
            onClick={this.checkChanges}
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
