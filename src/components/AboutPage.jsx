import { contents } from "../data/aboutPageContent";
import { ThemeContext } from '../App';
import { useContext } from "react";
// import {AboutBgDark} from '../src/assets/page-images/AboutBgDark.jpeg';
// import {AboutBgLight} from '../src/assets/page-images/AboutBgLight.jpeg';



/*
This page will open between Header and Footer and 
it will be a page about the Dish Dive App.
*/
function AboutPage() {
    const themeData = useContext(ThemeContext);
    const {theme , toggleTheme} = themeData;
  const contentsArray = contents.map((contentItem) => {
    return (
      <div key={contentItem.id}  className="about-text">
        <h3 className="about-header text-left text-[18px] tracking-widest lg:text-[20px] xl:text-[28px] mb-[10px] font-bold">
          {contentItem.heading}
        </h3>
        <p className="about-text text-left text-[14px] lg:text-[14px] xl:text-[17px] mb-[20px] md:w-2/4">
          {contentItem.text}
        </p>
      </div>
    );
  });
  return (
    <div className="w-full h-[100%] flex flex-col overflow-auto scrollbar-hide">
      {/* <div className="w-full bg-[#1B1107] "> */}
       <div
          className={`px-[60px] md:px-[80px] py-[32px] xl:px-[120px] pb-[100px] ${
            theme === 'dark'
              ? `bg-[url('../src/assets/page-images/AboutBgDark.jpeg')]`
              : `bg-[url('../src/assets/page-images/AboutBgLight.jpeg')]`
          } bg-cover`}
        >
          {contentsArray}
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutPage;
