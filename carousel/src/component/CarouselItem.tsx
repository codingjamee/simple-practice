import React, { ReactNode } from "react";

type CarouselItemPropsType = {
  children?: ReactNode;
};

const CarouselItem = (props: CarouselItemPropsType) => {
  //현재 보이고 있는 아이템이 되려면 selected를 viewed로?
  // {flattenChildren(props.children).map(child => {
  //   if (child.type === MenuItem) {
  //     return React.cloneElement(child, {
  //       selected: child.key === selectedKey,
  //       onClick: () => setSelectedKey(child.key)
  //   });
  // }

  return <div>{props.children}</div>;
};

export default CarouselItem;
