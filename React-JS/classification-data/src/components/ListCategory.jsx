const ListCategory = ({
  sizeHandler,
  priceHandler,
  furnitures,
  setFurnitures,
  data,
}) => {
  return (
    <div className="flex justify-between">
      <ul className="flex [&>*]:m-2 ">
        <li>
          <button onClick={sizeHandler.bind(this, "Small")}>Small</button>
        </li>
        <li>
          <button onClick={sizeHandler.bind(this, "Medium")}>Medium</button>
        </li>
        <li>
          <button onClick={sizeHandler.bind(this, "Big")}>Big</button>
        </li>
      </ul>
      <button
        onClick={() => {
          setFurnitures(data);
        }}
      >
        All
      </button>
      <ul className="flex [&>*]:m-2">
        <li>
          <button onClick={priceHandler.bind(this, "Murah")}>Murah</button>
        </li>
        <li>
          <button onClick={priceHandler.bind(this, "Menengah")}>
            Menengah
          </button>
        </li>
        <li>
          <button onClick={priceHandler.bind(this, "Mahal")}>Mahal</button>
        </li>
      </ul>
    </div>
  );
};
export default ListCategory;
