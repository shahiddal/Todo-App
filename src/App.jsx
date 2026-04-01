// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [showFinished, setShowFinished] = useState(true);

//   useEffect(() => {
//     let todoString = localStorage.getItem("todos");
//     if (todoString) {
//       let todos = JSON.parse(localStorage.getItem("todos"));
//       setTodos(todos);
//     }
//   }, []);

//   const saveTols = () => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//     // saveTols();
//   };

//   const handleAdd = () => {
//     setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//     setTodo("");
//     saveTols();
//   };

//   const handleEdit = (e, id) => {
//     let edit = todos.filter((i) => i.id === id);
//     setTodo(edit[0].todo);
//     let newtodos = todos.filter((item) => {
//       return item.id !== id;
//     });
//     setTodos(newtodos);
//     saveTols();
//   };

//   const handleDelete = (e, id) => {
//     let newtodos = todos.filter((item) => {
//       return item.id !== id;
//     });
//     // confirm("are you shore delete this todo");
//     setTodos(newtodos);
//     saveTols();
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handlecheckbox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex((item) => {
//       return item.id === id;
//     });
//     let newtodos = [...todos];
//     newtodos[index].isCompleted = !newtodos[index].isCompleted;
//     setTodos(newtodos);
//     saveTols();
//   };

//   const toggleFinished = (e) => {
//     setShowFinished(!showFinished);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto my-5 p-5  rounded-xl bg-violet-100 min-h-[80vh] w-1/2 ">
//         <h1 className="font-bold text-center text-xl">
//           iTask - Manage your todos at one place
//         </h1>
//         {/* add todo  */}
//         <div className="addTodo my-5 flex flex-col gap-4">
//           <h2 className="text-lg font-bold mb-2">add a Todo</h2>
//           <input
//             onChange={handleChange}
//             value={todo}
//             type="text"
//             className="w-full mb-3"
//           />

//           <button
//             onClick={handleAdd}
//             disabled={todo.length <= 3}
//             className="bg-violet-800  hover:bg-violet-950 text-white font-bold p-3 py-1 rounded-xl mx-2"
//           >
//             Add
//           </button>
//         </div>
//         <input
//           onChange={toggleFinished}
//           type="checkbox"
//           checked={showFinished}
//         />
//         {/* your todo  */}
//         Show Finished
//         <h2 className="text-lg font-bold my-4">Your Todos</h2>
//         <div className="todos">
//           {todos.length === 0 && (
//             <div className="m-5"> Todos is Not Defind </div>
//           )}
//           {todos.map((item) => {
//             return (
//               (showFinished || !item.isCompleted) && (
//                 <div
//                   key={item.id}
//                   className="todo flex w-1/3 my-3 items-center justify-between"
//                 >
//                   <div className="flex gap-5">
//                     <input
//                       onChange={handlecheckbox}
//                       type="checkbox"
//                       checked={item.isCompleted}
//                       name={item.id}
//                       id=""
//                     />
//                     <div className={item.isCompleted ? "line-through" : ""}>
//                       {item.todo}
//                     </div>
//                   </div>

//                   <div className="button flex h-full">
//                     <button
//                       onClick={(e) => {
//                         handleEdit(e, item.id);
//                       }}
//                       className="bg-violet-800 hover:bg-violet-950 text-white font-bold p-3 py-1 rounded-xl mx-2"
//                     >
//                       <FaEdit />
//                     </button>

//                     <button
//                       onClick={(e) => {
//                         handleDelete(e, item.id);
//                       }}
//                       className="bg-violet-800 hover:bg-violet-950 text-white font-bold p-3 py-1 rounded-xl mx-2"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 </div>
//               )
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [showFinished, setShowFinished] = useState(false);

//   // Load todos
//   useEffect(() => {
//     let todoString = localStorage.getItem("todos");
//     if (todoString) {
//       setTodos(JSON.parse(todoString));
//     }
//   }, []);

//   // Save todos automatically (FIX)
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAdd = () => {
//     if (!todo.trim()) return;

//     setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//     setTodo("");
//   };

//   const handleEdit = (e, id) => {
//     let edit = todos.find((i) => i.id === id);
//     setTodo(edit?.todo || "");

//     let newtodos = todos.filter((item) => item.id !== id);
//     setTodos(newtodos);
//   };

//   const handleDelete = (e, id) => {
//     if (!confirm("Are you sure you want to delete this todo?")) return;

//     let newtodos = todos.filter((item) => item.id !== id);
//     setTodos(newtodos);
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handlecheckbox = (e) => {
//     let id = e.target.name;

//     let newtodos = todos.map((item) =>
//       item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
//     );

//     setTodos(newtodos);
//   };

//   const toggleFinished = () => {
//     setShowFinished(!showFinished);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="container mx-auto my-5 p-5 rounded-xl bg-violet-100 min-h-[80vh] w-[95%] md:w-1/2 shadow-lg">
//         <h1 className="font-bold text-center text-xl mb-4">
//           iTask - Manage your todos at one place
//         </h1>

//         {/* Add Todo */}
//         <div className="addTodo flex flex-col gap-3">
//           <h2 className="text-lg font-bold">Add a Todo</h2>

//           <input
//             onChange={handleChange}
//             value={todo}
//             type="text"
//             placeholder="Enter your task..."
//             className="w-full p-2 rounded-md border"
//           />

//           <button
//             onClick={handleAdd}
//             disabled={todo.trim().length <= 3}
//             className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-4 py-2 rounded-xl disabled:bg-gray-400"
//           >
//             Add
//           </button>
//         </div>

//         {/* Toggle */}
//         <div className="flex items-center gap-2 my-4">
//           <input
//             onChange={toggleFinished}
//             type="checkbox"
//             checked={showFinished}
//           />
//           <span>Show Finished</span>
//         </div>

//         {/* Todos */}
//         <h2 className="text-lg font-bold mb-2">Your Todos</h2>

//         <div className="todos">
//           {todos.length === 0 && (
//             <div className="text-center text-gray-500">No Todos Available</div>
//           )}

//           {todos.map((item) => {
//             return (
//               (showFinished || !item.isCompleted) && (
//                 <div
//                   key={item.id}
//                   className="todo flex flex-col md:flex-row w-full my-3 items-start md:items-center justify-between gap-3 bg-white p-3 rounded-lg shadow"
//                 >
//                   <div className="flex gap-3 items-center">
//                     <input
//                       onChange={handlecheckbox}
//                       type="checkbox"
//                       checked={item.isCompleted}
//                       name={item.id}
//                     />

//                     <div
//                       className={
//                         item.isCompleted ? "line-through text-gray-500" : ""
//                       }
//                     >
//                       {item.todo}
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       onClick={(e) => handleEdit(e, item.id)}
//                       className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-lg"
//                     >
//                       <FaEdit />
//                     </button>

//                     <button
//                       onClick={(e) => handleDelete(e, item.id)}
//                       className="bg-red-600 hover:bg-red-800 text-white p-2 rounded-lg"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 </div>
//               )
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  // 🔥 Fix for overwrite issue
  const isFirstLoad = useRef(true);

  // ✅ Load todos
  useEffect(() => {
    try {
      let data = JSON.parse(localStorage.getItem("todos"));
      if (data) setTodos(data);
    } catch {
      setTodos([]);
    }
  }, []);

  // ✅ Save todos (skip first render)
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

      <div className="container mx-auto my-5 p-5 rounded-xl bg-violet-100 min-h-[80vh] w-[95%] md:w-1/2 shadow-lg">
        <h1 className="font-bold text-center text-xl mb-4">
          iTask - Manage your todos at one place
        </h1>

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
            className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-4 py-2 rounded-xl disabled:bg-gray-400"
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
            <div className="text-center text-gray-500">No Todos Available</div>
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
    </>
  );
}

export default App;
