import { useCallback, useRef, useState } from "react";

interface UseControlledArgs<T = any> {
  controlledValue?: T;
  defaultValue: T;
}

type UseControlledReturn<T = any> = [
  T,
  (value: T | React.SetStateAction<T>) => void
];

//매개변수 : {controlledValue, defaultValue}
export const useControlled = <T=any>( // prettier-ignore
  args: UseControlledArgs<T>
): UseControlledReturn => {
  const { controlledValue, defaultValue } = args;

  //controlledValue가 넘어오면 isControlled
  const { current: isControlled } = useRef(controlledValue !== undefined);

  const [state, setState] = useState<T>(defaultValue);

  //isControlled면 controlledValue, 아니면 defaultValue를
  const value = isControlled ? controlledValue : state;
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (newState) => {
      !isControlled && setState(newState);
    },
    []
  );

  return [value, setValue];
};
//value와 setValue를 내놓음
//value는 controlledValue가 오면 그것을, 아니면 defaultValue를 내놓음
//setValue는 controlled상태가 아닐때 state를 새로운 값을 받아서 변경해줌
