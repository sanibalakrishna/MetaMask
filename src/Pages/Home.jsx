import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

function Home() {
  const [active, setActive] = useState(0);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "black" : "grey";
  };

  return (
    <div className="h-full w-full">
      {location.pathname == "/home" && <Chat />}
      {location.pathname == "/home/profile" && <Profile />}
      <div className="flex justify-around mt-5 absolute bottom-5 right-0 w-full">
        <Link to={"/home"}>
          <IoCopy
            size={24}
            color={isActive("/home")}
            onClick={() => setActive(0)}
          />
        </Link>

        <MdEmail
          size={24}
          color={active == 1 ? "black" : "grey"}
          onClick={() => setActive(1)}
        />

        <BsHeartFill
          size={24}
          color={active == 2 ? "black" : "grey"}
          onClick={() => setActive(2)}
        />
        <Link to={"/home/profile"}>
          <FaUserAlt
            size={24}
            color={isActive("/home/profile")}
            onClick={() => setActive(3)}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
