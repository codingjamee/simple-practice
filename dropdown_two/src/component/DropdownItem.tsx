import { Options } from "../styles/Dropdown.style";
import { useDropdownContext } from "./Dropdown";

type DropdownItemProps = {
  children?: string;
  id: string;
  value?: string;
};

const DropdownItem = ({ children, id, value }: DropdownItemProps) => {
  const { isOpen, handleIsOpen, handleBtnText } = useDropdownContext();
  const setText = () => {
    if (value) {
      handleBtnText(value);
      return handleIsOpen(false);
    }
    if (typeof children === "string") {
      handleBtnText(children);
      return handleIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Options isOpen={isOpen} id={id} onClick={setText}>
          {children}
        </Options>
      )}
    </>
  );
};

export default DropdownItem;
