import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Header from './components/Header';
import Title from './components/Title';
import Work from './components/Work';
import Slide from './components/Slide';
import Season from './components/Season';
import "./App.css";


function App() {
  return (
    <ChakraProvider theme={theme} p="50">
      <Header />
      <Title />
      <Work />
      <Slide />
      <Season />
    </ChakraProvider>
  );
}

export default App;
