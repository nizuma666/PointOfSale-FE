import { Outlet } from "react-router-dom";
import VerticalBar from "../NavBar/VerticalBar";
import HorizontalBar from "../NavBar/HorizontalBar";
import TopMenu from "../CustomerDashboard/TopMenu";
import CustomerAnalytic from "../CustomerDashboard/CustomerAnalytic";

const Layout = () => {
  return (
    <div className="md:flex">
      <VerticalBar />
      <div className="mt-16 md:mt-0 md:w-screen">
        <HorizontalBar />
        <div className="md:flex">
          <Outlet />
          <div className="p-4 md:p-2">
            <CustomerAnalytic />
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
