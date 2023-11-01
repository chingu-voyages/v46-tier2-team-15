/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/
import React from "react";

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

  return (
    <div
      className={`flex 
      ${expand ? "w-full h-[100%] " : "flex-col m-3"} 
      ${visibility ? "visible " : expand ? "visible" : "hidden"}`}
    >
      {/* Small card */}
      <div
        className={`flex flex-col bg-[#DCB288] border-[#DCB288] 
        ${
          expand ? " w-[25%] h-full border-8" : "w-[12rem] h-[18rem] border-4"
        }`}
      >
        <div className="w-full bg-[#DCB288]">
          {/*  */}
          <div className="h-[50%] bg-[#1B1107]"></div>
          <div
            className={`mx-auto my-[20%] w-3/5 relative top-[-50%] border-[#DCB288] 
            ${expand ? "border-8" : "border-4"}`}
          >
            <img src={teamMember.photo} alt="App team member portrait photo" />
          </div>
        </div>

        <div className="h-full m-2 mt-[-15%] flex flex-col items-center bg-[#DCB288]">
          <h2 className={`font-bold ${expand ? "text-4xl mt-2" : "text-xl"}`}>
            {teamMember.name}
          </h2>
          <h3 className={`${expand ? "text-xl mt-2" : "text-xs"}`}>
            {teamMember.role}
          </h3>
          <ul
            className={`flex justify-center w-full 
            ${expand ? "text-2xl mt-2" : "text-s"}`}
          >
            {teamMember.socialMedia.map((sc) => (
              <li key={sc.key} className={`${expand ? "p-2" : "p-1 pt-2"}`}>
                <a href={sc.link} target="_blank">
                  <img
                    className={`${expand ? "h-[28px]" : "h-[16px]"}`}
                    src={sc.icon}
                    alt={sc.key}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleExpand}
          className={`w-full bg-[#C7AC8F] border-[#1B1107] 
          ${
            expand ? "px-4 py-2 border-4 text-2xl" : "px-2 py-1 border-2 text-s"
          }`}
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>
      {/* Right big card */}
      <div
        className={`bg-[#1B1107] border-[#DCB288] border-8 border-l-0 flex flex-col 
        ${expand ? "w-[75%] h-[100%] visible" : " hidden"}`}
      >
        <nav className="w-full flex justify-center p-4 text-[#DCB288] text-3xl">
          <ul className="flex justify-around w-[60%] ">
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

        <div className="px-8 h-[100%] overflow-scroll border-4 border-red-600">
          {memberInfo === "home" ? <Home teamMember={teamMember} /> : null}
          {memberInfo === "about" ? <About teamMember={teamMember} /> : null}
          {memberInfo === "education" ? (
            <Education teamMember={teamMember} />
          ) : null}
          {memberInfo === "work" ? <Work teamMember={teamMember} /> : null}
          {memberInfo === "contact" ? (
            <Contact teamMember={teamMember} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Home({ teamMember }) {
  return (
    <div className="w-full h-[100%] px-16 py-10 flex flex-col justify-center text-[#DCB288] text-3xl ">
      <div className="w-full">
        <h2 className="text-center text-5xl font-extrabold">
          {teamMember.name}
        </h2>
        <h3 className="text-center text-3xl font-extralight mt-4">
          {teamMember.role}
        </h3>
      </div>
    </div>
  );
}
function About({ teamMember }) {
  return (
    <div className="w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold">About Me</h2>
        <p className="mt-6 text-xl whitespace-pre-line">{teamMember.aboutMe}</p>
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Education({ teamMember }) {
  return (
    <div className="w-full h-[100%] border-4 border-blue-600 px-16 py-10 flex flex-col text-[#DCB288] text-3xl">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold">Education</h2>
        <p className="mt-6 text-xl whitespace-pre-line"></p>
      </div>
      <div className="w-full">
        <p>{teamMember.aboutMe}</p>
        <ul>
          {teamMember.hardSkills.map((hSkill) => (
            <li>{hSkill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function Work({ teamMember }) {
  return (
    <div className="w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold">Work</h2>
        <p className="mt-6 text-xl whitespace-pre-line"></p>
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Contact({ teamMember }) {
  return (
    <div className="w-full  h-[100%] px-16 py-10 flex flex-col text-[#DCB288] text-3xl">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold">Contact</h2>
        <p className="mt-6 text-xl whitespace-pre-line"></p>
      </div>
      <div className="w-full"></div>
    </div>
  );
}

export default AppTeamMember;
