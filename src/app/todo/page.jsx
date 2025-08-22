const Todo = () => {
  return (
    <div>
      <div className="mt-[140px] flex justify-center">
        <div className="w-[377px] py-6 px-4 shadow-xl">
          <h1 className="text-center font-extrabold text-2xl">To-Do-list</h1>{" "}
          <div className="flex gap-1.5">
            <input
              className="w-70 h-10 py-2 px-4 flex items-start rounded-md border-solid border-[1px] border-[#E4E4E7]"
              type="text"
              placeholder="Add new task.."
            ></input>{" "}
            <button className="bg-[#3C82F6] rounded-md py-2 px-4 text-white ">
              Add
            </button>
          </div>
        </div>
      </div>
      <body oncontextmenu="return false;"></body>
    </div>
  );
};

export default Todo;
