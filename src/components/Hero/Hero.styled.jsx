import styled from "styled-components";

export const ContainerHero = styled.div`
  position: relative;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
`;

export const ImageHero = styled.img`
  width: 100%;
  display: block;
`;

export const TitleHero = styled.h1`
  color: white;
  font-size: 2.5rem;
  position: absolute;
  bottom: 0.5rem;
  left: 5%;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
