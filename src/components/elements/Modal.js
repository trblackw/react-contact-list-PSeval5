import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Icon from "./Icon";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount = () => modalRoot.appendChild(this.el);

  componentWillUnmount = () => modalRoot.removeChild(this.el);

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
