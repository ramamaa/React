export const Nav = () => {
  return (
    <div className="flex justify-between mx-8 my-4">
      <h4 className="font-bold">Simple Blog</h4>
      <div className="flex gap-2.5">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};
