import DropdownButton from "./component/DropdownButton";
import { Dropdown } from "./component/Dropdown";
import DropdownItem from "./component/DropdownItem";

function App() {
  // const onChange = () => {};
  //1. value가 존재하는 경우 value를..?(링크로?)
  //2. children에 string을 넣어 유저가 선택하게 하는 경우
  //App에서 어떻게 받아오게 하지??
  //ref활용...?!
  return (
    <Dropdown>
      <DropdownButton>d-오예!@</DropdownButton>
      <DropdownItem id="id-1">aasasd</DropdownItem>
      <DropdownItem id="id-2">bbbadsf</DropdownItem>
      <DropdownItem id="id-3">ewefw</DropdownItem>
      <DropdownItem id="id-4">dfsafwefg</DropdownItem>
    </Dropdown>
  );
}

export default App;
