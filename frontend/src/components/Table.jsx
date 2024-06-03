import React from "react";
import {
  MdEditNote,
  MdOutlineDeleteOutline,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = () => {
  return (
    <div className="py-10">
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
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">First Todo</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">Done</span>
            </td>
            <td className="p-3 text-sm">22.04-2024</td>
            <td className="p-3 text-sm font-medium flex justify-items-center">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
