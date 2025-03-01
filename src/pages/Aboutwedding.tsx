
import styled from "styled-components";
import backgroundImage from "./../assets/img/homeferry.jpg";
import LugarImage from "./../assets/img/San-Martin-de-los-Andes-casco-urbano.jpg";

import churchImage from "./../assets/img/imponente-interior.jpg";

import ArrayanImage from "./../assets/img/joke.png";
import busesImage from "./../assets/img/hero1.jpeg";
import ConfirmationImage from "./../assets/img/home.jpg";

function AboutWedding() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fdf8f4; /* Fondo cálido y elegante */
    padding: 10px 100px;
  `;


  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 6rem;
  color: #000;
   position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
`;
  const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; /* Altura de la imagen */
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    margin: 150px;
  `;

  const DateContainer = styled.div`
  margin-top: 20px;
  font-size: 6rem;
  color: #4a4a4a;
  font-weight: 500;
  padding: 40px; 
`;

const LocationSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 40px;
padding: 40px; 
`;

const ChurchSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 40px;
padding: 40px; 
`;

const GiftSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 40px;
padding: 40px; 
`;
const ImageContainerlocation = styled.div`
  width: 50%;
  height: 350px;
  background-image: url(${LugarImage}); /* Reemplaza con la ruta real */
  background-size: cover;
  background-position: left;
  border-radius: 10px;
`;
const ImageContainerchuch = styled.div`
  width: 50%;
  height: 350px;
  background-image: url(${churchImage}); /* Reemplaza con la ruta real */
  background-size: cover;
  background-position: right;
  border-radius: 10px;
`;
const ImageContainerArrayan = styled.div`
  width: 50%;
  height: 350px;
  background-image: url(${ArrayanImage}); /* Reemplaza con la ruta real */
  background-size: cover;
  background-position: right;
  border-radius: 10px;
`;
const ConfirmationSection = styled.div`

width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
`;
const ImageContainerConfirmation = styled.div`
width: 100%;
height: 100vh; /* Altura de la imagen */
background-image: url(${ConfirmationImage});
background-position: center;
background-size: cover;
border-radius: 10px;
position: absolute;
`;

const ImageContainerBuses = styled.div`
width: 50%;
height: 100vh; /* Altura de la imagen */
background-image: url(${busesImage});
background-position: center;
background-size: cover;
border-radius: 10px;

padding: 0px; 

`;
const ConfirmationText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Capa oscura para mejorar legibilidad */
  color: white;
  font-size: 2.5rem;
  font-style: italic;
  padding: 20px; /* Espaciado interno */
  text-align: center;
`;
  const TextContainer = styled.div`
    width: 45%;
    text-align: center;
`;

const LocationTitle = styled.h2`
font-family: "Playfair Display", serif;
font-size: 3.5rem;
font-weight: bold;
color: #333;
position: relative;
display: inline-block;
`;
const LocationText = styled.p`
font-size: 1.5rem;
color: #5a5a5a;
font-style: italic;
margin-top: 15px;
`;
const ChurchText = styled.p`
font-size: 1.5rem;
color: #5a5a5a;
font-style: italic;
margin-top: 15px;
`;

  return (
    <Container>
      <ImageContainer>
      <Title>We're Getting Married!</Title>
      </ImageContainer>
      <DateContainer> January | 24 | 2026 </DateContainer>
      <LocationSection id="location-section">
        <ImageContainerlocation />
        <TextContainer>
          <LocationTitle>Where will it be?</LocationTitle>
          <LocationText>
            We want you to be part of this episode of our history... which will be at 
            <strong> San Martín de los Andes, Neuquen , Argentina</strong>.
          </LocationText>
        </TextContainer>
     

      </LocationSection>
      <ChurchSection >
        <ChurchText>
       The ceremony will be at 11:00 hr.
       <strong> at San Jose Church:  Gral. Roca 811 </strong>
        </ChurchText>
      <ImageContainerchuch />
      </ChurchSection >
      <ConfirmationSection>
      <ImageContainerConfirmation />
      <ConfirmationText>
        <p>Please RSVP</p>
        <p>Trini: 6513826116</p>
        <p>Jeremiah: 2188311294</p>
      </ConfirmationText>
    </ConfirmationSection>
    <LocationSection>
        < ImageContainerArrayan />
        <TextContainer>
          <LocationTitle>We will celebrate in Arrayan </LocationTitle>
          <LocationText>
            <strong> Circuito Arrayan KM 4,5. San Martín de los Andes, Neuquen , Argentina</strong>.
          </LocationText>
        </TextContainer>
      </LocationSection>
      <LocationSection>
       
        <TextContainer>
          <LocationTitle>We will put buses at your disposal </LocationTitle>
          <LocationText>
            <strong> At 12hr  from San Jose Church -  Gral. Roca 811 - to the venue at Arrayan - Circuito Arrayan KM 4,5</strong>.
            <p>buses are from "La Araucana viajes" ~ www.araucana.com.ar  </p> 
            <strong> At 21hr and 23hr from the venue at Arrayan  to your hotel </strong>.
         
          </LocationText>
        </TextContainer>
        < ImageContainerBuses />
      </LocationSection>

      <GiftSection >
       
    
         <LocationTitle>And finally remember</LocationTitle>
         <LocationText>
           <strong>The important thing is that you come with enthusiasm, joy and the desire to have a good time.</strong>
           <p>But if you want to give us a gift, here is our account number:</p> 
           <strong> 0000000000000000000000 </strong>.
        
         </LocationText>
  
     </GiftSection >
   
       </Container>
  );
}

export default AboutWedding;
// Buses
// We will put buses at your disposal both in Castellón and in:

// Sant Joán de Moró:
// To go from Castellón (Plaza Fadrell)
// at 12:00 and to return at 22:00 OR 24:00

// To go from Sant Joán de Moró (Plaza l’Església)
// at 12:00 and to return at 22:00 or 24:00
//        
 
// Arrayan,Arrayan Circuit KM 4.5.
// San Martin de los Andes,
// Neuquen the reception..