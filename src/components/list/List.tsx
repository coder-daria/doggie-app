import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Card } from "../card/Card";
import { Modal } from "./../modal/Modal";
import { SelectedDog } from "../types/selectedDog";
import { Status } from "./../types/result";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 0;
  align-items: center;
`;

interface Dogs {
  [key: string]: string[];
}

interface Result {
  message: Dogs;
  status: string;
}

export const ALL_DOGS = "https://dog.ceo/api/breeds/list/all";

export const List = () => {
  const [dogs, setDogs] = useState<Dogs>({});
  const [selectedDog, setSelectedDog] = useState<SelectedDog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result: Result = await fetch(ALL_DOGS)
        .then((response) => response.json())
        .then((data) => data);

      if (result.status === Status.success) {
        setDogs(result.message);
      }
    };

    fetchData();
  }, []);

  const breedsNames = Object.keys(dogs);
  const dogList = Object.keys(dogs).map((key) => dogs[key]);

  return (
    <Container>
      {dogList.length > 0
        ? dogList.map((subbreeds, index) => {
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
          })
        : "Sorry, all dogs went home!"}
      {selectedDog ? (
        <Modal setSelectedDog={setSelectedDog} selectedDog={selectedDog} />
      ) : null}
    </Container>
  );
};
