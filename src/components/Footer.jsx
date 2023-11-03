import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/light.css";

function Footer() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-4 relative bottom-0 left-0 right-0 text-white text-2xl leading-6 box-border font-bold"
      style={{
        backgroundColor: "#1B1107",
        height: "60px",
      }}
    >
      <Tippy
        animation="perspective"
        theme={"light"}
        content={
          <h1 className="font-bold">Visit V46 Team 15's GitHub repository</h1>
        }
      >
        <p>
          © Dish Dive 2023 -
          <a
            className="no-underline"
            href="https://github.com/chingu-voyages/v46-tier2-team-15"
            target="_blank"
          >
            {" "}
            V46 Team 15{" "}
          </a>
          | All Rights Reserved
        </p>
      </Tippy>
    </div>
  );
}

export default Footer;
