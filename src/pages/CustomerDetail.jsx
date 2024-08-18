import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCustomerData,
  selectCustomerById,
} from "../features/customers/customerSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomerDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  const customer = useSelector((state) =>
    selectCustomerById(state, parseInt(id))
  );

  if (!customer) {
    return <div>Loading...</div>;
  }
  return (
    <div className="md:w-full md:p-4">
      <div className="p-4 md:p-8 md:w-full bg-white rounded-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          Customer Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {customer.name}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {customer.level}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Favorite Menu
            </label>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {customer.favorite_menu}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Transaction
            </label>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {customer.transaction}
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="w-full py-2 px-4 bg-brand text-white font-semibold rounded-md hover:bg-white hover:text-brand hover:border hover:border-brand"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailPage;
