import { useState } from "react";
import Select, { SelectOptions } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "sixth", value: 6 },
];

const App = () => {
  const [value, setValue] = useState<SelectOptions | undefined>(options[0]);
  return (
    <Select options={options} value={value} onChange={(e) => setValue(e)} />
  );
};
export default App;
