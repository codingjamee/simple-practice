import { Options } from "../styles/Dropdown.style";
import { useDropdownContext } from "./Dropdown";

type DropdownItemProps = {
  children?: string;
  id: string;
  value: string;
};

const DropdownItem = ({ children, id }: DropdownItemProps) => {
  const { isOpen } = useDropdownContext();

  return (
    <>
      {isOpen && (
        <Options isOpen={isOpen} id={id}>
          {children}
        </Options>
      )}
    </>
  );
};

export default DropdownItem;

//문제점 height 값이 0임
//다른 컴포넌트의 위치를 가져오지 못함(?)
//서로 형제라는 것을 파악하지 못함 ???
