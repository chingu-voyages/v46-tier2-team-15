import { NavLink } from "react-router-dom";
import DishDiveLogoWhite from "../assets/logo/DishDive_Logo_White.png";
import SwitchBtn from "../assets/page-images/Switch.svg";
import Line from "../assets/page-images/Line.svg";

function Header() {
  return (
    <div
      className="w-full py-[30px] px-[120px]"
      style={{ backgroundColor: "#1B1107" }}
    >
      <div
        className="flex justify-between	  items-center text-white "
        style={{ border: "2px solid #FBFCFB" }}
      >
        <div className="flex justify-center items-center">
          <img
            src={DishDiveLogoWhite}
            alt="Dish Dive Logo"
            className="w-14 h-14"
            style={{ margin: "20px" }}
          />
          <h1 className="text-5xl ml-10">DISH DIVE</h1>
        </div>

        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center">
            <li className="ml-7	">
              <NavLink to="/" className="text-[32px]">
                Home
              </NavLink>
            </li>
            <li className="ml-7	">
              <NavLink to="/about" className="text-[32px]">
                About
              </NavLink>
            </li>
            <li className="ml-7	">
              <NavLink to="/team" className="text-[32px]">
                Team
              </NavLink>
            </li>
          </ul>

          <img src={Line} alt="" className="ml-7	" />

          <img src={SwitchBtn} alt="" className="ml-7	 mr-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
