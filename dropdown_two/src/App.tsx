import DropdownButton from "./component/DropdownButton";
import { Dropdown } from "./component/Dropdown";
import DropdownItem from "./component/DropdownItem";

function App() {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <Dropdown onChange={handleChange}>
      <DropdownButton>d-오예!@</DropdownButton>
      <DropdownItem id="id-1">aasasd</DropdownItem>
      <DropdownItem id="id-2">bbbadsf</DropdownItem>
      <DropdownItem id="id-3">ewefw</DropdownItem>
      <DropdownItem id="id-4">dfsafwefg</DropdownItem>
    </Dropdown>
  );
}

export default App;
