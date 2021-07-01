import React from "react";
import styled from "styled-components";

const CheckboxStyles = styled.span`
  &.container {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    background: rgba(240, 240, 240, 1);
    border-radius: calc(100vw * (4 / 1440));
    height: calc(100vw * (24 / 1440));
    width: calc(100vw * (24 / 1440));
    margin-right: calc(100vw * (4 / 1440));
  }

  &.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border-radius: calc(100vw * (4 / 1440));
  }

  &.container:hover input ~ .checkmark {
    background-color: #f0f0f0;
  }

  &.container input:checked ~ .checkmark {
    background: rgba(85, 163, 174, 1);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  &.container input:checked ~ .checkmark:after {
    display: block;
  }

  &.container .checkmark:after {
    left: calc(100vw * (9 / 1440));
    top: calc(100vw * (6 / 1440));
    width: calc(100vw * (3 / 1440));
    height: calc(100vw * (7 / 1440));
    border: solid white;
    border-width: 0 calc(100vw * (3 / 1440)) calc(100vw * (3 / 1440)) 0;
    transform: rotate(45deg);
  }
`;

function Checkbox({ className }) {
  const [checked, setChecked] = React.useState(!!Math.round(Math.random(0, 1)));
  return (
    <CheckboxStyles
      className={`container ${className}`}
      onClick={() => setChecked((prevChecked) => !prevChecked)}
    >
      <input checked={checked} type="checkbox" />
      <span className="checkmark"></span>
    </CheckboxStyles>
  );
}

export default Checkbox;
