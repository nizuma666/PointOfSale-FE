import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoClipboardOutline } from "react-icons/io5";
import { LiaConciergeBellSolid } from "react-icons/lia";
import { LuTruck, LuUsers } from "react-icons/lu";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { PiBatteryFullLight, PiNotePencilBold } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbCategory2, TbUserSquareRounded } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const VerticalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuTitle = [
    "Dashboard",
    "Stock",
    "Customer",
    "Restaurant",
    "Design",
    "Report",
    "Role & Admin",
    "Setting",
  ];
  const integrationTitle = ["Stock", "Supply"];
  const menuIcon = [
    <TbCategory2 />,
    <PiBatteryFullLight />,
    <LuUsers />,
    <LiaConciergeBellSolid />,
    <PiNotePencilBold />,
    <IoClipboardOutline />,
    <TbUserSquareRounded />,
    <MdOutlineCandlestickChart />,
  ];
  const integrationIcon = [<RiShoppingCartLine />, <LuTruck />];
  return (
    <nav className="border-r border-opacity-35 border-r-gray-400 h-full">
      <div className="flex items-center justify-between p-4 w-full fixed top-0 md:static bg-white border-b md:border-none">
        <div className="text-xl flex gap-x-3">
          <img src="/src/assets/Union.png" alt="logo" />
          <p className="text-brand font-semibold text-2xl">square</p>
        </div>
        <div className="md:hidden flex">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes color="#5D5FEF" size={24} />
            ) : (
              <FaBars color="#5D5FEF" size={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bg-white w-[200px] border-r border-opacity-35 md:border-none border-t-gray-400 flex flex-col justify-between transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:transform-none md:relative md:bg-transparent`}
      >
        <div className="px-4 py-2 text-gray-500 my-6 md:my-0">
          <p className="text-[10px] font-light mb-4">Menu</p>

          <ul className="space-y-4">
            {menuTitle.map((title, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <NavLink
                  to={`/${title
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="flex items-center text-sm gap-x-2 text-gray-500 hover:bg-gray-200 md:hover:bg-transparent"
                  activeClassName="text-yellow-500"
                  onClick={() => setIsOpen(false)}
                >
                  {menuIcon[index]} {/* Display the icon */}
                  <span>{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 text-gray-500 grow md:mt-4">
          <p className="text-[10px] font-light mb-4">Integration</p>

          <ul className="space-y-4">
            {integrationTitle.map((title, index) => (
              <li key={index}>
                <NavLink
                  to={`/${title
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="flex items-center gap-x-2 text-sm text-gray-500 hover:bg-gray-200 md:hover:bg-transparent"
                  activeClassName="text-yellow-500"
                  onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
                >
                  {integrationIcon[index]} {/* Display the icon */}
                  <span>{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t border-opacity-35 border-t-gray-400 flex flex-col items-center md:mt-28">
          <div className="flex gap-x-2 mb-6">
            <img src="/src/assets/profile.png" />
            <div>
              <p className="font-semibold">Savannah N</p>
              <p className="text-[10px] text-gray-500">Food Quality Manager</p>
            </div>
          </div>
          <div className="w-full">
            <button className="flex justify-center gap-x-1 items-center bg-red-100 p-2 rounded-lg w-full">
              <CiLogout color="#8F0A13" />
              <p className="text-red-700 text-xs ali font-bold">Logout</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VerticalBar;
