/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerData } from "../../features/customers/customerSlice";
import CustomerRow from "./CustomerRow";
import { FaSort } from "react-icons/fa";
import Pagination from "./Pagination";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers.customers);
  const customerStatus = useSelector((state) => state.customers.status);
  const error = useSelector((state) => state.customers.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(customers.length / 10);
  console.log(customers);
  

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (customerStatus === 'idle') {
      dispatch(fetchCustomerData());
    }
  }, [customerStatus, dispatch]);

  if (customerStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (customerStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full bg-white">
        <thead className="bg-gray-200 text-gray-600 text-sm">
          <tr>
            <th className="py-3 px-6">
              <div className="flex justify-between items-center">
                <span>Customer Name</span>
                <FaSort className="ml-2" />
              </div>
            </th>
            <th className="py-3 px-6">
              <div className="flex justify-between items-center">
                <span>Level</span>
                <FaSort className="ml-2" />
              </div>
            </th>
            <th className="py-3 px-6">
              <div className="flex justify-between items-center">
                <span>Favorite Menu</span>
                <FaSort className="ml-2" />
              </div>
            </th>
            <th className="py-3 px-6">
              <div className="flex justify-between items-center">
                <span>Total Transaction</span>
                <FaSort className="ml-2" />
              </div>
            </th>
            <th className="py-3 px-1">
              <div className="flex justify-between items-center">
                <span>Action</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm font-light">
          {customers
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
        </tbody>
      </table>
      <div className="bg-gray-100 rounded-md flex justify-between items-center gap-x-1 p-4 text-gray-400 text-sm">
        <p className="text-xs">Showing 10 Data Customer</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default CustomerList;
