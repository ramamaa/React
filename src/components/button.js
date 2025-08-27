export const Button = ({ className, children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-md " +
        className +
        `${isActive ? " bg-[#3C82F6]" : " bg-[#F3F4F6]"}`
      }
    >
      {children}
    </button>
  );
};
