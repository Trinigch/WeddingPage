
import styled from "styled-components";
import backgroundImage from "./../assets/img/homeferry.jpg";
import LugarImage from "./../assets/img/San-Martin-de-los-Andes-casco-urbano.jpg";

import churchImage from "./../assets/img/imponente-interior.jpg";

import ArrayanImage from "./../assets/img/joke.png";
import busesImage from "./../assets/img/hero1.jpeg";
import ConfirmationImage from "./../assets/img/home.jpg";

import backgroundImagegift from "./../assets/img/homeNosCasamos.jpeg";

interface SectionProps {
  id?: string;
  image: string;  // Si 'image' es una URL de imagen
  title: string;
  text: string | JSX.Element;  
  reverse?: boolean; 
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fdf8f4;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
   
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 5rem;
  color: #000;
  position: absolute;
  margin-top:30px;
  top: -10%;
  left: 50%;
  transform: translate(-50%);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
   @media (max-width: 800px) {
     margin-top:80px;
    font-size: 4rem;
     
  }
    @media (max-width: 650px) {
      margin-top:80px;
    font-size: 3rem;
  }
     @media (max-width: 450px) {
        margin-top:80px;
    font-size: 2rem;
  }
  
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin: 50px 0px;
  @media (max-width: 800px) {
      width: 100%;
      height: 100vh;
      margin: 0px;
  }
  
`;

const SectionContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 140px 0px;
  padding: 20px 0px;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  
  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Imagen arriba en pantallas pequeñas */
    align-items: center;
    text-align: center;
  }
`;

const Section: React.FC<SectionProps>= ({id, image, title, text, reverse = false }) => {
  
  return (
    <SectionContainer id={id} reverse={reverse || false}>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </TextContainer>
      <StyledImage image={image} />
    </SectionContainer>
  );
};

const StyledImage = styled.div<{ image: string }>`
  width: 50%;
  height: 450px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 200px; /* Ajusta el tamaño de la imagen */
    height: 200px; 
    border-radius: 50%; /* Hace la imagen circular */
    margin-bottom: 20px 0; /* Espaciado con el texto */
  }
  @media (max-width: 350px) {
  display: none
  }
`;

const TextContainer = styled.div`
  width: 45%;
  text-align: center;
   @media (max-width: 768px) {
   font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
   @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 10px;
  }
`;

const SectionText = styled.p`
  font-size: 1.5rem;
  color: #5a5a5a;
  font-style: italic;
  margin-top: 15px 0px;
`;

const ConfirmationSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  position: relative;
   @media (max-width: 450px) {
      font-size: 1rem;
      border-radius: 50px;
  
  }
`;

const ImageContainerConfirmation = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${ConfirmationImage});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  position: absolute;
    @media (max-width: 450px) {
      font-size: 1rem;
      border-radius: 100px;
  
  }
`;

const ConfirmationText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2.5rem;
  font-style: italic;
  padding: 2px;
  text-align: center;
   @media (max-width: 450px) {
      font-size: 2rem;
      border-radius: 100px;
  }
`;

function AboutWedding() {
  return (
    <Container>
      <ImageContainer>
        <Title>We're Getting Married!</Title>
      </ImageContainer>

      <div style={{ position: "relative", width: "100%", textAlign: "center", marginTop: "50px" }}>
        <Title>February 24, 2026</Title>
      </div>
     <div style={{  width: "100%", textAlign: "center", marginTop: "150px" }}>
      <Section
  id="location-section"
  title="Where will it be?"
  image={LugarImage}
  text={`We want you to be part of this episode of our history... which will be at
   San Martín de los Andes, Neuquen, Argentina.`}
  reverse={false}
/>
</div>
      <Section
        image={churchImage}
        title="The ceremony"
        text="The ceremony will be at 11:00 hr. at San Jose Church: Gral. Roca 811."
        reverse
      />
      <ConfirmationSection>
        <ImageContainerConfirmation />
        <ConfirmationText>
          <p>Please RSVP</p>
          <p>Trini: 6513826116</p>
          <p>Jeremiah: 2188311294</p>
        </ConfirmationText>
      </ConfirmationSection>
      <Section
        image={ArrayanImage}
        title="We will celebrate in Arrayan"
        text="Circuito Arrayan KM 4,5. San Martín de los Andes, Neuquen, Argentina."
      />
      <Section
        image={busesImage}
        title="We will put buses at your disposal"
        text="At 12hr from San Jose Church - Gral. Roca 811 - to the venue at Arrayan - Circuito Arrayan KM 4,5. At 21hr and 23hr from the venue at Arrayan to your hotel."
        reverse
      />
      <Section
        image={backgroundImagegift}
        title="And finally remember"
        text="The important thing is that you come with enthusiasm, joy, and the desire to have a good time. But if you want to give us a gift, here is our account number: 0000000000000000000000.  ~  ~ "
      />
    </Container>
  );
}

export default AboutWedding;
