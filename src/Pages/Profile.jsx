import {
  FaTelegramPlane,
  FaDiscord,
  FaFacebookMessenger,
  FaLinkedin,
  FaDribbble,
  FaPencilAlt,
} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ProfileCard from "../components/ProfileCard";

import { RiBoxingFill } from "react-icons/ri";
import { GiCoffeeCup, GiPaintBrush } from "react-icons/gi";
import { IoMusicalNotesSharp, IoBicycleSharp } from "react-icons/io5";
import first from "../assets/1.jpg";
function Profile() {
  const details = {
    image: first,
    age: 28,
    name: "Lay",
    location: "Praue,Czech Republic",
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <button className="bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center">
          <AiOutlineArrowLeft />
        </button>
        <p>Profile</p>
        <button className="bg-[#232323] h-12 w-12 rounded-full flex items-center justify-center text-white">
          <FaPencilAlt />
        </button>
      </div>
      <div>
        <ProfileCard {...details} />
      </div>
      <div className="flex justify-evenly">
        <button className="h-10 w-10 bg-gray-100 rounded-xl flex justify-center items-center">
          <FaTelegramPlane size={24} className="text-blue-400" />
        </button>
        <button className="h-10 w-10 bg-gray-100 rounded-xl flex justify-center items-center">
          <FaDiscord size={24} className="text-blue-700" />
        </button>
        <button className="h-10 w-10 bg-gray-100 rounded-xl flex justify-center items-center">
          <FaFacebookMessenger size={24} className="text-blue-500" />
        </button>
        <button className="h-10 w-10 bg-gray-100 rounded-xl flex justify-center items-center">
          <FaLinkedin size={24} className="text-blue-400" />
        </button>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Interests</p>
          <p className="text-slate-300">Edit</p>
        </div>
        <div className="flex flex-wrap gap-y-2 mt-4">
          <div className="w-1/3 bg-red-100 text-red-500 flex items-center justify-center py-2 rounded-full">
            <FaDribbble />
            Dribble
          </div>
          <div className="w-1/3 bg-orange-100 text-orange-500 flex items-center justify-center py-2 rounded-full">
            <RiBoxingFill />
            Boxing
          </div>
          <div className="w-1/3 bg-yellow-100 text-yellow-500 flex items-center justify-center py-2 rounded-full">
            <GiCoffeeCup />
            Coffee
          </div>
          <div className="w-1/3 bg-blue-100 text-blue-500 flex items-center justify-center py-2 rounded-full">
            <IoMusicalNotesSharp />
            Music
          </div>
          <div className="w-1/3 bg-red-100 text-red-500 flex items-center justify-center py-2 rounded-full">
            <GiPaintBrush />
            Design
          </div>
          <div className="w-1/3 bg-orange-100 text-orange-500 flex items-center justify-center py-2 rounded-full">
            <IoBicycleSharp />
            Cycling
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
