/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/
import React from "react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

function AppTeamMember() {
  const [expand, setExpand] = React.useState(false);
  const [memberInfo, setMemberInfo] = React.useState("home");
  function toggleExpand() {
    setExpand((prevState) => !prevState);
    setMemberInfo("home");
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
          (expand ? "w-[75%] h-[100%] " : "hidden") +
          " bg-[#1B1107] border-[#DCB288] border-8 border-l-0 flex flex-col"
        }
      >
        <nav className="w-full flex justify-center p-4 text-[#DCB288] text-3xl">
          <ul className="flex justify-around w-[60%]  ">
            <li
              onClick={() => setMemberInfo("home")}
              className="cursor-pointer p-2"
            >
              <FaHome />
            </li>
            <li
              onClick={() => setMemberInfo("about")}
              className="cursor-pointer p-2"
            >
              <FaUser />
            </li>
            <li
              onClick={() => setMemberInfo("education")}
              className="cursor-pointer p-2"
            >
              <FaUserGraduate />
            </li>
            <li
              onClick={() => setMemberInfo("work")}
              className="cursor-pointer p-2"
            >
              <FaBriefcase />
            </li>
            <li
              onClick={() => setMemberInfo("contact")}
              className="cursor-pointer p-2"
            >
              <FaAddressBook />
            </li>
          </ul>
        </nav>

        <div className="px-8 h-[100%]">
          {memberInfo === "home" ? <Home /> : ""}
          {memberInfo === "about" ? <About /> : ""}
          {memberInfo === "education" ? <Education /> : ""}
          {memberInfo === "work" ? <Work /> : ""}
          {memberInfo === "contact" ? <Contact /> : ""}
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="w-full h-[100%] p-4 flex flex-col justify-center text-[#DCB288] text-3xl">
      <h2 className="text-center text-5xl font-extrabold">Drazen Drinic</h2>
      <h3 className="text-center text-3xl font-extralight mt-4">
        Web Developer
      </h3>
    </div>
  );
}
function About() {
  return (
    <div className="w-full  h-[100%] p-4 flex flex-col text-[#DCB288] text-3xl">
      <h2 className="text-4xl font-extrabold">About Me</h2>
      <div className="w-full flex justify-between ">
        <p className="mt-6 text-xl w-[65%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          assumenda sed enim nisi odio? Repellendus placeat dicta labore,
          exercitationem voluptates quo dolorem consequatur id, itaque,
          doloribus quam dolorum ut consectetur.
        </p>
        <ul className="text-xl mt-4 ">
          <li>
            <span className="text-[#FD5A5B]">Age:</span> 36
          </li>
          <li>
            <span className="text-[#FD5A5B]">Residence:</span> BIH
          </li>
          <li>
            <span className="text-[#FD5A5B]">e-mail:</span> somename@gmail.com
          </li>
          <li>
            <span className="text-[#FD5A5B]">Phone:</span> +387 65 555 555
          </li>
        </ul>
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Education() {
  return (
    <div className="w-full  h-[100%] p-4 flex flex-col text-[#DCB288] text-3xl">
      <h2 className="text-4xl font-extrabold">Education</h2>
    </div>
  );
}
function Work() {
  return (
    <div className="w-full  h-[100%] p-4 flex flex-col text-[#DCB288] text-3xl">
      <h2 className="text-4xl font-extrabold">Work</h2>
    </div>
  );
}
function Contact() {
  return (
    <div className="w-full  h-[100%] p-4 flex flex-col text-[#DCB288] text-3xl">
      <h2 className="text-4xl font-extrabold">Contact</h2>
    </div>
  );
}

export default AppTeamMember;
