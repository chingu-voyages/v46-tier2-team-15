/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/
import React from "react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

function AppTeamMember({ teamMember, visibility, toggleVisibility }) {
  const [expand, setExpand] = React.useState(false);
  const [memberInfo, setMemberInfo] = React.useState("home");
  const transition = "";
  function toggleExpand() {
    setExpand((prevState) => !prevState);
    setMemberInfo("home");
    toggleVisibility();
  }

  console.log(teamMember);

  return (
    <div
      className={`${transition} flex 
      ${expand ? "w-full h-[100%] " : "flex-col "} 
      ${visibility ? "visible " : expand ? "visible" : "hidden"}`}
    >
      {/* Small card */}
      <div
        className={`${transition} flex flex-col bg-[#DCB288] border-[#DCB288]   
        ${
          expand ? " w-[25%] h-full border-8" : "w-[12rem] h-[18rem] border-4"
        }`}
      >
        <div
          className={`${transition} w-full bg-[#DCB288] ${expand ? "" : ""}`}
        >
          {/*  */}
          <div
            className={`${transition} h-[50%] bg-[#1B1107] ${expand ? "" : ""}`}
          ></div>
          <div
            className={`${transition} mx-auto my-[20%] w-3/5 relative top-[-50%] border-[#DCB288] 
            ${expand ? "border-8" : "border-4"}`}
          >
            <img src={teamMember.photo} alt="App team member portrait photo" />
          </div>
        </div>

        <div
          className={`${transition} h-full m-2 mt-[-15%] flex flex-col items-center bg-[#DCB288] 
          ${expand ? "" : ""}`}
        >
          <h2
            className={`${transition} font-bold 
            ${expand ? "text-4xl mt-2" : "text-xl"}`}
          >
            {teamMember.name}
          </h2>
          <h3
            className={`${transition} ${expand ? "text-xl mt-2" : "text-xs"}`}
          >
            {teamMember.role}
          </h3>
          <ul
            className={`${transition} flex justify-center w-full 
            ${expand ? "text-2xl mt-2" : "text-s"}`}
          >
            {teamMember.socialMedia.map((sc) => (
              <li key={sc.key}></li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleExpand}
          className={`${transition} w-full   bg-[#C7AC8F] border-[#1B1107] 
          ${
            expand ? "px-4 py-2 border-4 text-2xl" : "px-2 py-1 border-2 text-s"
          }`}
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>
      {/* Right big card */}
      <div
        className={`${transition} bg-[#1B1107] border-[#DCB288] border-8 border-l-0 flex flex-col 
        ${expand ? "w-[75%] h-[100%] delay-300 visible" : "delay-0 hidden"}`}
      >
        <nav
          className={`${transition} w-full flex justify-center p-4 text-[#DCB288] text-3xl 
          ${expand ? "" : ""}`}
        >
          <ul
            className={`${transition} flex justify-around w-[60%] 
            ${expand ? "" : ""}`}
          >
            <li
              onClick={() => setMemberInfo("home")}
              className={`${transition} cursor-pointer p-2 ${expand ? "" : ""}`}
            >
              <FaHome />
            </li>
            <li
              onClick={() => setMemberInfo("about")}
              className={`${transition} cursor-pointer p-2 ${expand ? "" : ""}`}
            >
              <FaUser />
            </li>
            <li
              onClick={() => setMemberInfo("education")}
              className={`${transition} cursor-pointer p-2 ${expand ? "" : ""}`}
            >
              <FaUserGraduate />
            </li>
            <li
              onClick={() => setMemberInfo("work")}
              className={`${transition} cursor-pointer p-2 ${expand ? "" : ""}`}
            >
              <FaBriefcase />
            </li>
            <li
              onClick={() => setMemberInfo("contact")}
              className={`${transition} cursor-pointer p-2 ${expand ? "" : ""}`}
            >
              <FaAddressBook />
            </li>
          </ul>
        </nav>

        <div className={`${transition} px-8 h-[100%] ${expand ? "" : ""}`}>
          {memberInfo === "home" ? <Home /> : ""}
          {memberInfo === "about" ? <About teamMember={teamMember} /> : ""}
          {memberInfo === "education" ? <Education /> : ""}
          {memberInfo === "work" ? <Work /> : ""}
          {memberInfo === "contact" ? <Contact /> : ""}
        </div>
      </div>
    </div>
  );
}

function Home({ transition, expand, teamMember }) {
  return (
    <div
      className={`${transition} w-full h-[100%] px-16 py-10 flex flex-col justify-center text-[#DCB288] text-3xl 
      ${expand ? "" : ""}`}
    >
      <h2
        className={`${transition} text-center text-5xl font-extrabold
        ${expand ? "" : ""}`}
      >
        Drazen Drinic
      </h2>
      <h3
        className={`${transition} text-center text-3xl font-extralight mt-4
        ${expand ? "" : ""}`}
      >
        Web Developer
      </h3>
    </div>
  );
}
function About({ transition, expand, teamMember }) {
  return (
    <div
      className={`${transition} w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl 
      ${expand ? "" : ""}`}
    >
      <h2
        className={`${transition} text-4xl font-extrabold ${expand ? "" : ""}`}
      >
        About Me
      </h2>
      <div
        className={`${transition} w-full flex justify-between 
        ${expand ? "" : ""}`}
      >
        <p
          className={`${transition} mt-6 text-xl whitespace-pre-line ${
            expand ? "" : ""
          }`}
        >
          {teamMember.aboutMe}
        </p>
      </div>
      <div className={`${transition} w-full ${expand ? "" : ""}`}></div>
    </div>
  );
}
function Education({ transition, expand, teamMember }) {
  return (
    <div
      className={`${transition} w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl 
      ${expand ? "" : ""}`}
    >
      <h2
        className={`${transition} text-4xl font-extrabold ${expand ? "" : ""}`}
      >
        Education
      </h2>
      <div
        className={`${transition} w-full flex justify-between 
        ${expand ? "" : ""}`}
      >
        <p className={`${transition} mt-6 text-xl ${expand ? "" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          assumenda sed enim nisi odio? Repellendus placeat dicta labore,
          exercitationem voluptates quo dolorem consequatur id, itaque,
          doloribus quam dolorum ut consectetur.
        </p>
      </div>
      <div className={`${transition} w-full ${expand ? "" : ""}`}></div>
    </div>
  );
}
function Work({ transition, expand, teamMember }) {
  return (
    <div
      className={`${transition} w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl 
      ${expand ? "" : ""}`}
    >
      <h2
        className={`${transition} text-4xl font-extrabold ${expand ? "" : ""}`}
      >
        Work
      </h2>
      <div
        className={`${transition} w-full flex justify-between 
        ${expand ? "" : ""}`}
      >
        <p className={`${transition} mt-6 text-xl ${expand ? "" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          assumenda sed enim nisi odio? Repellendus placeat dicta labore,
          exercitationem voluptates quo dolorem consequatur id, itaque,
          doloribus quam dolorum ut consectetur.
        </p>
      </div>
      <div className={`${transition} w-full ${expand ? "" : ""}`}></div>
    </div>
  );
}
function Contact({ transition, expand, teamMember }) {
  return (
    <div
      className={`${transition} w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl 
      ${expand ? "" : ""}`}
    >
      <h2
        className={`${transition} text-4xl font-extrabold ${expand ? "" : ""}`}
      >
        Contact
      </h2>
      <div
        className={`${transition} w-full flex justify-between 
        ${expand ? "" : ""}`}
      >
        <p className={`${transition} mt-6 text-xl ${expand ? "" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          assumenda sed enim nisi odio? Repellendus placeat dicta labore,
          exercitationem voluptates quo dolorem consequatur id, itaque,
          doloribus quam dolorum ut consectetur.
        </p>
      </div>
      <div className={`${transition} w-full ${expand ? "" : ""}`}></div>
    </div>
  );
}

export default AppTeamMember;
