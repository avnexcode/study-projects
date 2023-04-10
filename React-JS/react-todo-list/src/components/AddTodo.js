import React from "react";

const AddTodo = ({
  mapel,
  setMapel,
  dateCollected,
  setDateCollected,
  detail,
  setDetail,
  todos,
  setTodos,
  showModal,
  setShowModal,
  statusChecked,
  setStatusChecked,
  runn,
}) => {
  function generatePassword() {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "1234567890";
    const symbol = "!@#$%&*~_-";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = "";
    for (let leng = 0; leng < 10; leng++) {
      generator += data[~~(Math.random() * data.length)];
    }
    return generator;
  }

  const dateNow = () => {
    let date = new Date();
    let beforeMonth = "";
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month < 9) {
      beforeMonth += "0";
    }
    if (month >= 9) {
      beforeMonth += "";
    }

    const getDate = `${year}-${beforeMonth}${month + 1}-${day}`;
    return getDate;
  };

  function getDataHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: generatePassword(),
        status: false,
        mapel,
        dateGiven: dateNow(),
        dateCollected,
        detail,
      },
    ]);
    setShowModal(false);
  }
  return (
    <>
      <section className="w-full flex justify-center items-center h-full">
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="mb-4 text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-col text-center sm:block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Tambahkan Tugasmu
            </span>{" "}
            <span>Disini</span>
          </h1>
          <button
            type="button"
            className="w-max sm:p-10 mr-2 mb-2 text-6xl md:text-7xl font-medium bg-transparent text-slate-500 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:border-gray-600 hover:bg-transparent"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
        </div>
        {showModal && (
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="bg-slate-400 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={() => {
                    setShowModal(false);
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
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Tambahkan Tugasmu Disini
                  </h3>
                  <form
                    className="space-y-6"
                    action="#"
                    onSubmit={getDataHandler}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Mapel :
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="tugas"
                        autoComplete="off"
                        required
                        value={todos.mapel}
                        onChange={(event) => {
                          setMapel(event.target.value);
                        }}
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="date-given"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Tanggal Diterima :
                      </label>
                      <input
                        type="date"
                        name="date-given"
                        id="date-given"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="tugas"
                        autoComplete="off"
                        required
                        value={todos.dateGiven}
                        onChange={(event) => {
                          setDateGiven(event.target.value);
                        }}
                      />
                    </div> */}
                    <div>
                      <label
                        htmlFor="date-collected"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Tanggal Pengumpulan :
                      </label>
                      <input
                        type="date"
                        name="date-collected"
                        id="date-collected"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-auto"
                        placeholder="tugas"
                        autoComplete="off"
                        required
                        value={todos.dateCollected}
                        onChange={(event) => {
                          setDateCollected(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="datail-todo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Detail Tugas :
                      </label>
                      <input
                        type="type"
                        name="detal-todo"
                        id="detal-todo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="tugas"
                        autoComplete="off"
                        required
                        value={todos.detail}
                        onChange={(event) => {
                          setDetail(event.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Tambahkan Tugas
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default AddTodo;
