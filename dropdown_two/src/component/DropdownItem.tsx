import { useCallback } from "react";
import { Options } from "../styles/Dropdown.style";
import { useDropdownContext } from "./Dropdown";

type DropdownItemProps = {
  children?: string;
  id: number | string;
  value?: string;
};

const DropdownItem = ({ children, id, value }: DropdownItemProps) => {
  const {
    isOpen,
    handleIsOpen,
    handleBtnText,
    handleHighlightedIndex,
    highlightedindex,
  } = useDropdownContext();
  const setText = useCallback(() => {
    if (value) {
      handleBtnText(value);
    }
    if (typeof children === "string") {
      handleBtnText(children);
    }
    handleHighlightedIndex(id);
    return handleIsOpen(false);
  }, [children, id, value]);

  return (
    <>
      {isOpen && (
        <Options
          isOpen={isOpen}
          highlightedindex={highlightedindex === id}
          onClick={setText}
        >
          {children}
        </Options>
      )}
    </>
  );
};

export default DropdownItem;
