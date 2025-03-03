import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}
const Button = styled.button`
  background-color: #f4a261;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #e76f51;
  }
  @media (max-width: 768px) {
    font-size: .8rem;
    margin: 5px;
    padding: 3px 10px;
  }
  
`;
const HeaderContainer = styled.header`
  background: #fdf8f4; /* Tono crema elegante */
  color: #4a2e19; /* Marrón sofisticado */
  padding: 16px 32px;
  display: flex;
  width: 100%;
  
  justify-content: space-between;
  align-items: center;
  position: sticky;
  /*border-bottom: 2px solid #d9a7b5;  Detalle en rosa palo */
   top: 0;
  z-index: 1000;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1); /* Agrega sombra para efecto flotante */


  @media (max-width: 768px) {
   width: 85%;
    flex-direction: column;
    text-align: center;
    
      margin:50px;
  }
`;

const Logo = styled.a`
  font-size: 2.2rem;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-decoration: none;
  color: #4a2e19;
  transition: color 0.3s ease;

  &:hover {
    color: #d9a7b5;
  }
    @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownContainer = styled.div`
  font-size: 1.2rem;
  font-family: "Playfair Display", serif;
  background: rgba(20, 40, 100, 0.3); /* Capa oscura para mejorar legibilidad */
  color: white;
  padding: 5px 15px;
  border-radius: 25px;
  margin: 0 20px;
    @media (max-width: 768px) {
    font-size: .8rem;
    margin: 5px;
    padding: 3px 10px;
  }
`;

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("January 24, 2026 ").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContainer>
      {`Countdown ${timeLeft.days} Days `}
    </CountdownContainer>
  );
};

function scrollToSection() {
  const section = document.getElementById("location-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function Header({ setCurrentSection, currentSection }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo>Trini & Jeremiah</Logo>
 
      <Button onClick={scrollToSection} >¿WHERE?</Button>

      <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <CountdownTimer/>
    </HeaderContainer>
  );
}

export default Header;