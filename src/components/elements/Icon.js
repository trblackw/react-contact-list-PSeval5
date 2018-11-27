import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Icon extends Component {
  static defaultProps = {
    color: "red"
  };

  render() {
    switch (this.props.name) {
      case "close":
        return (
          <svg
            x="0px"
            y="0px"
            width="18px"
            height="18px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
          >
            <polygon
              fill={this.props.color}
              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
            />
          </svg>
        );
      case "check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60px"
            height="60px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
            fill={this.props.color}
          >
            <g data-name="checkmark">
              <rect width="24px" height="24px" opacity="0" />
              <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
            </g>
          </svg>
        );
      case "remove":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60px"
            height="60px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
            fill={this.props.color}
          >
            <g data-name="Layer 2">
              <g data-name="close">
                <rect
                  width="18"
                  height="18"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </g>
            </g>
          </svg>
        );
      case "edit":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60px"
            height="60px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
            fill={this.props.color}
          >
            <g data-name="Layer 2">
              <g data-name="edit-2">
                <rect width="24" height="24" opacity="0" />
                <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
                <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z" />
              </g>
            </g>
          </svg>
        );
      case "back":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60px"
            height="60px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
            fill={this.props.color}
          >
            <g data-name="Layer 2">
              <g data-name="arrow-back">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                />
                <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" />
              </g>
            </g>
          </svg>
        );
      default:
        return null;
    }
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
