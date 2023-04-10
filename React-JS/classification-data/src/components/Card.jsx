const Card = ({ product, price, category, size }) => {
  return (
    <div className="border w-[200px] border-black flex flex-col items-center justify-center my-2">
      <h1>{product}</h1>
      <h3>{price}</h3>
      <p>{category}</p>
      <p>{size}</p>
    </div>
  );
};
export default Card;
