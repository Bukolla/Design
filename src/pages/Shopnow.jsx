import { MdOutlineVisibility } from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";

import pix from "../assets/16.jpg";
import { useEffect, useState } from "react";
import { getstore } from "../api/StoreApi";

const Shopnow = () => {

  const [state, setState] = useState([])

  const view = () => {
    getstore().then((res) => {
      setState(res);
    });
  };

  useEffect(() => {
    view();
  }, []);

  return (
    <div className="flex w-full flex-wrap p-2">
   
      {
        state?.map(props => (
          <div className="rounded border w-[250px] min-h-[350px] p-1 m-2 ">
   <div className="w-full h-[300px] relative ">
     <img className="w-full h-[300px] object-cover " src={pix} />

     <div className="absolute bottom-0 flex items-end h-[300px] justify-center w-full opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] duration-300 transition-all ">
       <div className="w-[30px] h-[30px] flex justify-center items-center mb-4 shadow-md bg-white rounded-[50%] hover:bg-[gray] hover:text-white duration-300 transition-all hover:cursor-pointer ">
         <MdOutlineVisibility />
       </div>
       <div className="w-[30px] h-[30px] flex justify-center items-center mb-4 shadow-md bg-white rounded-[50%] hover:bg-[gray] hover:text-white duration-300 transition-all hover:cursor-pointer ml-1">
         <BsMinecartLoaded />
       </div>
     </div>
   </div>
   <div className="justify-center flex w-full my-2">(review)</div>

   <div>{props.title}</div>
   <div className="justify-center flex w-full my-2 text-[20px] font-bold">
     ₦{props.price * 1000}
   </div>
 </div>
        ))
      }
      
    </div>
  );
};

export default Shopnow;
