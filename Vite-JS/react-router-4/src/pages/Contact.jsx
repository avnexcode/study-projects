import { useLoaderData } from "react-router-dom";

export const dataFetcher = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  return data;
};

const Contact = () => {
  const data = useLoaderData();
  const dataGame = data.game_indices;
  console.log(dataGame);
  return (
    <section>
      <h1>Hello Contact Page</h1>
      <ul className="mt-10">
        {dataGame.map((item, index) => {
          return (
            <div key={index} className="border-4 border-rose-500 my-2 p-2">
              <li className="text-right text-2xl rounded ">{index + 1}</li>
              <li>Game index : {item.game_index}</li>
              <li>Game Name : {item.version.name}</li>
              <li>Game Url :{item.version.url}</li>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
export default Contact;
