import { Link } from "react-router-dom";
import DishDiveLogoWhite from "../assets/logo/DishDive_Logo_White.png";

function Header() {
  return (
    <div className="w-full flex justify-between	 items-center bg-[url('https://s3-alpha-sig.figma.com/img/7585/90a8/bb1ecf9812ab72a3d5a19c1fa4c5fc9e?Expires=1698019200&Signature=mJmjrWPU3aQLghbhuTwW-h1rENx4xFLXOjJw9J3laS2DGklUs4JgbZ9Y~Hg5sF78HIBcABMqTdOgp8vaykVUXNupMP-bW4~YNfKolNEuKHkzJdtBGyOu0AIRDzg9Eo820Wd3zbfqThkf-SoeWYDBe8QCgCkTY~Q35jOIxodYT54WTcMXdpS31WGdVgHL~XVDWumMxUeWU02CFyuZvpr-U~w6iKbSbdyAsdanGvccpJ4VcRCcTrJpOMpF4VX-N6zL82-Aoykvf-x6LClRSclP6Pq3WeXw1wLAz7YXf~8ZaDrdKj6Glivz2jfdAPKDfh8xM5q9hoymq3n6TMwAU5RDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
      <div className="flex items-center ml-28">
        <img
          src={DishDiveLogoWhite}
          alt="DishDive_Logo_White"
          className="h-[8.75rem] w-[8.75rem] my-2.5 mr-[4.375rem]"
        />

        <h1 className="text-6xl text-white	">DISH DIVE</h1>
      </div>

      <ul className="flex mr-28">
        <li>
          <Link
            to="/about"
            className="text-white text-2xl border-[0.188rem] border-lime-700	 rounded-[100px] bg-white text-lime-700 font-extrabold	 ml-10 py-4 px-16 w-64	inline-block	text-center	"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className="text-white text-2xl border-[0.188rem] border-red-700	 rounded-[100px] bg-white text-red-700 font-extrabold	 ml-10 py-4 px-16 w-64	inline-block	text-center	"
          >
            App Team
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
