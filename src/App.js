import React from "react";
import "./App.css";
import CardDataLoader from './card-data-loader';
import Logo from './logo.jpg';
import styled from 'styled-components';
const Background = styled.div`
background-image: url(${Logo})
`




function App() {
  return (
    <Background>
    
      <CardDataLoader />
    </Background>

  );
}

export default App;
