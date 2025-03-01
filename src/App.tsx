import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutwedding from "./pages/Aboutwedding";

import styled from "styled-components";

// Contenedor principal con fondo elegante
const AppContainer = styled.div`
  background: linear-gradient(to bottom, #fdf8f4, #fff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Playfair Display", serif;
`;

// Contenedor de las secciones con animación de cambio
const MainContent = styled.main`
  flex: 1;
  padding: 0px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  const renderSection = () => {
   
        return <Aboutwedding />;
      
  };

  return (
    <AppContainer>
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <MainContent>{renderSection()}</MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;