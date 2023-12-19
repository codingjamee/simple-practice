import { useState } from "react";
import styles from "./select.module.css";

//구현해야하는 기능
// 1. 토글바 클릭시 나타나게 blur시 사라지게 (완료)
// 2. li를 클릭하면 토글바에 나타나게 고정 , 스타일 변경 (완료)
// 3. li위에 호버시 스타일 변경 (완료)
// 4. 멀티플 options 주기
// 5. li에서 다시 클릭시 삭제 , 토글바에서도 클릭시 삭제 기능 구현

//multipleSelectOption
//singleSelectOption

//onClickCapture 와 onClick 의 다른점
export type SelectOptions = {
  label: string;
  value: string | number;
};

type singleSelectOption = {
  multiple?: false;
  value: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

type multipleSelectOption = {
  multiple: true;
  value: SelectOptions[];
  onChange: (value: SelectOptions[] | undefined) => void;
};

//SelectProps를 두개로 나누기
//single일때와 multiple일때
type SelectProps = {
  options: SelectOptions[];
} & (multipleSelectOption | singleSelectOption);

//주는 props의 형태가 달라짐
//Multiple일때 value가 array, onChange의 value도 array
const Select = ({ multiple, options, value, onChange }: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(0);

  const onClickLi = (opt: SelectOptions) => {
    if (multiple) {
      //value에 option이 있을 때 객체인데 includes가 가능???
      if (value.includes(opt)) {
        //있다면 삭제
        onChange(value.filter((v) => v !== opt));
      } else {
        //없다면 추가!
        onChange([...value, opt]);
      }
    } else {
      if (opt !== value) {
        //같은 값일땐 로직 수행 x
        onChange(opt);
      }
    }
    setIsFocused(false);
  };

  //onClear의 Event타입???
  const onClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    multiple ? onChange([]) : onChange(undefined);
    setIsFocused(false);
  };

  const isOptionSelected = (option: SelectOptions) => {
    return multiple ? value.includes(option) : option === value;
  };

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsFocused(false)}
      onClick={() => setIsFocused((prev) => !prev)}
    >
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
//5. 처음 선택하지도 않았는데 First가 선택되어있는 현상
