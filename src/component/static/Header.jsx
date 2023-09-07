import pix from "../../assets/16.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-between">
      <div className="w-[85%] h-16 my-2 mx-2 flex justify-between">
        <div className="w-12 h-12 rounded-[20px]">
          <img src={pix} alt="" />
        </div>
        <div className="flex font-bold my-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-black" : "text-black"
            }
          >
            <div className="mx-2 hover:cursor-pointer hover:scale-100">
              Home
            </div>
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-black" : "text-black"
            }
          >
            <div className="mx-2">About</div>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-black" : "text-black"
            }
          >
            <div className="mx-2">Contact</div>
          </NavLink>

          <NavLink
            to="shopnow"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-black" : "text-black"
            }
          >
            <div className="mx-2">Shopnow</div>
          </NavLink>

          <NavLink
            to="insight"
            className={({ isActive }) =>
              isActive ? "text-amber-700 font-black" : "text-black"
            }
          >
            <div className="mx-2">Insight</div>
          </NavLink>

          <NavLink
            to="feyi"
            className={({ isActive }) =>
              isActive ? "text-teal-500 font-black" : "text-black"
            }
          >
            <div className="mx-2">Feyi</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header
