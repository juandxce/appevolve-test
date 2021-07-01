import React from "react";
import styled from "styled-components";

const ResponsiveIconStyles = styled.img`
  height: calc(100vw * (${(props) => props.mobileSize} / 375));
  width: calc(100vw * (${(props) => props.mobileSize} / 375));

  @media only screen and (min-width: 768px) {
    height: calc(100vw * (${(props) => props.desktopSize} / 1440));
    width: calc(100vw * (${(props) => props.desktopSize} / 1440));
  }
`;
function ResponsiveIcon({ alt, src, mobileSize, desktopSize }) {
  return (
    <ResponsiveIconStyles
      mobileSize={mobileSize}
      desktopSize={desktopSize}
      alt={alt}
      src={src}
    />
  );
}

export default ResponsiveIcon;
