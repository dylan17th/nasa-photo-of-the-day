import React from "react";
import "./App.css";
import CardDataLoader from './card-data-loader';
import styled from 'styled-components';

const NasaBackground = styled.div`
backgourn-image: url(bryan-goff-IdYsDAsLaj8-unsplash.jpg)
`

function App() {
  return (
    <NasaBackground className="App">
      <CardDataLoader />
    </NasaBackground>
  );
}

export default App;
