/* eslint-disable no-unused-vars */
import React from "react";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { TbShieldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const CustomerRow = ({ customer }) => {
  return (
    <tr className="font-semibold">
      <td className="py-4 px-6">
        <Link
          to={`/customer/${customer.id}`}
          className="text-blue-500"
        >
          {customer.name}
        </Link>
      </td>
      <td className="py-4 px-6">
        <span className={`badge ${getBadgeClass(customer.level)}`}>
          {customer.level}
        </span>
      </td>
      <td className="py-4 px-6">{customer.favorite_menu}</td>
      <td className="py-4 px-6">{customer.transaction}</td>
      <td className="flex flex-col md:flex-row gap-y-1 md:gap-x-2">
        <button
          className="bg-gray-200 rounded-md text-sm p-2 flex gap-x-1 items-center justify-center"
        >
          <TbShieldSearch />
          Detail
        </button>
        <button className="bg-gray-200 rounded-md text-sm p-2 flex justify-center">
          <CiEdit />
        </button>
        <button className="bg-red-200 rounded-md py-2 flex justify-center md:p-2">
          <GoTrash color="#8F0A13" />
        </button>
      </td>
    </tr>
  );
};

const getBadgeClass = (level) => {
  switch (level) {
    case "Warga":
      return "bg-orange-200 text-orange-700 font-semibold p-2 rounded-md";
    case "Juragan":
      return "bg-blue-200 text-blue-700 font-semibold p-2 rounded-md";
    case "Sultan":
      return "bg-green-200 text-green-700 font-semibold p-2 rounded-md";
    case "Konglomerat":
      return "bg-purple-200 text-purple-700 font-semibold p-2 rounded-md";
    default:
      return "";
  }
};

export default CustomerRow;
