import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import React, { useState } from "react";

function App() {
  const [mapel, setMapel] = useState();
  const [dateCollected, setDateCollected] = useState();
  const [detail, setDetail] = useState();
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [statusChecked, setStatusChecked] = useState(false);
  const runn = () => {
    alert("hooh tenan");
  };

  return (
    <>
      <section className="w-full min-h-screen max-h-max bg-slate-800 flex flex-col">
        <Navigation todos={todos} />
        <Routes>
          <Route
            path="/addtodo"
            element={
              <AddTodo
                mapel={mapel}
                setMapel={setMapel}
                dateCollected={dateCollected}
                setDateCollected={setDateCollected}
                detail={detail}
                setDetail={setDetail}
                todos={todos}
                setTodos={setTodos}
                showModal={showModal}
                setShowModal={setShowModal}
                statusChecked={statusChecked}
                setStatusChecked={setStatusChecked}
                run={runn}
              />
            }
          />
          <Route
            path="/todolist"
            element={
              <TodoList
                todos={todos}
                setTodos={setTodos}
                statusChecked={statusChecked}
                setStatusChecked={setStatusChecked}
              />
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
