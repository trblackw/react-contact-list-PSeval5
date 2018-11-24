import React, { Component } from "react";
import { ContactsContext } from "./ContactsContext";
import Contact from "./Contact";
import styled from "styled-components";

export default class EditContact extends Component {
  render() {
    const selectedID = this.props.match.params.id;
    return (
      <ContactsContext.Consumer>
        {({ contacts }) => {
          const contact = contacts.find(cont => cont.id === Number(selectedID));
          return (
            contact !== undefined && (
              <ContactContainer>
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  img={contact.image_url}
                  number={contact.phone_number}
                  id={contact.id}
                />
              </ContactContainer>
            )
          );
        }}
      </ContactsContext.Consumer>
    );
  }
}

const ContactContainer = styled.div`
  margin: 2em auto;
  padding: 1em;
  font-size: 1.5em;
`;
