import React from "react";
import "./App.css";
import CardDataLoader from './card-data-loader';
import Logo from './logo.jpg';
import styled from 'styled-components';
const Background = styled.img`
position:absolute;
max-width:100%;
z-index: -1;
`




function App() {
  return (
    <div className="app">
    <Background src={Logo}/>
      <CardDataLoader />
    </div>

  );
}

export default App;
