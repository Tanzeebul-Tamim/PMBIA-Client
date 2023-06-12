import { MdOutlineSchool } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineTrophy } from "react-icons/ai";

const InstructorCard = () => {
  return (
    <div className="card relative description rounded-2xl card-compact w-96 bg-base-200 mr-2 ml-2 shadow-xl">
      <div>
        <img
          className="rounded-t-2xl z-0 w-full"
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_350,h_231/q_auto,f_auto/redbullcom/2023/5/15/sbajrt66mlbxrjm9tcfi/tom-pidcock-xco-world-cup-nove-mesto-2023"
          alt="Shoes"
        />
      </div>
      <img
        className="lg:w-[145px] w-[85px] lg:h-[145px] h-[85px] absolute right-3 bottom-[25%] lg:bottom-[20%] rounded-full border-zinc-400 border-[2px] lg:border-[4px]"
        src="https://img.redbull.com/images/c_crop,x_154,y_0,h_2133,w_2133/c_fill,w_140,h_140/q_auto,f_auto/redbullcom/2022/2/11/tmq90ch5tbororfwlvgo/marc-marquez-portrait-sepang-2022"
        alt=""
      />
      <div className="card-body z-50">
        <h2 className="card-title text-yellow-600">Instructor Name</h2>
        <div className="flex gap-2 items-center">
          <MdOutlineSchool className="text-lg" />
          <strong>Student Count:</strong> 34
        </div>
        <div className="flex gap-2 items-center">
            <AiOutlineTrophy className="text-lg" />
          <strong>National Awards:</strong> 34
        </div>
        <div className="flex gap-2 items-center">
            <GiTeacher className="text-lg" />
          <strong>Classes Taken:</strong> 34
        </div>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-base-100"></div>
    </div>
  );
};

export default InstructorCard;
