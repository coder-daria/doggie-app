import React from "react";
import styled from "styled-components";
import { Card } from "../card/Card";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const mockedData = [
  "Pedro",
  "Juan",
  "Pedro",
  "Juan",
  "Pedro",
  "Juan",
  "Pedro",
  "Juan",
  "Pedro",
  "Juan",
];

export const List = () => {
  return (
    <Container>
      {mockedData.map((dog) => (
        <Card key={dog} dogName={dog} />
      ))}
    </Container>
  );
};
