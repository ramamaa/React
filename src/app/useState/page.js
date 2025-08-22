"use client";
import { useState } from "react";
const data = [
  { name: "Jinx", age: "19" },
  { name: "Vi", age: "24" },
  { name: "Ekko", age: "19" },
  { name: "Caitlyn", age: "24" },
];
const HookPage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(data[0].name);

  const nameChanger = () => {
    setCount(count + 1);
    setName(data[count].name);
  };

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <button className="rounded-md bg-blue-400 border border-solid">
          Товчыг {count} удаа дарлаа
        </button>
        <button
          onClick={nameChanger}
          className="rounded-md bg-blue-400 border border-solid"
        >
          Names:{name}
        </button>
      </div>
    </div>
  );
};
export default HookPage;
