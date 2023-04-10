import { useState } from "react";
const JumlahPesanan = () => {
  const [jumlah, setJumlah] = useState(0);
  const jumlahHandler = (event) => {
    let newJumlah;
    if (event === "+") {
      newJumlah = jumlah + 1;
      setJumlah(newJumlah);
    } else {
      newJumlah = jumlah - 1;
      setJumlah(newJumlah);
    }
    if (jumlah < 0) {
      newJumlah = 0;
      setJumlah(newJumlah);
    }
    console.log(jumlah);
    console.log(event);
  };
  return (
    <div>
      <button
        onClick={() => {
          jumlahHandler("-");
        }}
      >
        -
      </button>
      <span>{jumlah}</span>
      <button onClick={jumlahHandler.bind(this, "+")}>+</button>
    </div>
  );
};
export default JumlahPesanan;
