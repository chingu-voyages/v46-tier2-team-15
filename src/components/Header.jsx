import { NavLink } from "react-router-dom";
import DishDiveLogoWhite from "../assets/logo/DishDive_Logo_White.png";
import DishDiveLogoBlack from "../assets/logo/DishDive_Logo_Black.png";
import SwitchBtn from "../assets/page-images/Switch.svg";
import Line from "../assets/page-images/Line.svg";
// import MenuIcon from "../assets/page-images/menu-icon.png";
// import CloseMenu from "../assets/page-images/close-menu.png";
import { useEffect, useState, useContext } from "react";
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiSunFill } from 'react-icons/ri';
import { ThemeContext } from '../App';
import {PiHamburgerFill} from 'react-icons/pi'
import {LuUtensilsCrossed} from 'react-icons/lu'



function Header() {
  const themeData = useContext(ThemeContext);
  const {theme , toggleTheme} = themeData;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className=" header w-full p-[15px] md:p-[20px] xl:px-[120px]">
      <div
        className="header-border flex justify-between	items-center"
      >
        <div className="flex justify-center items-center">
          {theme === 'light' ?  <img
            src={DishDiveLogoBlack}
            alt="Dish Dive Logo"
            className="w-10 h-10 m-3.5 md:w-[60px] md:h-[60px] md:m-8"
          /> :  <img
            src={DishDiveLogoWhite}
            alt="Dish Dive Logo"
            className="w-10 h-10 m-3.5 md:w-[60px] md:h-[60px] md:m-8"
          />}
          <h1 className="text-lg md:text-[28px] ml-8 md:ml-7 lg:text-[36px]">
            DISH DIVE
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-10 h-10 mr-3.5 pt-1 cursor-pointer md:hidden">
            <div onClick={toggleMenuIcon}>
              {!isOpen ? <PiHamburgerFill size={30}/> : <LuUtensilsCrossed size={30}/>}
            </div>
          </div>

          {/* {!isOpen && ( */}
          <div
            className="flex flex-col justify-center items-center"
          >
            <ul
              className={`navbar flex flex-col md:flex-row items-center  absolute z-20 md:static  left-0 w-full pl-0 transition-all duration-500 ease-in ${
                isOpen ? "top-[90px] " : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 text-xl md:my-0 my-7 ">
                <NavLink
                  to="/"
                  className="text-base lg:text-[24px]"
                  onClick={toggleMenuIcon}
                >
                  Home
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 lg:text-[28px]">
                <NavLink
                  to="/about"
                  className="text-base lg:text-[24px]"
                  onClick={toggleMenuIcon}
                >
                  About
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 lg:text-[28px]">
                <NavLink
                  to="/team"
                  className="text-base lg:text-[24px]"
                  onClick={toggleMenuIcon}
                >
                  Team
                </NavLink>
              </li>

              <li className="md:ml-8">
                <img
                  src={Line}
                  alt=""
                  className=" hidden md:inline-block h-[50px]"
                />
              </li>
                <li className="md:ml-8 text-xl md:my-0 my-7">
                {theme === 'light' ? (
                <button onClick={toggleTheme} className="md:mr-7 cursor-pointer w-10 lg:w-[50px]">
                  <PiMoonStarsFill  size={26}  />
                  </button>
                ) : (
                <button onClick={toggleTheme} className="md:mr-7 cursor-pointer w-10 lg:w-[50px]">
                    <RiSunFill size={26} />
                </button>
                )}
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
