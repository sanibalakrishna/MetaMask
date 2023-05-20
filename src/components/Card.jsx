import { useState } from "react";
import {
  FaVideo,
  FaVideoSlash,
  FaPauseCircle,
  FaPlayCircle,
} from "react-icons/fa";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
const Card = ({ id, age, name, location }) => {
  const [options, setOptions] = useState({
    video: true,
    sound: true,
    mic: false,
  });
  const [play, setPlay] = useState(false);
  return (
    <div
      className={`rounded-3xl bg-[url("src/assets/1.jpg")] bg-cover   h-80 w-64 shadow-md p-4`}
    >
      <div className="flex flex-col gap-2">
        <button
          className={`flex justify-center items-center h-10 w-10 rounded-full ${
            options.video ? "bg-[#ffffff] " : "bg-[#ffffff60]"
          }`}
          onClick={() => setOptions({ ...options, video: !options.video })}
        >
          {options.video ? (
            <FaVideoSlash color="orange" />
          ) : (
            <FaVideo color="white" />
          )}
        </button>
        <button
          className={`flex justify-center items-center h-10 w-10 rounded-full ${
            options.sound ? "bg-[#ffffff] " : "bg-[#ffffff60]"
          }`}
          onClick={() => setOptions({ ...options, sound: !options.sound })}
        >
          {options.sound ? (
            <HiSpeakerXMark color="orange" />
          ) : (
            <HiSpeakerWave color="white" />
          )}
        </button>
        <button
          className={`flex justify-center items-center h-10 w-10 rounded-full ${
            options.mic ? "bg-[#ffffff] " : "bg-[#ffffff60]"
          }`}
          onClick={() => setOptions({ ...options, mic: !options.mic })}
        >
          {options.mic ? (
            <BiMicrophoneOff color="orange" />
          ) : (
            <BiMicrophone color="white" />
          )}
        </button>
      </div>
      <div className="absolute bottom-5 text-white ">
        <p className="text-2xl font-semibold flex gap-2 items-center">
          {name},<span className="font-normal">{age}</span>
        </p>
        <p className="text-sm text-start">{location}</p>
      </div>
      <div
        className="flex justify-center items-center bg-white h-16 w-16 rounded-full absolute -bottom-5 left-[40%]"
        onClick={() => setPlay(!play)}
      >
        {play ? (
          <div>
            <FaPauseCircle size={50} />
          </div>
        ) : (
          <div>
            <FaPlayCircle size={50} />
          </div>
        )}
      </div>
      <div className="flex items-center bg-white h-2 w-14 rounded-full absolute bottom-3 right-5">
        <div className="ml-0.5 bg-black h-1.5 w-7 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card;
