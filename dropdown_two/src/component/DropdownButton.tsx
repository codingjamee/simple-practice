import { useEffect } from "react";
import * as D from "../styles/Dropdown.style";
import { useDropdownContext } from "./Dropdown";

type DropdownButtonProps = {
  children: string;
};

const DropdownButton = ({ children }: DropdownButtonProps) => {
  const { handleIsOpen, handleBtnText } = useDropdownContext();

  useEffect(() => {
    handleBtnText(children);
  }, []);

  return (
    <D.Button>
      <div
        onClick={() => {
          handleIsOpen((prev) => !prev);
        }}
      ></div>
    </D.Button>
  );
};

export default DropdownButton;
