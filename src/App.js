import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Header from './components/Header';
import Title from './components/Title';
import Concept from './components/Concept';
import Work from './components/Work';
import Work2 from './components/Work2';
import Work3 from './components/Work3';
import RoadMap from './components/RoadMap';
import Campaign from './components/Campaign';
import Footer from './components/Footer';
import "./App.css";


function App() {
  return (
    <ChakraProvider theme={theme} p="50">
      <Header />
      <Title />
      <Concept />
      <Work />
      <Work2 />
      <Work3 />
      <RoadMap />
      <Campaign />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
