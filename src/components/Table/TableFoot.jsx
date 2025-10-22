import React from "react";

const TableFoot = ({ contacts }) => {
  return (
    <tfoot>
      <tr className="w-full flex justify-end items-center gap-2 px-10 py-4 font-semibold bg-chetwode-blue-700 rounded-2xl text-white mt-1">
        <td
          className="flex justify-end items-center gap-2 w-full mr-15"
          colSpan={4}
        >
          <span>Total Contacts:</span>
          <span className="">{contacts.length}</span>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
