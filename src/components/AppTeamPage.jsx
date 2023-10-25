/*
This page will open between Header and Footer and 
it will be a page about team members who created the Dish Dive App.
*/
import AppTeamMember from "./AppTeamMember";
import teamMembers from "../assets/contributors";

function AppTeamPage() {
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center bg-[#1B1107] px-[120px]">
      {/*<h1 className="text-5xl">AppTeamPage component</h1>*/}
      <AppTeamMember teamMember={teamMembers[1]} />
    </div>
  );
}

export default AppTeamPage;
