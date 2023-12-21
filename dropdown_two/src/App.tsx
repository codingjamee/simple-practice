import DropdownButton from "./component/DropdownButton";
import { Dropdown } from "./component/Dropdown";
import DropdownItem from "./component/DropdownItem";

function App() {
  // const onChange = () => {};
  return (
    <Dropdown>
      <DropdownButton>d-button</DropdownButton>
      <DropdownItem id="id-1" value="1">
        aasasd
      </DropdownItem>
      <DropdownItem id="id-2" value="2"></DropdownItem>
      {/* <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem> */}
    </Dropdown>
  );
}

export default App;
