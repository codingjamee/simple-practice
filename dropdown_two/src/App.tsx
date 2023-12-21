import DropdownButton from "./component/DropdownButton";
import { Dropdown } from "./component/Dropdown";
import DropdownItem from "./component/DropdownItem";

function App() {
  // const onChange = () => {};
  return (
    <Dropdown>
      <DropdownButton>d-오예!@</DropdownButton>
      <DropdownItem id="id-1" value="1">
        aasasd
      </DropdownItem>
      <DropdownItem id="id-2" value="2">
        bbbadsf
      </DropdownItem>
      <DropdownItem id="id-3" value="3">
        ewefw
      </DropdownItem>
      <DropdownItem id="id-4" value="4">
        dfsafwefg
      </DropdownItem>
      {/* <DropdownItem></DropdownItem> */}
    </Dropdown>
  );
}

export default App;
