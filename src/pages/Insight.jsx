import { MdOutlineVisibility } from 'react-icons/md';
import pix from '../assets/16.jpg'
import { useEffect, useState } from 'react';
import { getstore } from '../api/StoreApi';

const Insight = () => {
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
    <div className="w-[100vw] h-[100vh] flex flex-wrap">
      {state?.map((props) => (
        <div className="w-[250px] h-[370px] border rounded mx-2 my-2">
          <div className="">
            <img className="w-[250px] h-[300px]" src={pix} alt="" />
            <div className="flex justify-center items-center mt-2">
              <div>
                <MdOutlineVisibility />
              </div>
              <div>
                <h2>(review)</h2>
              </div>
              <div>{props.title}</div>
              <div>₦{props.price * 20}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insight



