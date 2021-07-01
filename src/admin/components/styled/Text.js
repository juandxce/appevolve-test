import React from "react";
import styled from "styled-components";

const TextStyles = styled.span`
  font-size: calc(100vw * (${(props) => props.mobileSize} / 375));
  line-height: calc(100vw * (${(props) => props.mobileSize} / 375));

  @media only screen and (min-width: 768px) {
    font-size: calc(100vw * (${(props) => props.desktopSize} / 1440));
    line-height: calc(100vw * (${(props) => props.desktopSize} / 1440));
  }
`;

function Text(props) {
  return <TextStyles {...props} />;
}

export default Text;
