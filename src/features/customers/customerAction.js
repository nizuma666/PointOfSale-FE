import { setCustomers } from './customerSlice';
import { fetchCustomers } from './customerAPI';

export const fetchAndSetCustomers = () => async (dispatch) => {
  const customers = await fetchCustomers();
  dispatch(setCustomers(customers));
};
