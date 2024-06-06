import axios from "axios";
import React, { useState } from "react";
import {
  MdEditNote,
  MdOutlineDeleteOutline,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = ({ todos, setTodos }) => {

  const [editText, setEditText] = useState({
    'body':''
  })
  
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

  const handleEdit = async (id,value) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/todo/${id}/`,value 
      );
      const newTodos = todos.map(todo => todo.id === id ? response.data : todo)
      setTodos(newTodos)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleCheckbox = async (id, value) => {
    handleEdit(id, {
      'completed':!value
    })
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setEditText(prev => ({
      ...prev,
      'body':e.target.value
    }))
  }

  const handleClick = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'body':''
    })
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
                  <span
                    onClick={() => {
                      handleCheckbox(todoItem.id, todoItem.completed);
                    }}
                    className="inline-block cursor-pointer"
                  >
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
                      todoItem.completed ? "bg-green-300" : "bg-red-300"
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
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <MdEditNote onClick={()=>setEditText(todoItem)} />
                    </button>
                  </span>
                  <span className="text-xl cursor-pointer">
                    <MdOutlineDeleteOutline
                      onClick={() => handleDelete(todoItem.id)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Todo</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full mt-8"
            value={editText.body}
            onChange={handleChange}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-primary mx-2"
                onClick={handleClick}
              >
                Update
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Table;
