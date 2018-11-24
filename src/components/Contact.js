import React from "react";
import styled from "styled-components";
import { ContactsContext } from "./ContactsContext";
import { Link } from "react-router-dom";

const Contact = ({ name, img, email, number, id }) => (
  <ContactsContext.Consumer>
    {({ remove }) => (
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
        <div className="button-group">
          <Link to={`/${id}`}>
            <button id="edit">Edit</button>
          </Link>
          <Link to="#">
            <button id="remove" onClick={() => remove(id)}>
              Remove
            </button>
          </Link>
        </div>
      </ContactContainer>
    )}
  </ContactsContext.Consumer>
);

export default Contact;

const ContactContainer = styled.div`
  margin: 1em auto;
  padding: 0.5em;
  background: whitesmoke;
  width: 80%;
  border-radius: 5px;
  color: black;

  div#details {
    text-align: center;
    padding: 0.6em;
  }

  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

    button {
      padding: 0.5em;
      color: white;
      width: 60px;
      margin: 0 1em;
      border: none;
      border-radius: 2px;
      &:hover {
        transform: scale(1.2);
        transition-duration: 300ms;
        cursor: pointer;
      }
    }

    #remove {
      background: red;
    }

    #edit {
      background: teal;
    }
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
