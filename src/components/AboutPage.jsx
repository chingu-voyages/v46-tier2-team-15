import { contents } from "../data/aboutPageContent";
/*
This page will open between Header and Footer and 
it will be a page about the Dish Dive App.
*/
function AboutPage() {
  const contentsArray = contents.map((contentItem) => {
    return (
      <div key={contentItem.id}>
        <h3 className="text-white text-left text-[18px] lg:text-[24px] xl:text-[32px] mb-[10px] font-bold">
          {contentItem.heading}
        </h3>
        <p className="text-white text-left text-[14px] lg:text-[16px] xl:text-[20px] mb-[20px] md:w-2/4">
          {contentItem.text}
        </p>
      </div>
    );
  });
  return (
    <div className="w-full h-[100%] flex flex-col overflow-auto scrollbar-hide">
      <div className="w-full bg-[#1B1107]">
        <div className="px-[60px] md:px-[80px] py-[32px] xl:px-[120px] pb-[100px] bg-[url('/src/assets/page-images/hero-section.png')]  bg-cover opacity-90">
          {contentsArray}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
