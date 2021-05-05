import styled from "styled-components";

export const ContainerHero = styled.div`
  position: relative;
  width: 100%;
  max-height: 325px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const ImageHero = styled.img`
  width: 100%;
  height: auto;
`;

export const TitleHero = styled.h1`
  color: white;
  font-size: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 5%;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
