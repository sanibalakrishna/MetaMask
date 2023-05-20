import { FaCheckCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, age, name, location }) => {
  return (
    <div className="rounded-2xl p-4 flex flex-col justify-center items-center">
      <img src={image} alt={name} className=" rounded-2xl h-36 w-36" />
      <div className="text-center z-10">
        <p className="text-2xl font-semibold flex gap-2 items-center">
          {name},<span className="font-normal">{age}</span>
          <FaCheckCircle color="blue" />
        </p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
