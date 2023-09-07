import React from 'react';
import pix from "../assets/16.jpg";
import { BsMinecartLoaded } from "react-icons/bs";

const Feyi = () => {
  return (
    <div className="w-full h-[100vh] bg-teal-500">
      <div className="w-[300px] h-[400px] border rounded mx-2">
        <img className="w-[300px] h-[300px]" src={pix} alt="" />
        <div className="flex justify-center items-center ">
          <div className="flex">
            <BsMinecartLoaded
           />
            <BsMinecartLoaded />
          </div>
          <h3>hljj</h3>
        </div>
      </div>
    </div>
  );
}

export default Feyi
