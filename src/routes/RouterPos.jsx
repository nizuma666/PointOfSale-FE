import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DasboardPage";
import Layout from "../components/Layout/Layout";
import AddCustomer from "../pages/AddCustomer";
import CustomerDetailPage from "../pages/CustomerDetail";

const RouterPos = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="customer/:id" element={<CustomerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPos;
