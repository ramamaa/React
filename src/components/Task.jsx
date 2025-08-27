"use client";
export const Task = (props) => {
  return (
    <div className="w-[345px] h-[62px] p-4 rounded-md bg-[#F3F4F6] flex justify-between items-center pt-5">
      <input onChange={props.onChange} type="checkbox" />
      <p className={props.isCompleted ? "line-through" : ""}>
        {props.taskName}
      </p>
      {props.isCompleted ? (
        <button className="bg-[#FEF2F2] text-red-500 rounded-xl p-1">
          Delete
        </button>
      ) : (
        <button className="bg-[#FEF2F2] text-red-500 rounded-xl p-1">
          Completed
        </button>
      )}
    </div>
  );
};
