import { IoSchoolSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";

const InstructorCard = () => {
  return (
    <div className="card group relative description rounded-2xl card-compact w-96 bg-base-200 mr-2 ml-2 shadow-xl">
      <div>
        <img
          className="rounded-t-2xl z-0 w-full"
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_350,h_231/q_auto,f_auto/redbullcom/2023/5/15/sbajrt66mlbxrjm9tcfi/tom-pidcock-xco-world-cup-nove-mesto-2023"
          alt="Shoes"
        />
      </div>
      <img
        className="group-hover:scale-110 duration-200 lg:w-[calc(8vw)] w-[calc(26vw)] lg:h-[calc(8vw)] h-[calc(26vw)] absolute lg:right-[calc(1vw)] right-[calc(4vw)] lg:bottom-[calc(25%)] bottom-[calc(27%)] rounded-full border-zinc-400 border-[2px] lg:border-[4px]"
        src="https://img.redbull.com/images/c_crop,x_154,y_0,h_2133,w_2133/c_fill,w_140,h_140/q_auto,f_auto/redbullcom/2022/2/11/tmq90ch5tbororfwlvgo/marc-marquez-portrait-sepang-2022"
        alt=""
      />
      <div className="card-body z-50">
        <h2 className="card-title text-yellow-500">Instructor Name</h2>
        <div className="text-white flex gap-2 items-center">
            <FaQuoteLeft className="text-lg" />
          <strong>&quot;I ride for pleasure&quot;</strong>
        </div>
        <div className="text-white flex gap-2 items-center">
          <IoSchoolSharp className="text-lg" />
          <strong>Student Count:</strong> 34
        </div>
        <div className="text-white flex gap-2 items-center">
            <GiTeacher className="text-lg" />
          <strong>Classes Taken:</strong> 34
        </div>        
      </div>
      <div className="absolute lg:bottom-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-base-100"></div>
    </div>
  );
};

export default InstructorCard;
