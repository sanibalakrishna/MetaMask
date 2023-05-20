import Card from "../components/Card";
import { FaBell } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsHeartFill } from "react-icons/bs";
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import fifth from "../assets/5.jpg";

function Chat() {
  const cards = [
    {
      id: 1,
      image: "src/assets/1.jpg",
      age: 25,
      name: "John Doe",
      location: "Developer",
    },
    {
      id: 2,
      image: "src/assets/2.jpg",
      age: 28,
      name: "Jane Smith",
      location: "Designer",
    },
    {
      id: 3,
      image: "src/assets/3.jpg",
      age: 25,
      name: "John Doe",
      location: "Developer",
    },
    {
      id: 4,
      image: "src/assets/4.jpg",
      age: 28,
      name: "Jane Smith",
      location: "Designer",
    },
    {
      id: 5,
      image: fifth,
      age: 28,
      name: "Jane Smith",
      location: "Designer",
    },

    // Add more card objects here
  ];
  return (
    <div>
      <header className="flex justify-between h-1/6 ">
        <div className="flex gap-2 items-center">
          <img src={first} className="h-12 rounded-full" />
          <p>
            Hi,<span className="font-bold">Lay</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <ImLocation2 size={24} />
          <FaBell size={24} />
        </div>
      </header>
      <div className="flex justify-center items-center mt-10 -ml-10">
        <div className="relative">
          <div className="absolute bottom-[40px] right-[-75px] w-64 flex items-center justify-center">
            <Card {...cards[2]} />
          </div>
          <div className="relative bottom-[20px] right-[-50px] mb-1 mr-1 w-64 flex items-center justify-center">
            <Card {...cards[1]} />
          </div>
          <div className="absolute bottom-0 right-0 mb-2 ml-2  w-64 flex items-center justify-center">
            <Card {...cards[0]} />
          </div>
        </div>
      </div>

      <div className="flex justify-between h-1/6 mt-3">
        <button className="bg-red-400 h-12 w-12 rounded-full text-white text-3xl flex items-center justify-center">
          x
        </button>
        <button className="text-3xl">👋️</button>
        <button className="bg-violet-400 h-12 w-12 rounded-full flex items-center justify-center">
          <BsHeartFill color="white" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
