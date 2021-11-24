import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ALL_DOGS } from "./../../API/index";
import { Card } from "../card/Card";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const List = () => {
  const [dogs, setDogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetch(ALL_DOGS)
        .then((response) => response.json())
        .then((data) => data);

      if (result.status) {
        setDogs(result.message);
      }
    };

    fetchData();
  }, []);

  const dogRases = Object.keys(dogs).map((key: any, index) => dogs[key]);

  return (
    <Container>
      {dogRases.map((dogRase) => {
        return dogRase.map((dog: string) => <Card key={dog} dogName={dog} />);
      })}
    </Container>
  );
};
