import React, { useState } from "react";
const Todo = ({ todos, setTodos, setStatusChecked, statusChecked }) => {
  const [statusModal, setStatusModal] = useState(false);
  const [modalDetail, setModalDetail] = useState();

  function deleteHandler(item) {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== item.id;
    });
    setTodos(updateTodos);
  }
  function modalHandler(item) {
    const modal = todos.filter((todo) => {
      return todo.id === item.id;
    });
    setModalDetail(modal[0]);
    setStatusModal(true);
  }

  const checkboxHandler = (item) => {
    const itemIndex = todos.findIndex((todo) => {
      return todo.id === item.id;
    });
    const itemCheck = todos.filter((todo) => {
      return todo.id === item.id;
    });

    console.log(itemCheck, itemIndex);
  };
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todos, index) => {
          return (
            <li key={index}>
              <div
                className={`p-5 w-full sm:max-w-xs rounded-lg border ${
                  todos.status ? "border-red-500" : "border-green-500"
                } shadow-md bg-gray-800`}
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {todos.mapel}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {todos.dateCollected}
                </p>
                <div className="[&>*]:mx-1 flex items-center">
                  <button
                    type="button"
                    className={
                      todos.status
                        ? "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        : "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    }
                    onClick={checkboxHandler.bind(this, todos)}
                  >
                    {!todos.status ? (
                      <i class="fa-sharp fa-solid fa-check"></i>
                    ) : (
                      <i class="fa-solid fa-x"></i>
                    )}
                  </button>
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={deleteHandler.bind(this, todos)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={modalHandler.bind(this, todos)}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* button */}
              {statusModal && (
                <div
                  id="large-modal"
                  tabIndex="-1"
                  className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-[6.3rem] sm:top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full"
                >
                  <div className="absolute top-0 p-4  min-w-xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border border-white">
                      <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-500">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Tugas
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="large-modal"
                          onClick={() => {
                            setStatusModal(false);
                          }}
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="p-5 space-y-6">
                        <p className="text-base leading-relaxed text-blue-500">
                          Materi Pembelajaran : {modalDetail.mapel}
                        </p>
                        <p className="text-base leading-relaxed text-slate-300">
                          Tanngal Diberikan : {modalDetail.dateGiven}
                        </p>
                        <p className="text-base leading-relaxed text-red-500">
                          Tanngal Dikumpulkan : {modalDetail.dateCollected}
                        </p>
                        <p className="text-base leading-relaxed text-slate-300">
                          Penjelasan Tugas : {modalDetail.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })
      ) : (
        <div
          className="p-4 text-lg text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
          role="alert"
        >
          <span className="font-medium">Tidak ada tugas yang menantimu!</span>{" "}
          Selamat menikmati waktu luangmu.
        </div>
      )}
    </>
  );
};
export default Todo;
