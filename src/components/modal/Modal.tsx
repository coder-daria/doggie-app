import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { Status } from "../types/result";

import { SelectedDog } from "../types/selectedDog";

import {
  Background,
  Content,
  CloseButton,
  RefreshButton,
  DogImage,
  LoadingContent,
  ImageWrapper,
  RefreshContainer,
  BreedName,
} from "./Modal.styles";

interface Props {
  setSelectedDog: (selectedDog: SelectedDog | null) => void;
  selectedDog: SelectedDog;
}

interface Result {
  message: string;
  status: string;
}

export const Modal = ({ selectedDog, setSelectedDog }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [randomDogImg, setRandomDogImg] = useState<string>("");

  const fetchRandomDogImage = useCallback(async () => {
    setIsLoading(true);
    const result: Result = await fetch(
      `https://dog.ceo/api/breed/${selectedDog.breed}/${selectedDog.subbreed}/images/random`
    )
      .then((response) => response.json())
      .then((data) => data);

    if (result.status === Status.success) {
      setRandomDogImg(result.message);
    }
    setIsLoading(false);
  }, [selectedDog.breed, selectedDog.subbreed]);

  useEffect(() => {
    fetchRandomDogImage();
  }, [fetchRandomDogImage]);

  return (
    <>
      <Background />
      <Content role="dialog">
        <BreedName>
          {selectedDog.breed} {selectedDog.subbreed}
        </BreedName>
        <CloseButton
          aria-label="close button"
          onClick={() => setSelectedDog(null)}
        >
          <AiOutlineClose size="24" color="#fff" />
        </CloseButton>
        <ImageWrapper>
          {isLoading ? (
            <LoadingContent>Loading...</LoadingContent>
          ) : (
            <DogImage src={randomDogImg} alt="dog" />
          )}
        </ImageWrapper>
        <RefreshContainer>
          <RefreshButton
            aria-label="refresh image button"
            onClick={fetchRandomDogImage}
            disabled={isLoading}
          >
            <MdRefresh size="54" />
          </RefreshButton>
          <span>Check another picture!</span>
        </RefreshContainer>
      </Content>
    </>
  );
};
