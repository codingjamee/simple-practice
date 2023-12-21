import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import * as D from "../styles/Dropdown.style";

type DropdownProps = {
  children: ReactNode | ReactNode[];
  onChange?: (val: string) => void;
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

export const Dropdown = ({ children, onChange }: DropdownProps) => {
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

  useEffect(() => {
    console.log("btnText is Changed!");
    onChange && onChange(btnText);
  }, [btnText]);

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
      </D.Container>
      {children}
    </DropdownContext.Provider>
  );
};
