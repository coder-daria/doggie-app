import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  background: none;
  border-radius: 4px;
  border: none;
  box-shadow: #96be96 0px 2px 8px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 16px 0;
  max-height: 100px;
  min-height: 100px;
  text-transform: capitalize;
  width: 100%;

  :active {
    box-shadow: #5c975c 0px 2px 8px 0px;
  }
`;

interface Props {
  dogName: string;
  onClick: () => void;
}

export const Card = ({ dogName, onClick }: Props) => (
  <Container onClick={onClick}>{dogName}</Container>
);
