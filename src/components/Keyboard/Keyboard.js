import React from "react";
import { map } from 'lodash';
import { lowerCase } from "voca";
import styled from "styled-components/macro";

const Key = styled.button`
    background-color: black;
    border-block-style: solid;
    border-color: red;
    border-radius: 3px;
    border-width: 3px;
    color: red;
    font-size: larger;
    height: 32px;
    width: 32px;
`;

const Keyboard = ({ layout }) => (
  <div>
    {map(layout, key => {
      const uniqueKey = `key-${lowerCase(key)}`;
      return (
        <Key key={uniqueKey} data-qa={uniqueKey}>{key}</Key>
      );
    })}
  </div>
);

export default Keyboard;
