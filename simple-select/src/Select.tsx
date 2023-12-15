import { useEffect, useState } from "react";
import styles from "./select.module.css";

//구현해야하는 기능
// 1. 토글바 클릭시 나타나게 blur시 사라지게 (완료)
// 2. li를 클릭하면 토글바에 나타나게 고정 , 스타일 변경 (완료)
// 3. li위에 호버시 스타일 변경(.option.highlighted)
// 4. 멀티플 options 주기
// 5. li에서 다시 클릭시 삭제 , 토글바에서도 클릭시 삭제 기능 구현

export type SelectOptions = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(0);

  // div 클릭하면 .show추가
  // blur가 되면 ul 태그의 .show클래스를 삭제
  const onClickLi = (opt: SelectOptions) => {
    onChange(opt);
    setIsFocused(false);
  };

  //onClear의 Event타입???
  const onClear = (e) => {
    e.stopPropagation();
    onChange(undefined);
    setIsFocused(false);
  };

  //option이 selected된 것인지 확인하는 함수
  const isOptionSelected = (option: SelectOptions) => {
    return option === value;
  };

  useEffect(() => {
    console.log({ isFocused });
  }, [isFocused]);

  useEffect(() => {
    console.log({ value });
  }, [value]);

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsFocused(false)}
      onClick={() => setIsFocused(true)}
    >
      <span className={styles.value}>{value?.label}</span>
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

export default Select;

//에러 정리
//1. onBlur에 ()=>를 하지 않으면 Type 'void' is not assignable to type 'FocusEventHandler<HTMLDivElement> | undefined'.ts(2322)
//2. {/* <span className={styles.value}>{value.label}</span> */}했더니
// 'value' is possibly 'undefined' =====>  value?.label로 변경
//3. li를 클릭시 e.stopPropagation을 하지 않으면 isFocused가 변경 되지 않음
//부모로 이벤트가 전파가 되므로       onClick={() => setIsFocused(true)} 이 발동된것.. .
//4. event발동 시 onClick={(e) => onClear(e)}의 event type은? 어떤걸 넣어도 에러,...
