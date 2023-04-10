import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);

  const countNumber = (even) => {
    const newCount = parseInt(count);
    if (count !== null) {
      if (even === "+") {
        setCount(newCount + 1);
      } else {
        setCount(newCount - 1);
      }
    } else {
      setCount(0);
    }
  };

  return (
    <section>
      <h1>Hello Home Page</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="mt-10">
          <button onClick={countNumber.bind(this, "-")}>-</button>
          <input
            className="mx-1"
            type="text"
            autoComplete="off"
            required
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button onClick={countNumber.bind(this, "+")}>+</button>
        </div>
        <div className="mt-10">
          <button
            onClick={() => {
              import("../module/Module").then((module) => {
                module.showData(count);
              });
            }}
          >
            Show Data
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
