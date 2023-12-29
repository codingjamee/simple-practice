import React, { ReactElement } from "react";
import classes from "./card.module.css";

type CardPropTypes = {
  children: ReactElement;
};

//Card컴포넌트의 children은 ReactElement 될 수 없나?
//children은 createElement로 만든 ReactElement
const Card = ({ children }: CardPropTypes) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;

//card의 style
