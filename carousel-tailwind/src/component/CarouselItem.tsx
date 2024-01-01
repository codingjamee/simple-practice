import React, { ReactNode } from "react";

type CarouselItemPropsType = {
  children?: ReactNode;
};

const CarouselItem = (props: CarouselItemPropsType) => {
  return <div style={{ width: "100%" }}>{props.children}</div>;
};

export default CarouselItem;
