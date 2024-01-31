import React, { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../../assets/logo.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sideboard from "../Sideboard/Sideboard";





const Navbar = () => {
  const [cookies, removeCookie] = useCookies(["loggedIn"]);
  const navigate = useNavigate();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    removeCookie("loggedIn");
    navigate("/");
  };

  return (
    <>
      <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-25 border-b border-gray-200  max-sm:max-w-full">
        <div className="flex justify-between px-4 max-md:w-full sm:min-w-fit">
          <div className="justify-center h-16  flex gap-2 items-center ">
            <div className="mx-1">
              <button
                className="sm:hidden text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <RxHamburgerMenu />
              </button>
            </div>
            <div className="max-md:flex-1 flex max-md:align-middle max-md:w-full ">
              <div>
                <span className="text-white font-semibold ">
                  <img src={logo} width={27} height={10} alt="img" />
                </span>
              </div>

              <div>
                <span className="text-white  px-2 max-md:text-sm">
                  Asset Management
                </span>
              </div>
            </div>
          </div>

          <div className="flex text-white justify-end items-center mt-2">
            <ul className="flex space-x-5">
              <li className="hover:font-normal font-light max-sm:hidden">
                <button>
                  <MdOutlineDarkMode fontSize={25} />
                </button>
              </li>
              <li className="hover:font-normal font-light max-sm:hidden">
                <button className="">Profile</button>
              </li>
              <li className="text-sm mb-1 max-sm:hidden">
                <Button onClick={handleLogout} className="text-sm ">
                  Log out
                </Button>
              </li>
              <li className="sm:hidden">
                <button onClick={() => setNavigationOpen(!navigationOpen)}>
                  <BsThreeDotsVertical />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Hamburger Navigation */}
        {navigationOpen && (
          <div className="absolute top-16 right-4 bg-slate-50 bg-blend-saturation shadow-lg rounded-md sm:hidden">
            <ul className="space-y-2 p-2">
              <li className="text-gray-800 ">
                <button className="text-left w-full">Profile</button>
              </li>
              <li className="text-gray-800">
                <button className="text-left w-full">Settings</button>
              </li>
              <li className="text-gray-800">
                <button className="text-left w-full" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Sidebar */}

        {/* {sidebarOpen ? (
          <div className={`bg-red-700 w-44 text-gray-200 px-3 h-full opacity-80 ${ sidebarOpen ? 'transition-all  block duration-500 h-[100%] ' : ' hidden duration-400 transition-all  overflow-y-scroll'}  flex flex-col min-h-screen font-semibold`}>
           
            <div className={` h-full overflow-y-auto opacity-80`}>
            <Sideboard/>
              
            </div>
          </div>
        ): ''} */}

       
      </nav>
    </>
  );
};

export default Navbar;
