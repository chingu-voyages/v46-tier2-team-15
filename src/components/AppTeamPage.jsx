/*
This page will open between Header and Footer and 
it will be a page about team members who created the Dish Dive App.
*/
import AppTeamMember from "./AppTeamMember";

function AppTeamPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/*<h1 className="text-5xl">AppTeamPage component</h1>*/}
      <AppTeamMember />
    </div>
  );
}

export default AppTeamPage;
