import { useDropdownContext } from "./Dropdown";

type DropdownItemProps = {
  children?: React.ReactNode;
  id: string;
  value: string;
};

const DropdownItem = ({ children }: DropdownItemProps) => {
  const { isOpen } = useDropdownContext();

  return <>{isOpen && <div>{children}</div>};</>;
};

export default DropdownItem;
