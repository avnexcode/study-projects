import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, statusChecked, setStatusChecked }) => {
  return (
    <>
      <section className="w-full flex flex-col items-center h-full">
        <div className="flex justify-center sm:justify-start w-full p-3">
          <ul className="flex flex-row flex-wrap [&>*]:mx-1 [&>*]:my-1">
            <Todo
              todos={todos}
              setTodos={setTodos}
              statusChecked={statusChecked}
              setStatusChecked={setStatusChecked}
            />
          </ul>
        </div>
      </section>
    </>
  );
};
export default TodoList;
