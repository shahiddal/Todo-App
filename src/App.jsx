import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  //  Fix for overwrite issue
  const isFirstLoad = useRef(true);

  //  Load todos
  useEffect(() => {
    try {
      let data = JSON.parse(localStorage.getItem("todos"));
      if (data) setTodos(data);
    } catch {
      setTodos([]);
    }
  }, []);

  //  Save todos (skip first render)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!todo.trim()) return;

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    let edit = todos.find((i) => i.id === id);
    setTodo(edit?.todo || "");

    let newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
  };

  const handleDelete = (e, id) => {
    if (!confirm("Are you sure you want to delete this todo?")) return;

    let newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handlecheckbox = (e) => {
    let id = e.target.name;

    let newtodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
    );

    setTodos(newtodos);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />
      <div className="main max-h-100vh bg-slate-400 py-3 px-5 flex flex-col items-center">
        <div>
          <h1 className="font-bold text-center text-xl bg-violet-50 rounded-lg p-3   text-violet-800">
            iTask - Manage your todos at one place
          </h1>
        </div>

        <div
          className="container mx-auto my-5 p-5 rounded-xl bg-violet-100
       min-h-[80vh] w-[95%] md:w-1/2 shadow-lg"
        >
          {/* Add Todo */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Add a Todo</h2>

            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Enter your task..."
              className="w-full p-2 rounded-md border"
            />

            <button
              onClick={handleAdd}
              disabled={todo.trim().length <= 3}
              className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-4 py-2 rounded-xl
               disabled:bg-gray-400"
            >
              Add
            </button>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-2 my-4">
            <input
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            <span>Show Finished</span>
          </div>

          {/* Todos */}
          <h2 className="text-lg font-bold mb-2">Your Todos</h2>

          <div>
            {todos.length === 0 && (
              <div className="text-center text-gray-500">
                No Todos Available
              </div>
            )}

            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row w-full my-3 items-start md:items-center justify-between gap-3 bg-white p-3 rounded-lg shadow"
                  >
                    <div className="flex gap-3 items-center">
                      <input
                        onChange={handlecheckbox}
                        type="checkbox"
                        checked={item.isCompleted}
                        name={item.id}
                      />

                      <div
                        className={
                          item.isCompleted ? "line-through text-gray-500" : ""
                        }
                      >
                        {item.todo}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="bg-red-600 hover:bg-red-800 text-white p-2 rounded-lg"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
