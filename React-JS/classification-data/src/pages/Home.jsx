import Card from "../components/Card";
import { useState } from "react";
import { data } from "../data/data";
import ListCategory from "../components/ListCategory";
import JumlahPesanan from "../components/JumlahPesanan";
const Home = () => {
  const [furnitures, setFurnitures] = useState(data);

  const sizeHandler = (size) => {
    const dataSize = data.filter((item) => {
      return item.size === size;
    });
    setFurnitures(dataSize);
  };

  const priceHandler = (price) => {
    switch (price) {
      case "Murah":
        const itemMurah = data.filter((item) => {
          const prices = parseInt(item.price);
          return prices <= 75000;
        });
        setFurnitures(itemMurah);
        break;
      case "Menengah":
        const itemMenengah = data.filter((item) => {
          const prices = parseInt(item.price);
          return prices >= 75000 && prices <= 150000;
        });
        setFurnitures(itemMenengah);
        break;
      default:
        const itemMahal = data.filter((item) => {
          const prices = parseInt(item.price);
          return prices > 150000;
        });
        setFurnitures(itemMahal);
    }
  };
  return (
    <section>
      <JumlahPesanan />
      <div>
        <ListCategory
          sizeHandler={sizeHandler}
          priceHandler={priceHandler}
          furnitures={furnitures}
          setFurnitures={setFurnitures}
          data={data}
        />
      </div>
      <div className="flex flex-wrap justify-around p-4">
        {furnitures.length !== 0 ? (
          furnitures.map((item, index) => {
            return (
              <Card
                key={index}
                product={item.product}
                price={item.price}
                category={item.category}
                size={item.size}
              />
            );
          })
        ) : (
          <p>barang kosong</p>
        )}
      </div>
    </section>
  );
};
export default Home;
