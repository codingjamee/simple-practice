import React from "react";
import Carousel from "./component/Carousel";
import CarouselItem from "./component/CarouselItem";
import TemplateCard from "./component/TemplateCard";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";

const App = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <TemplateCard>
            <img src={a} alt="a-img" />
            <img src={b} alt="b-img" />
            <img src={c} alt="c-img" />
            <p>one</p>
          </TemplateCard>
        </CarouselItem>
        <CarouselItem>
          <TemplateCard>
            <img src={b} alt="b-img" />
            <img src={a} alt="a-img" />
            <img src={c} alt="c-img" />
            <p>two</p>
          </TemplateCard>
        </CarouselItem>
        <CarouselItem>
          <TemplateCard>
            <img src={c} alt="c-img" />
            <img src={a} alt="a-img" />
            <img src={b} alt="b-img" />
            <p>three</p>
          </TemplateCard>
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default App;
