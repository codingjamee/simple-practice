import { createContext } from "vm";

//store를 하게 되면 Group으로 묶어야 함
//따로 써야 함
type DropdownStoreProps = {
  children: React.ReactNode;
};

export const DropdownStoreContext = createContext({});

const DropdownStore = ({ children }: DropdownStoreProps) => {
  const ctx = createContext();
  return (
    <DropdownStoreContext.Provider ctx={ctx}>
      {children}
    </DropdownStoreContext.Provider>
  );
};

export default DropdownStore;
