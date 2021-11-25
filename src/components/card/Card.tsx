import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  max-height: 100px;
  margin: 16px 0;
  border: none;
  background: none;
  border-radius: 4px;
  box-shadow: #96be96 0px 2px 8px 0px;
  cursor: pointer;

  :active {
    box-shadow: #5c975c 0px 2px 8px 0px;
  }
`;

interface Props {
  dogName: string;
  onClick: () => void;
}

export const Card = ({ dogName, onClick }: Props) => {
  return <Container onClick={onClick}>{dogName}</Container>;
};
