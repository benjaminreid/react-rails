import React from "react";
import styled from "styled-components";

const StyledHello = styled.div`
  background-color: red;
  color: white;
`;

const Hello = ({ name }) =>
  <StyledHello>Hello, {name}</StyledHello>
;

export default Hello;
