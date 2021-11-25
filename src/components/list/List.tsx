import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ALL_DOGS } from "./../../API/index";
import { Card } from "../card/Card";
import { Modal } from "./../modal/Modal";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

interface Message {
  [key: string]: string[];
}

interface Result {
  message: Message;
  status: string;
}

interface SelectedDog {
  subbreed: string;
  breed: string;
}

export const List = () => {
  const [dogs, setDogs] = useState<Message>({});
  const [selectedDog, setSelectedDog] = useState<SelectedDog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result: Result = await fetch(ALL_DOGS)
        .then((response) => response.json())
        .then((data) => data);

      if (result.status) {
        setDogs(result.message);
      }
    };

    fetchData();
  }, []);

  const breedsNames = Object.keys(dogs);
  const dogList = Object.keys(dogs).map((key: any) => dogs[key]);

  return (
    <Container>
      {dogList.map((subbreeds, index) => {
        return subbreeds.map((subbreed: string) => (
          <Card
            key={subbreed}
            dogName={`${subbreed} ${breedsNames[index]}`}
            onClick={() => {
              setSelectedDog({
                subbreed,
                breed: breedsNames[index],
              });
            }}
          />
        ));
      })}
      {selectedDog ? (
        <Modal setSelectedDog={setSelectedDog} selectedDog={selectedDog} />
      ) : null}
    </Container>
  );
};
