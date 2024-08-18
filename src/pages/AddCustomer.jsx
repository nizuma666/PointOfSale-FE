import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [favoriteMenu, setFavoriteMenu] = useState("");
  const [transaction, setTransaction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log({
      name,
      level,
      favoriteMenu,
      transaction,
    });
  };

  return (
    <div className="md:w-full p-4 md:p-8 bg-white rounded-md">
      <Link to={"/"}>
        <div className="flex gap-x-2 items-center">
          <IoMdArrowBack /> Kembali
        </div>
      </Link>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Add New Customer
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-brand"
          >
            <option value="" disabled>
              Select Level
            </option>
            <option value="Warga">Warga</option>
            <option value="Juragan">Juragan</option>
            <option value="Sultan">Sultan</option>
            <option value="Konglomerat">Konglomerat</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Favorite Menu
          </label>
          <input
            type="text"
            value={favoriteMenu}
            onChange={(e) => setFavoriteMenu(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Transaction (IDR)
          </label>
          <input
            type="text"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-brand"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand text-white font-semibold rounded-md shadow hover:bg-white hover:text-brand hover:border hover:border-brand"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
