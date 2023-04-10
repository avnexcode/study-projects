import React from "react";
import { Link } from "react-router-dom";
const Navigation = ({ todos }) => {
  return (
    <>
      <div className="bg-slate-700 flex flex-col sm:flex-row items-center justify-between p-3 border-b-2 border-slate-400 text-white">
        <h1 className="flex items-center text-4xl sm:text-5xl font-extrabold dark:text-white mb-4 sm:mb-0">
          Todo
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            {todos.length}
          </span>
        </h1>

        <ul className="flex items-center justify-around [&>*]:mx-3 [&>*]:text-xl [&>*]:">
          <li>
            <Link
              to="/addtodo"
              className="font-medium text-blue-500 hover:underline focus:text-blue-700 text-xl focus:text-lg"
            >
              Add Todo
            </Link>
          </li>
          <li>
            <Link
              to="/todolist"
              className="font-medium text-blue-500 hover:underline focus:text-blue-700 text-xl focus:text-lg"
            >
              Todo List
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
