// eslint-disable-next-line no-unused-vars
import React from "react";
import CustomerList from "./CustomerList";
import SearchBar from "./SearchBar";
import CustomerAnalytic from "./CustomerAnalytic";
import TopMenu from "./TopMenu";
import { MdLocalPrintshop } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
    const navigate = useNavigate();
    const handleAddCustomer = () => {
        navigate("/addcustomer")
    }
  return (
    <div className="mx-auto md:w-full md:mx-0">
      <div className="bg-brand p-6 rounded-xl mb-6 md:mb-2 md:w-full md:relative md:h-[167px]">
        <div className="md:hidden">
          <div className="mb-4">
            <h2 className="text-xl text-white font-semibold">Customer</h2>
            <p className="text-white text-xs">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </p>
          </div>
          <SearchBar />
          <div className="mt-4 flex justify-between">
            <button onClick={handleAddCustomer} className="bg-purple-400 text-white text-xs font-semibold px-2 py-2 rounded">
              + Add New Customer
            </button>
            <div>
              <button className="bg-purple-400 text-white text-xs font-semibold px-4 py-2 rounded mr-2">
                Filter
              </button>
              <button className="bg-purple-400 text-white text-xs font-semibold px-4 py-2 rounded">
                Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="max-md:hidden">
          <div className="mb-4 w-[350px]">
            <h2 className="text-xl text-white font-semibold">Customer</h2>
            <p className="text-white text-xs">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </p>
          </div>
          <img
            src="/src/assets/bg-header.png"
            className="absolute right-0 top-0"
          />
          <div className="flex justify-between gap-x-3 absolute w-full left-0 p-4">
            <button onClick={handleAddCustomer} className="bg-white bg-opacity-20 text-white text-xs font-semibold px-2 py-2 rounded">
              + Add New Customer
            </button>
            <div className="grow">
              <SearchBar />
            </div>
            <div className="flex gap-x-3">
              <button className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded">
                Filter
              </button>
              <button className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded">
                Refresh
              </button>
              <button className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded">
                <MdLocalPrintshop />
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomerList />
    </div>
  );
};

export default CustomerDashboard;
