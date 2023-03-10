import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function CategoryDropdown({width, height,category}) {
  const [selected, setSelected] = React.useState(new Set([category]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="orange" 
      css={{ tt: "capitalize", width:width, height:height, background:"white", borderColor:"Orange", borderRadius:"3px", fontWeight:"bold"}}
       bordered borderWeight="light">
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="white"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Panino">Panino</Dropdown.Item>
        <Dropdown.Item key="Piadina">Piadina</Dropdown.Item>
        <Dropdown.Item key="Snack">Snack</Dropdown.Item>
        <Dropdown.Item key="Dolce">Dolce</Dropdown.Item>
        <Dropdown.Item key="Bibita">Bibita</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}