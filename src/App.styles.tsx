import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  height: 40px;
  background: #96be96;
  display: flex;
  align-items: center;
  padding: 0 32px;
  color: #fff;
`;

export const Content = styled.div`
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
`;
