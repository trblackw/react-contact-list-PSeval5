import React from "react";
import styled from "styled-components";
import Button from './Contacts';

const Contact = ({ name, img, email, number, remove }) => {
  return (
    <ContactContainer className="drop-shadow">
      <ContactImageContainer>
        <img src={img} alt="" />
      </ContactImageContainer>
      <div id="details">
        <h3>{name}</h3>
           <small>{email}</small>
           <br />
        <small>{number}</small>
        </div>
        <Button onClick={remove}>Remove</Button>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin: 1em auto;
  padding: .5em;
  background: whitesmoke;
  width: 80%;
  border-radius: 5px;
  color: black;

  div#details {
    text-align: center;
    padding: .6em;
  }
`;

const ContactImageContainer = styled.div`
  width: 100px;
  height: 100px;
  clip-path: circle(50% at 50% 50%);
  margin: 0 auto;
  img {
    width: 100px;
    min-height: 100px;
    object-fit: cover;
  }
`;
