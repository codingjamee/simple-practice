import React from "react";
import classNames from "classnames";

//나중에 에러 수정함
import styles from "./style.module.scss";
import { noop } from "./utils/etc";

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
  children?: React.ReactNode;
  options?: DropdownOptions[];
  theme?: DropdownType;
  onChange?: () => void;
}

// Dropdown은 wrapper의 역할
// DropdownButton을 보여주고 (이걸 어떻게 해야할까?) (무조건 기본값 주면 될듯?)
// DropdownItem 보여주고 (children으로 감싸면 됨)
// item이 여러개 있으면 너무 길면 y scroll값을 주고 (style??)
// onChangeItemId??? 오름차순, 내림차순 (기능)
const Dropdown = ({
  children,
  theme = DropdownType.DEFAULT,
  onChange = noop,
}: DropdownProps) => {
  const classNameProps = classNames(styles.default, styles[theme]);

  //특정 차일드 컴포넌트가 있는지 여부를 알기 위해
  //ref활용
  //그 컴포넌트가 있으면 그 컴포넌트의 속성에 접근해 처음 보여줌
  //DropdownButton
  //ref는 해당 component가 마운트될 때 물리 DOM객체의 값이 됨

  return (
    <>
      <span className={styles.value}>
        {multiple
          ? value.map((val) => (
              <button
                key={`btn-${val.value}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onClickLi(val);
                }}
              >
                {val.label}
                &times;
              </button>
            ))
          : value?.label}
      </span>
      <div className={classNameProps}>{children}</div>
    </>
  );
};

export default Dropdown;
