import React from "react";
import classNames from "classnames";

//나중에 에러 수정함
import styles from "./style.module.scss";

export enum DropdownType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface DropdownOptions {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  children: React.ReactNode;
  options: DropdownOptions[];
  theme?: DropdownType;
}

//dropdown은 wrapper의 역할
// DropdownButton을 보여주고 (이걸 어떻게 해야할까?) (무조건 기본값 주면 될듯?)
// DropdownItem 보여주고 (children으로 감싸면 됨)
// item이 여러개 있으면 너무 길면 y scroll값을 주고 (style??)
// onChangeItemId??? 오름차순, 내림차순 (기능)
const Dropdown = ({
  children,
  theme = DropdownType.DEFAULT,
}: DropdownProps) => {
  const classNameProps = classNames(styles.default, styles[theme]);
  return <div className={classNameProps}>{children}</div>;
};

export default Dropdown;
