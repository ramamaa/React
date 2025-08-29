"use client";
import { Button, Task } from "@/components";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  function handleOnInput(event) {
    setValue(event.target.value);
  }
  function handleOnClick() {
    setArr([...arr, { isCompleted: false, title: value, id: uuidv4() }]);
  }
  function handleOnCheck(event, index) {
    const newArr = arr.map((el, id) => {
      return el.id === id ? { ...el, isCompleted: event.target.checked } : el;
    });
    setArr(newArr);
    console.log(newArr);
  }
  return (
    <div>
      <div className="mt-[140px] flex justify-center">
        <div className="w-[377px] py-6 px-4 shadow-xl">
          <h1 className="text-center font-extrabold text-2xl">To-Do-list</h1>{" "}
          <div className="flex gap-1.5">
            <input
              onChange={handleOnInput}
              className="w-70 h-10 py-2 px-4 flex items-start rounded-md border-solid border-[1px] border-[#E4E4E7]"
              type="text"
              placeholder="Add new task.."
            ></input>{" "}
            <Button
              onClick={handleOnClick}
              isActive={true}
              className={"h-10 py-2 px-4 text-white text-center "}
            >
              Add
            </Button>
          </div>
          <div className="flex gap-1.5 pt-5">
            <Button
              onClick={() => handleFilterStatus("all")}
              isActive={false}
              className={
                "py-1 px-3 h-8 " +
                `${filterStatus === "all" ? "!bg-[#3C82F6] text-white " : ""}`
              }
            >
              All
            </Button>
            <Button
              onClick={() => handleFilterStatus("Active")}
              isActive={false}
              className={
                "h-8 py1- px-3 " +
                `${
                  filterStatus === "Active" ? "!bg-[#3C82F6] text-white " : ""
                }`
              }
            >
              Active
            </Button>
            <Button
              onClick={() => handleFilterStatus("Completed")}
              isActive={false}
              className={
                "h-8 py-1 px-3 " +
                `${
                  filterStatus === "Completed"
                    ? "!bg-[#3C82F6] text-white "
                    : ""
                }`
              }
            >
              Completed
            </Button>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            {arr.map((el, id) => {
              return (
                <Task
                  key={id}
                  taskName={el.title}
                  isCompleted={el.isCompleted}
                  onChange={handleOnCheck}
                ></Task>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
