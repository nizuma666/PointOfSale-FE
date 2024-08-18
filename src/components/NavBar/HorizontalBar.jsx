import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HorizontalBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Customer");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="p-4 md:w-full">
        <div className="md:hidden">
          <div
            className="text-white p-2 cursor-pointer flex justify-between items-center"
            onClick={toggleMenu}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : "text-gray-400"
              }
            >
              Customer
            </NavLink>
            <FaChevronDown
              color="#5D5FEF"
              className={`ml-2 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col">
              <li>
                <NavLink
                  to="/promo"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black block p-2 font-bold"
                      : "text-gray-400 block p-2"
                  }
                >
                  Promo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/voucher"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black block p-2 font-bold"
                      : "text-gray-400 block p-2"
                  }
                >
                  Voucher
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-sm:hidden border-b">
          <p className="text-xl font-bold">Customer</p>
          <div className="flex md:justify-between">
            <p className="text-sm text-gray-400 font-semibold">
              You can manage and organize your customer and other things here
            </p>
            <div className="flex space-x-4 md:items-center">
              {["Customer", "Promo", "Voucher"].map((menu) => (
                <div
                  key={menu}
                  className={`px-4 py-2 cursor-pointer md:w-[190px] md:text-center ${
                    activeMenu === menu
                      ? "text-brand border-b-2 font-semibold border-brand"
                      : "text-gray-500 font-semibold"
                  }`}
                  onClick={() => setActiveMenu(menu)}
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default HorizontalBar;
