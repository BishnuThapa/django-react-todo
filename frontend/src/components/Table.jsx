import axios from "axios";
import React from "react";
import {
  MdEditNote,
  MdOutlineDeleteOutline,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = ({ todos, setTodos }) => {
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`);
      const newLlist = todos.filter(todo => todo.id != id)
      setTodos(newLlist)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="py-3">
      <table className="table-auto w-11/12 max-w-4xl ">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Body
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Date Created
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
              <tbody>
                  {todos.map((todoItem, index) => {
                      return (
                        <tr key={todoItem.id} className="border-b border-black">
                          <td className="p-3">
                            <span className="inline-block cursor-pointer">
                              {todoItem.completed ? (
                                <MdOutlineCheckBox />
                              ) : (
                                <MdOutlineCheckBoxOutlineBlank />
                              )}
                            </span>
                          </td>
                          <td className="p-3 text-sm">{todoItem.body}</td>
                          <td className="p-3 text-sm text-center">
                            <span
                              className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${
                                todoItem.completed
                                  ? "bg-green-300"
                                  : "bg-red-300"
                              }`}
                            >
                              {todoItem.completed ? "Done" : "Pending"}
                            </span>
                          </td>
                          <td className="p-3 text-sm">
                            {new Date(todoItem.created).toLocaleDateString()}
                          </td>
                          <td className="p-3 text-sm font-medium flex justify-items-center">
                            <span className="text-xl cursor-pointer">
                              <MdEditNote />
                            </span>
                            <span className="text-xl cursor-pointer">
                              <MdOutlineDeleteOutline onClick={()=>handleDelete(todoItem.id)} />
                            </span>
                          </td>
                        </tr>
                      );
                  })
         
              }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
