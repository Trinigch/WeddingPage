import Navigation from "./Navigation";
import styled from "styled-components";

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
`;
const HeaderContainer = styled.header`
  background: #fdf8f4; /* Tono crema elegante */
  color: #4a2e19; /* Marrón sofisticado */
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*border-bottom: 2px solid #d9a7b5;  Detalle en rosa palo */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
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
`;
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
    </HeaderContainer>
  );
}

export default Header;