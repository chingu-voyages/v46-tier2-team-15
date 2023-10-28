import { NavLink } from "react-router-dom";
import DishDiveLogoWhite from "../assets/logo/DishDive_Logo_White.png";
import SwitchBtn from "../assets/page-images/Switch.svg";
import Line from "../assets/page-images/Line.svg";
import MenuIcon from "../assets/page-images/menu-icon.png";
import CloseMenu from "../assets/page-images/close-menu.png";
import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="w-full p-[15px] md:p-[30px] xl:px-[120px] bg-[#1B1107]">
      <div
        className="flex justify-between	  items-center text-white"
        style={{ border: "2px solid #FBFCFB" }}
      >
        <div className="flex justify-center items-center">
          <img
            src={DishDiveLogoWhite}
            alt="Dish Dive Logo"
            className="w-10 h-10 m-3.5 md:w-[60px] md:h-[60px] md:m-8"
          />
          <h1 className="text-lg md:text-[28px] ml-8 md:ml-7 lg:text-[40px]">
            DISH DIVE
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-10 h-10 mr-3.5 cursor-pointer md:hidden">
            <div onClick={toggleMenuIcon}>
              {!isOpen ? <img src={MenuIcon} /> : <img src={CloseMenu} />}
            </div>
          </div>

          {/* {!isOpen && ( */}
          <div
            className="flex flex-col justify-center items-center"
            style={{ backgroundColor: "#1B1107" }}
          >
            <ul
              className={`flex flex-col md:flex-row items-center  absolute bg-[#1B1107] z-10 md:static  left-0 w-full pl-0 transition-all duration-500 ease-in ${
                isOpen ? "top-[100px] " : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 text-xl md:my-0 my-7 ">
                <NavLink
                  to="/"
                  className="text-base lg:text-[28px]"
                  onClick={toggleMenuIcon}
                >
                  Home
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 lg:text-[28px]">
                <NavLink
                  to="/about"
                  className="text-base lg:text-[28px]"
                  onClick={toggleMenuIcon}
                >
                  About
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 lg:text-[28px]">
                <NavLink
                  to="/team"
                  className="text-base lg:text-[28px]"
                  onClick={toggleMenuIcon}
                >
                  Team
                </NavLink>
              </li>

              <li className="md:ml-8">
                <img src={Line} alt="" className=" hidden md:inline-block" />
              </li>

              <li className="md:ml-8 text-xl md:my-0 my-7">
                <img
                  src={SwitchBtn}
                  alt=""
                  className="md:mr-7 cursor-pointer w-[60px] lg:w-[75px]"
                />
              </li>
            </ul>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
