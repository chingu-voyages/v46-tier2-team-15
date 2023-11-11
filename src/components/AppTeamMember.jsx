/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/
import React from "react";
import '../App.css';
import { ThemeContext } from '../App';
import { useEffect, useState, useContext } from "react";


import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

function AppTeamMember({ teamMember, visibility, toggleVisibility }) {
  const themeData = useContext(ThemeContext);
  const {theme , toggleTheme} = themeData;
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
      ${expand ? "w-full h-[100%] flex-col md:flex-row" : "flex-col m-3"} 
      ${visibility ? "visible " : expand ? "visible" : "hidden"}`}
    >
      {/* Small card */}
      <div
        className={`flex atm-card
        ${
          expand
            ? "h-[100px] md:h-auto flex-row	justify-between items-center md:flex-col md:w-[25%]  border-2 md:border-8 md:h-auto"
            : "flex-col w-[12.5rem] md:h-[19rem] border-4 h-full"
        }`}
      >
        <div className="card-center md:w-full md:h-full">
          {/*  */}
          <div
            className={`h-[50%] bg-[#1B1107] ${
              expand ? "h-full md:h-[50%]" : ""
            }`}
          ></div>
          <div
            className={`member-image mx-auto my-[20%] w-3/4 md:w-3/5 relative top-[-50%]
            ${
              expand
                ? "top-[-120%] md:top-[-50%] my-0 md:my-[20%] border-2 md:border-8 w-[100px]"
                : "border-4"
            }`}
          >
            <img
              src={teamMember.photo}
              alt="App team member portrait photo "
              className={`${expand ? "h-full" : ""}`}
            />
          </div>
        </div>

        <div className="member-detail h-full m-2 flex flex-col items-center">
          <h2
            className={`member-name font-bold ${
              expand
                ? "mt-0 md:mt-[-15%]  text-lg md:text-3xl lg:text-2xl mt-2"
                : "text-[18px] mt-[-15%]"
            }`}
          >
            {teamMember.name}
          </h2>
          <h3 className={`${expand ? "text-sm md:text-xl mt-2" : "text-[14px]"}`}>
            {teamMember.role}
          </h3>
          <ul
            className={`flex justify-center w-full 
            ${expand ? "text-2xl mt-2" : "text-s"}`}
          >
            {teamMember.socialMedia.map((sc) => (
              <li
                key={sc.key}
                className={`${expand ? "p-1 md:p-2" : "p-1 pt-2"}`}
              >
                <a href={sc.link} target="_blank">
                  <img
                    className={`${
                      expand ? "h-[16px] md:h-[28px]" : "h-[16px]"
                    }`}
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
          className={`md:w-full toggle-btn 
          ${
            expand
              ? "w-[20%] md:w-full md:px-4 md:p-2  border-2 text-base md:border-4 md:text-2xl"
              : "px-2 py-1 border-2 text-xs mb-[15px]"
          }`}
        >
          {expand ? (
            <span className="text-xs md:text-base lg:text-2xl">Collapse</span>
          ) : (
            <span>Expand</span>
          )}
        </button>
      </div>
      {/* Right big card */}
      <div
        className={`big-atm-card pb-6 bg-[#1B1107]  border-2 md:border-8 md:border-l-0 flex flex-col 
        ${expand ? "w-full md:w-[75%] h-[100%] visible" : " hidden"}`}
      >
        <nav className="w-full flex justify-center p-4 text-lg md:text-3xl">
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

        <div className="md:px-8 h-[100%] overflow-auto scrollbar-hide ">
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
    <div className="w-full h-[100%] md:px-8 md:py-10 flex flex-col justify-center md:text-3xl leading-snug">
      <div className="w-full">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold">
          {teamMember.name}
        </h2>
        <h3 className="text-center md:text-3xl font-extralight mt-4">
          {teamMember.role}
        </h3>
      </div>
    </div>
  );
}
function About({ teamMember }) {
  return (
    <div className="w-full  h-[100%] md:px-8 md:py-10 flex flex-col text-base leading-snug">
      <div className="w-full">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold px-4">About Me</h2>
          <p className="my-4 pb-2 px-4 whitespace-pre-line text-sm md:text-base">
            {teamMember.aboutMe}
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center basis-1/2 h-[100%]">
            <h3 className="font-bold">Hard Skills</h3>
            {teamMember.hardSkills.map((hSkill) => (
              <div className="skills-div p-1 mt-2 w-[80%] border-2 rounded-3xl md:rounded-full border-[#DCB288]">
                <div className="skills-bg px-2 py-1 text-center rounded-2xl md:rounded-full bg-[#DCB288] h-[30px] md:h-auto flex items-center justify-center">
                  <h3 className="text-[#1B1107] text-xs md:text-sm  font-bold leading-3">
                    {hSkill}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center basis-1/2 h-[100%]">
            <h3 className="font-bold">Soft Skills</h3>
            {teamMember.softSkills.map((sSkill) => (
              <div className="skills-div p-1 mt-2 w-[80%] border-2 rounded-3xl md:rounded-full border-[#DCB288]">
                <div className="skills-bg bg-[#DCB288] px-2 py-1 text-center rounded-2xl md:rounded-full h-[30px] md:h-auto flex items-center justify-center">
                  <h3 className="text-[#1B1107] text-xs md:text-sm font-bold leading-3">
                    {sSkill}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Education({ teamMember }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full  h-[100%] md:px-8 md:py-10 flex flex-col text-base leading-snug">
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold px-4">Education</h2>

        {teamMember.education.map((school) => (
          <div
            className="education-div my-4 pb-2 px-4 border-b-2 border-[#DCB288]"
            key={school.degree}
          >
            <h2 className="text-lg md:text-xl font-bold">{school.degree}</h2>
            <h3>
              <span>{school.schoolName}</span>・<span>{school.location}</span>
            </h3>
            <h3>
              <span>
                {month[school.startDate.getMonth()]}{" "}
                {school.startDate.getFullYear().toString()}{" "}
              </span>
              {" - "}
              <span>
                {school.endDate === "Present"
                  ? "Present"
                  : month[school.endDate.getMonth()] +
                    " " +
                    school.endDate.getFullYear().toString()}
              </span>
            </h3>

            <div>
              <p className="mt-4 whitespace-pre-line text-sm md:text-base">
                {school.description}
              </p>
              <p className="mt-4">
                <span className="font-bold">Skills: </span>
                {school.skills.map((skill) => (
                  <span className="text-sm md:text-base" key={skill}>
                    {" "}
                    ・{skill}・{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Work({ teamMember }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getEmploymentDuration(startDate, endDate) {
    const endYearX = endDate === "Present" ? new Date() : endDate;
    const totalMonths =
      (endYearX.getFullYear() - startDate.getFullYear()) * 12 +
      (endYearX.getMonth() - startDate.getMonth());
    const years = parseInt(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} yr ${months} mos`;
  }
  return (
    <div className="w-full  h-[100%] md:px-8 md:py-10 flex flex-col text-base leading-snug">
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold px-4">Work</h2>

        {teamMember.work.map((job) => (
          <div
            className="work-div my-4 pb-2 px-4 border-b-2 border-[#DCB288]"
            key={job.title}
          >
            <h2 className="text-lg md:text-xl font-bold">{job.title}</h2>
            <h3>
              <span>{job.companyName}</span>・<span>{job.employmentType}</span>
            </h3>
            <h3>
              <span>
                {month[job.startDate.getMonth()]}{" "}
                {job.startDate.getFullYear().toString()}{" "}
              </span>
              {" - "}
              <span>
                {job.endDate === "Present"
                  ? "Present"
                  : month[job.endDate.getMonth()] +
                    " " +
                    job.endDate.getFullYear().toString()}
              </span>
              ・<span>{getEmploymentDuration(job.startDate, job.endDate)}</span>
            </h3>
            <h3>
              {job.location}・{job.locationType}
            </h3>

            <div>
              <p className="mt-4 whitespace-pre-line text-sm md:text-base">
                {job.description}
              </p>
              <p className="mt-4">
                <span className="font-bold">Skills: </span>
                {job.skills.map((skill) => (
                  <span className="text-sm md:text-base" key={skill}>
                    {" "}
                    ・{skill}・{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full"></div>
    </div>
  );
}
function Contact({ teamMember }) {
  return (
    <div className="w-full  h-[100%] md:px-8 md:py-10 flex flex-col text-base leading-snug">
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold px-4">Contact</h2>
        <p className="mt-6 text-sm md:text-base lg:text-xl whitespace-pre-line"></p>
      </div>
      <div className="w-full"></div>
    </div>
  );
}

export default AppTeamMember;
