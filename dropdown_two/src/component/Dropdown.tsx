import { createContext, useState, ReactNode, useContext } from "react";
import * as D from "../styles/Dropdown.style";
import DropdownButton from "./DropdownButton";
import DropdownItem from "./DropdownItem";

type DropdownProps = {
  children: ReactNode | ReactNode[];
};

type DropdownContextType = {
  isOpen: boolean;
  handleIsOpen: (value: React.SetStateAction<boolean>) => void;
  highlightedIndex: number;
  handleHighlightedIndex: (val: React.SetStateAction<number>) => void;
};
export const DropdownContext = createContext<DropdownContextType | null>(null);
export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsopen] = useState(false);
  const handleIsOpen = () => setIsopen((prev) => !prev);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const handleHighlightedIndex = (val: any) => setHighlightedIndex(val);

  const value = {
    isOpen,
    handleIsOpen,
    highlightedIndex,
    handleHighlightedIndex,
  };

  return (
    <DropdownContext.Provider value={value}>
      <D.Container>{children}</D.Container>
    </DropdownContext.Provider>
  );
};
