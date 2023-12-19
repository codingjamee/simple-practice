import { useState } from "react";
import styles from "./style.module.scss";

const DropdownItem = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(0);

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsFocused(false)}
      onClick={() => setIsFocused((prev) => !prev)}
    >
      <button className={styles["close-btn"]} onClick={(e) => onClear(e)}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isFocused ? styles.show : ""}`}>
        {options.map((option, idx) => (
          <li
            key={`option-${option.value}`}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${highlightedIdx === idx ? styles.highlighted : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onClickLi(option);
            }}
            onMouseEnter={(e) => {
              e.stopPropagation();
              setHighlightedIdx(idx);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
