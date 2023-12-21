import { createContext, useState, ReactNode, useContext } from "react";
import * as D from "../styles/Dropdown.style";

type DropdownProps = {
  children: ReactNode | ReactNode[];
};

type DropdownContextType = {
  isOpen: boolean;
  handleIsOpen: (val: React.SetStateAction<boolean>) => void;
  highlightedIndex: number;
  handleHighlightedIndex: (val: React.SetStateAction<number>) => void;
  handleBtnText: (val: React.SetStateAction<string>) => void;
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
  const [btnText, setBtnText] = useState("");
  const handleBtnText = (val: any) => setBtnText(val);

  const value = {
    isOpen,
    handleIsOpen,
    highlightedIndex,
    handleHighlightedIndex,
    handleBtnText,
  };

  //btnText는 맨 위에 놓고,
  //나머지는 밑에 옵션즈로 보여줌!
  return (
    <DropdownContext.Provider value={value}>
      <D.Container>
        <D.Value
          onClick={() => {
            setIsopen((prev) => {
              console.log("handler clicked!");
              return !prev;
            });
          }}
        >
          {btnText}
        </D.Value>
        <D.Close
          onClick={() => {
            setIsopen(() => {
              console.log("handler clicked!");
              return false;
            });
          }}
        >
          &times;
        </D.Close>
        <D.Divider />
        <D.Caret
          onClick={() => {
            setIsopen((prev) => {
              console.log("handler clicked!");
              return !prev;
            });
          }}
        />
        {children}
      </D.Container>
    </DropdownContext.Provider>
  );
};
