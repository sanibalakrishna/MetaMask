import { BsArrowUpRight, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import fifth from "../assets/5.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Started() {
  return (
    <div>
      <div className="flex justify-start ">
        <p>
          <span className="font-bold">META</span>MATCH
        </p>
      </div>
      <div className="w-full">
        {/* <img src={first} className="h-28 rounded-full absolute top-3 right-2" />
        <img src={fourth} className="h-28 rounded-full absolute top-20 " />
        <img
          src={third}
          className="h-16 rounded-full absolute top-32 left-40"
        />
        <img
          src={second}
          className="h-28 rounded-full  absolute top-32 -right-10"
        />
  */}{" "}
        <div className="flex justify-end w-full -mt-10">
          <img src={fifth} className="h-24 rounded-full " />
        </div>
        <div className="flex items-center gap-3 rotate-12 w-full">
          <img src={first} className="h-24 rounded-full -rotate-12" />
          <img src={third} className="h-16 rounded-full -rotate-12" />
          <img src={fourth} className="h-24 rounded-full -rotate-12" />
        </div>
        <div className="flex items-center  gap-4 z-10 rotate-12 w-full -ml-10 ">
          <img src={fifth} className="h-24 rounded-full -rotate-12" />
          <img src={second} className="h-28 rounded-full -rotate-12" />
          <img src={fourth} className="h-24 rounded-full -rotate-12" />
        </div>
      </div>
      <div>
        <p className="font-medium text-3xl mt-5">
          Find your <span className="text-red-200">first meta</span> matches.{" "}
        </p>
        <p>Join us and socialize with millions of meta humans</p>
      </div>
      <div className="flex justify-between w-full mt-5">
        <Link to={"/home"}>
          <button className="flex items-center bg-[#232323] text-white text-sm rounded-2xl px-6 py-4 active:scale-95">
            Get Started <BsArrowUpRight />
          </button>
        </Link>
        <button className="flex items-center justify-center bg-[#eef0f2] py-2 px-4 rounded-2xl">
          <BsApple size={26} />
        </button>
        <button className="flex items-center justify-center bg-[#eef0f2] py-2 px-4 rounded-2xl">
          <FcGoogle size={24} />
        </button>
      </div>
      <div className="mt-3">
        <p className="text-[#d2d1d4] text-sm">
          Already have an account? <span className="text-red-200">Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default Started;
