import React, { ReactElement } from "react";
import classes from "./card.module.css";

type CardPropTypes = {
  children: ReactElement;
};

const Card = ({ children }: CardPropTypes) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
