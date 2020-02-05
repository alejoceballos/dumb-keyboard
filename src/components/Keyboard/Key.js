import React from "react";
import { lowerCase } from "voca";
import styled from "styled-components/macro";

const StyledButton = styled.button`
    background-color: black;
    border-block-style: solid;
    border-color: red;
    border-radius: 3px;
    border-width: 2px;
    color: red;
    font-family: Arial, serif;
    font-size: larger;
    height: 32px;
    margin: 2px;
    width: 32px;
`;

const Key = ({value, onClick}) => (
  <StyledButton data-qa={`key-${lowerCase(value)}`} onClick={() => onClick(value)}>
    {value}
  </StyledButton>
);

export default Key;