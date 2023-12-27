import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import * as D from "../styles/Dropdown.style";

type DropdownProps = {
  children: ReactNode | ReactNode[];
  onChange?: (val: string) => void;
};

export type higlightedIndexType = number | string;

type DropdownContextType = {
  isOpen: boolean;
  handleIsOpen: (val: React.SetStateAction<boolean>) => void;
  highlightedindex: higlightedIndexType;
  handleHighlightedIndex: (
    val: React.SetStateAction<higlightedIndexType>
  ) => void;
  handleBtnText: (val: React.SetStateAction<string>) => void;
};
const DropdownContext = createContext<DropdownContextType | null>(null);
export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export const Dropdown = ({ children, onChange }: DropdownProps) => {
  const [isOpen, setIsopen] = useState(false);
  const handleIsOpen = useCallback(() => setIsopen((prev) => !prev), []);
  const [highlightedindex, setHighlightedIndex] = useState(0);
  const handleHighlightedIndex = useCallback(
    (val: any) => setHighlightedIndex(val),
    []
  );
  const [btnText, setBtnText] = useState("");
  const handleBtnText = useCallback((val: any) => setBtnText(val), []);

  const value = useMemo(
    () => ({
      isOpen,
      handleIsOpen,
      highlightedindex,
      handleHighlightedIndex,
      handleBtnText,
    }),
    [
      isOpen,
      handleIsOpen,
      highlightedindex,
      handleHighlightedIndex,
      handleBtnText,
    ]
  );

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
