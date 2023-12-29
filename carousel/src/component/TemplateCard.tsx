import React, { ReactElement, ReactNode, createElement } from "react";
import classes from "./templateCard.module.css";
import flattenChildren from "react-keyed-flatten-children";
import Card from "./Card";

type TemplateCardPropTypes = {
  children: ReactNode;
};

const TemplateCard = ({ children }: TemplateCardPropTypes) => {
  const childImgArray: ReactElement[] = [];
  const restChildArray: ReactElement[] = [];

  flattenChildren(children).forEach((child) => {
    if (React.isValidElement(child) && child.type === "img") {
      childImgArray.push(child);
    } else if (React.isValidElement(child)) {
      restChildArray.push(child);
    }
  });

  console.log(childImgArray);

  //img와 text가 함께 온다면 해당 img와 text를 flex로 정렬해주기

  console.log(children);
  const renderedImgTag = childImgArray[0].type;
  return (
    <Card>
      <>
        {createElement(renderedImgTag, {
          ...childImgArray[0].props,
          className: classes[renderedImgTag],
        })}
        {restChildArray}
      </>
    </Card>
  );
};

export default TemplateCard;
