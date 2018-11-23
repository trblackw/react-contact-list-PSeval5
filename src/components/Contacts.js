import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    this.setState({
      contacts: this.dummyContacts
    });
  };

  dummyContacts = [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKLxacs6mf33EYjU5tSXJJgx3byM7_Ut3UhED1mu7BNGOamBd3TTcToo",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    },
    {
      id: 21030349,
      name: "Alan Turing",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",
      email: "turing@example.com",
      phone_number: "16666666666"
    },
    {
      id: 70384954,
      name: "Isaac Newton",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",
      email: "newton@example.com",
      phone_number: "15588855555"
    }
  ];

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };
  render() {
    return (
      <ContactsContainer>
        <ContactsHeader>
          <h1>Contacts</h1>
        </ContactsHeader>
        <Toggle>
          {({ toggle, on }) => (
            <Fragment>
              <Button onClick={toggle}>Add contact</Button>
              {on && <input type="text" placeholder="new contact" />}
            </Fragment>
          )}
        </Toggle>
        <div id="contacts">
          {this.state.contacts.map(contact => (
            <Contact
              key={contact.id}
              name={contact.name}
              email={contact.email}
              img={contact.image_url}
              number={contact.phone_number}
              remove={this.removeContact}
            />
          ))}
        </div>
      </ContactsContainer>
    );
  }
}

const ContactsContainer = styled.div`
  margin: 0 auto;
  color: whitesmoke;
  padding: 1.5em;
  background: #282c34;
  #contacts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactsHeader = styled.div`
  margin: 1.5em auto;
  text-align: center;
`;

export const Button = styled.button`
  background: lightslategray;
  color: whitesmoke;
  padding: 0.7em;
  width: 15%;
  border: none;
  border-radius: 2px;
  display: block;
  margin: 1em auto;
  &:hover {
    background: hsl(0, 100%, 71%);
    color: whitesmoke;
    cursor: pointer;
  }
`;
