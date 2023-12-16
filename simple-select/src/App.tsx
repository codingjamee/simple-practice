import { useState } from "react";
import Select, { SelectOptions } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "Sixth", value: 6 },
];

const App = () => {
  const [value1, setValue1] = useState<SelectOptions[] | []>([]);
  const [value2, setValue2] = useState<SelectOptions | undefined>(options[0]);
  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div>멀티플 셀렉트바</div>
        <Select
          options={options}
          value={value1}
          onChange={(e) => setValue1(e)}
          multiple
        />
        <div>싱글 셀렉트바</div>
        <Select
          options={options}
          value={value2}
          onChange={(e) => setValue2(e)}
        />
      </div>
    </>
  );
};
export default App;
