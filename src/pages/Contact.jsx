import { GiTeapotLeaves } from "react-icons/gi"
import pix2 from "../assets/24.jpg"
import { RiTeamFill } from "react-icons/ri"

const Contact = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center">
        <div className=" w-[85%] h-[500px] my-4 flex">
          <div className="w-[350px] h-[250px] rounded">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix2}
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
          <div className="w-[350px] h-[250px] rounded ml-2">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix2}
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
          <div className="w-[350px] h-[250px] rounded ml-2">
            <img
              className="w-[400px] h-[250px] rounded object-cover"
              src={pix2}
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

export default Contact
