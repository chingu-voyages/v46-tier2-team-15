/*
This page will open as a pop up in front of the App Team Page and 
it will be a page about a team member.
*/

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function AppTeamMember() {
  return (
    <div className="flex flex-col w-[12rem] h-[18rem] bg-[#DCB288] border-4 border-[#DCB288]">
      <div className="w-full bg-[#DCB288]">
        {/*  */}
        <div className="h-[50%] bg-[#1B1107] "></div>
        <div className="mx-auto my-[20%] w-3/5 relative top-[-50%] border-4 border-[#DCB288]">
          <img
            src="src\assets\contributors_photos\Drazen_Drinic.jpeg"
            alt="App team member portrait photo"
          />
        </div>
      </div>

      <div className="h-full m-2 mt-[-15%] flex flex-col items-center bg-[#DCB288]">
        <h2 className="text-xl font-bold ">Drazen Drinic</h2>
        <h3 className="text-xs">Web Developer</h3>
        <ul className="flex justify-center w-full text-s">
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
      <button className="w-full px-2 py-1 border-2 bg-[#C7AC8F] border-[#1B1107] text-s">
        Expand
      </button>
    </div>
  );
}

export default AppTeamMember;
