import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = import.meta.env.VITE_BE_URL

export const fetchCustomerData = createAsyncThunk(
  'customers/fetchCustomerData',
  async () => {
    const response = await fetch(`${API}/customers`)
    if (!response.ok) {
        throw new Error("Failed to fetch customers")
    }
    const data = await response.json()
    return data;
  }
);

export const fetchCustomerById = createAsyncThunk(
    'customers/fetchCustomerById',
    async (id) => {
      const response = await fetch(`API/customer/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch customer with ID ${id}`);
      }
      const data = await response.json();
      return data;
    }
  );

  export const createCustomer = createAsyncThunk(
    'customers/createCustomer',
    async (newCustomer) => {
      const response = await fetch('API/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });
      if (!response.ok) {
        throw new Error('Failed to create customer');
      }
      const data = await response.json();
      return data;
    }
  );

const initialState = {
  customers: [],
  status: 'idle',
  error: null,
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCustomerData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCustomerData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.customers = action.payload;
        })
        .addCase(fetchCustomerData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchCustomerById.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCustomerById.fulfilled, (state, action) => {
          state.status = 'succeeded';
          const existingCustomer = state.customers.find(customer => customer.id === action.payload.id);
          if (!existingCustomer) {
            state.customers.push(action.payload);
          }
        })
        .addCase(fetchCustomerById.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(createCustomer.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createCustomer.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.customers.push(action.payload);
        })
        .addCase(createCustomer.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

export const selectCustomerById = (state, id) => 
    state.customers.customers.find((customer) => customer.id === id);

export default customerSlice.reducer;
