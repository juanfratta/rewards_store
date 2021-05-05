import { ContainerHero, ImageHero, TitleHero } from "./Hero.styled";

import header from "../../images/ui/header-x2.png";

const Hero = () => {
  return (
    <ContainerHero>
      <ImageHero src={header} alt="reward-store-hero" />
      <TitleHero>Electronics</TitleHero>
    </ContainerHero>
  );
};

export default Hero;
