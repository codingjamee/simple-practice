import React from "react";
import Carousel from "./component/Carousel";
import CarouselItem from "./component/CarouselItem";
import TemplateCard from "./component/TemplateCard";

const App = () => {
  return (
    <Carousel>
      <CarouselItem>
        <TemplateCard />
      </CarouselItem>
      <CarouselItem>
        <TemplateCard />
      </CarouselItem>
      <CarouselItem>
        <TemplateCard />
      </CarouselItem>
    </Carousel>
  );
};

export default App;
