import React from "react";

const TableHead = () => {
  return (
    <thead className="w-full text-lg">
      <tr className="w-full flex justify-between items-center py-4">
        <th className="w-full text-center">Name</th>
        <th className="w-full text-center">Phone</th>
        <th className="w-full text-center">Email</th>
        <th className="w-full text-center">Company</th>
        <th className="w-full text-center">Created/Updated At</th>
      </tr>
    </thead>
  );
};

export default TableHead;
