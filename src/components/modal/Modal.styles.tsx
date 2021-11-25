import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 400px;
  height: 400px;
  z-index: 2;
  background-color: #fff;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  padding: 16px;
`;

export const DogImage = styled.img`
  height: 300px;
  width: auto;
  max-height: 300px;
  max-width: 400px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: -32px;
  top: -32px;
`;

export const ImageWrapper = styled.div`
  min-height: 300px;
  max-height: 300px;
`;

export const LoadingContent = styled.span`
  position: relative;
  text-align: center;
  height: 50px;
  top: 50%;
  margin-top: -25px;
`;

export const RefreshContainer = styled.div`
  height: 150px;
  max-height: 150px;
  display: flex;
  flex-direction: column;
`;

export const RefreshButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg:hover {
    fill: #81ad81;
  }

  &:active {
    svg {
      fill: #587a58;
    }
  }
`;
