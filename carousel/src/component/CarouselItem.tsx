import React, { ReactNode } from "react";

type CarouselItemPropsType = {
  children?: ReactNode;
};

const CarouselItem = (props: CarouselItemPropsType) => {
  return <div>{props.children}</div>;
};

export default CarouselItem;
