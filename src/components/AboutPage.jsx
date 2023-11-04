import { contents } from "../data/aboutPageContent";
/*
This page will open between Header and Footer and 
it will be a page about the Dish Dive App.
*/
function AboutPage() {
  const contentsArray = contents.map((contentItem) => {
    return (
      <div key={contentItem.id}>
        <h3 className="text-white text-left text-[24px] lg:text-[32px] xl:text-[48px] mb-[10px]">
          {contentItem.heading}
        </h3>
        <p className="text-white text-left text-[14px] lg:text-[16px] xl:text-[20px] mb-[20px]">
          {contentItem.text}
        </p>
      </div>
    );  
  });
  return (
    <div className="w-full flex flex-col justify-center items-center about-page">
      <div className="w-full bg-[#1B1107]">
      <div className="py-[32px] px-[20px] pb-[50px] xl:pb-[100px] md:pb-[80px] p-[15px] md:p-[30px] xl:px-[120px] bg-[url('/src/assets/page-images/hero-section.png')] text-center bg-cover opacity-90">
        {contentsArray}
      </div>
    </div>
    </div>
  );
}

export default AboutPage;
