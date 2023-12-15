import { useState } from "react";
import styles from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string | number | boolean;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions | undefined;
  onChange: (value: SelectOptions | undefined) => void;
};

//onBlur에 ()=>를 하지 않으면 Type 'void' is not assignable to type 'FocusEventHandler<HTMLDivElement> | undefined'.ts(2322)
//
const Select = ({ options, value, onChange }: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // div 클릭하면 .show추가
  // blur가 되면 ul 태그의 .show클래스를 삭제
  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsFocused(false)}
      onClick={() => setIsFocused(true)}
    >
      <span className={styles.value}>Value</span>
      <button className={styles["close-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isFocused ? styles.show : ""}`}>
        {options.map((option) => (
          <li key={`option-${option.value}`} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
