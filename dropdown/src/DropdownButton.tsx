import { useRef } from "react";

export type DropdownButtonProps = {
  text: string;
};
const DropdownButton = ({ text }: DropdownButtonProps) => {
  const buttonRef = useRef(null);
  //부모 컴포넌트에서 해당 ref값에 접근하려면?
  //이걸 클릭하면 형제컴포넌트들 엘리먼트가 열리고 닫겨야 함

  const onClickHandler = () => {
    console.log("click Handler 작동 ");
  };

  return (
    <div ref={buttonRef} onClick={onClickHandler}>
      {text}
    </div>
  );
};

export default DropdownButton;
