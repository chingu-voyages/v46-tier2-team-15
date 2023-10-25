/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/
import React from "react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function AppTeamMember() {
  const [expand, setExpand] = React.useState(false);
  function toggleExpand() {
    setExpand((prevState) => !prevState);
  }

  return (
    <div
      className={
        expand
          ? "flex w-full h-[100%] transition-all duration-500"
          : "flex flex-col transition-all duration-500"
      }
    >
      {/* Small card */}
      <div
        className={
          (expand
            ? "flex flex-col w-[25%] h-full border-8"
            : "flex flex-col w-[12rem] h-[18rem] border-4") +
          " bg-[#DCB288] border-[#DCB288] "
        }
      >
        <div className="w-full bg-[#DCB288]">
          {/*  */}
          <div className="h-[50%] bg-[#1B1107] "></div>
          <div
            className={
              (expand ? "border-8" : "border-4") +
              " mx-auto my-[20%] w-3/5 relative top-[-50%] border-[#DCB288]"
            }
          >
            <img
              src="src\assets\contributors_photos\Drazen_Drinic.jpeg"
              alt="App team member portrait photo"
            />
          </div>
        </div>

        <div className="h-full m-2 mt-[-15%] flex flex-col items-center bg-[#DCB288]">
          <h2
            className={(expand ? "text-4xl mt-2" : "text-xl") + " font-bold "}
          >
            Drazen Drinic
          </h2>
          <h3 className={(expand ? "text-xl mt-2" : "text-xs") + " "}>
            Web Developer
          </h3>
          <ul
            className={
              (expand ? "text-2xl mt-2" : "text-s") +
              " flex justify-center w-full  "
            }
          >
            <li className="m-2">
              <FaLinkedinIn />
            </li>
            <li className="m-2">
              <FaFacebookF />
            </li>
            <li className="m-2">
              <FaTwitter />
            </li>
          </ul>
        </div>
        <button
          onClick={toggleExpand}
          className={
            (expand
              ? "px-4 py-2 border-4 text-2xl"
              : "px-2 py-1 border-2 text-s") +
            " w-full   bg-[#C7AC8F] border-[#1B1107] "
          }
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>
      {/* Right big card */}
      <div
        className={
          (expand ? "w-[75%] h-[100%] " : "invisible") +
          " bg-[#1B1107] border-[#DCB288] border-8 border-l-0"
        }
      ></div>
    </div>
  );
}

export default AppTeamMember;
