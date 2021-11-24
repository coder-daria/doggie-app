import React from "react";
import "sanitize.css";

import { List } from "./components/list/List";

import { Container, Content, Navigation } from "./App.styles";

const App = () => {
  return (
    <Container>
      <Navigation>Doggie World</Navigation>
      <Content>
        <List />
      </Content>
    </Container>
  );
};

export default App;
