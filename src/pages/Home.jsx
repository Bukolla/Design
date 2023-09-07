import pix from "../assets/16.jpg";
import {FiSearch} from "react-icons/fi"
import { RiTeamFill } from "react-icons/ri";
import { GiTeapotLeaves } from "react-icons/gi";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div className="w-[1100px] h-[400px] my-4">
        <div
          className="w-[1100px] min-h-[450px] rounded "
          style={{
            backgroundImage: `url(${pix})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[1100px] h-[400px]">
            <div className="w-[1100px] h-20 flex justify-center items-center">
              <div className="flex mx-5 my-5">
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
                <div className="w-[100px] h-10 rounded-[20px] mx-3 bg-black text-white flex justify-center items-center">
                  <h3>Discover</h3>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="mt-12 flex justify-center items-center font-bold text-[28px]">
                Explore the world’s leading design portfolios
              </h2>

              <h2 className="mt-5 flex justify-center items-center ">
                Explore the world’s leading design portfolios Explore the
                world’s leading design
                <br />
                portfolios Explore the world’s leading design portfolios
              </h2>
            </div>
            <div className="flex justify-center items-center w-[800px] h-14 bg-white rounded-[20px] mt-5 ml-40">
              <div className="flex justify-center items-center mr-96">
                <FiSearch />
                <input placeholder="Search..." />
              </div>
            </div>
            <div className="w-[1100px] h-36 mb-10 flex justify-center items-center bg-black">
              <div className="w-[1100px] h-20 flex justify-center items-center">
                <div className="flex mx-5 my-5">
                  <div className="w-[100px] h-10 rounded-[20px] mx-3 border text-white flex justify-center items-center">
                    <h3>Discover</h3>
                  </div>
                  <div className="w-[100px] h-10 rounded-[20px] mx-3 border text-white flex justify-center items-center">
                    <h3>Discover</h3>
                  </div>
                  <div className="w-[100px] h-10 rounded-[20px] mx-3 border text-white flex justify-center items-center">
                    <h3>Discover</h3>
                  </div>
                  <div className="w-[100px] h-10 rounded-[20px] mx-3 border text-white flex justify-center items-center">
                    <h3>Discover</h3>
                  </div>
                  <div className="w-[100px] h-10 rounded-[20px] mx-3 border text-white flex justify-center items-center">
                    <h3>Discover</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1100px] h-[300px] my-8 flex justify-center">
          <div className="w-[350px] h-[250px] rounded">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix}
              alt=""
            />
            <div className="flex justify-between">
              <h3 className="mt-3 ml-2 font-semibold">Relentless</h3>
              <div className="flex">
                <RiTeamFill className="mt-4 ml-5" />
                <GiTeapotLeaves className="mt-4 ml-5" />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[250px] rounded ml-4">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix}
              alt=""
            />
            <div className="flex justify-between">
              <h3 className="mt-3 ml-2 font-semibold">Relentless</h3>
              <div className="flex">
                <RiTeamFill className="mt-4 ml-5" />
                <GiTeapotLeaves className="mt-4 ml-5" />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[250px] rounded ml-4">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix}
              alt=""
            />
            <div className="flex justify-between">
              <h3 className="mt-3 ml-2 font-semibold">Relentless</h3>
              <div className="flex">
                <RiTeamFill className="mt-4 ml-5" />
                <GiTeapotLeaves className="mt-4 ml-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
