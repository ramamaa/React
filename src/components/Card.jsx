export const Card = ({ image, title, desc, date }) => {
  return (
    <div>
      <img src={image} alt=""></img>
      <date>{date}</date>
      <h5>{title}</h5>
      <p>{desc}</p>
      <button>Read More</button>
    </div>
  );
};
