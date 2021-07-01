import React from "react";
import styled from "styled-components";

const StyledBarrier = styled.div`
  border-top: 1px solid
    ${(props) => (props.color ? props.color : "rgba(140, 138, 152, 0.25)")};
`;

const Barrier = ({ color, className }) => <StyledBarrier className={className} color={color} />;
export default Barrier;
