import React, { Component } from "react";
import styled from "styled-components";

export default class Contacts extends Component {
  render() {
    return (
      <ContactsContainer>
        <ContactsHeader>
          <h1>Contacts</h1>
        </ContactsHeader>
      </ContactsContainer>
    );
  }
}

const ContactsContainer = styled.div`
  margin: 0 auto;
  background: whitesmoke;
  padding: 1.5em;
`;

const ContactsHeader = styled.div`
  margin: 1.5em auto;
  text-align: center;
`;
