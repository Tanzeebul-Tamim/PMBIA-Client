import { FaChalkboardTeacher } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

const ClassCard = () => {
  return (
    <div className="card description rounded-2xl card-compact w-96 bg-base-200 mr-2 ml-2 shadow-xl">
      <div>
        <img
          className="rounded-t-2xl z-0 w-full"
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_350,h_231/q_auto,f_auto/redbullcom/2023/5/15/sbajrt66mlbxrjm9tcfi/tom-pidcock-xco-world-cup-nove-mesto-2023"
          alt="Shoes"
        />
      </div>
      <div className="card-body z-50">
        <h2 className="card-title text-yellow-500">Class Name</h2>
        <div className="text-white flex gap-2 items-center">
          <FaChalkboardTeacher className="text-lg" />
          <strong>Instructor:</strong> Fabio Wibmer
        </div>
        <div className="text-white flex gap-2 items-center">
          <IoSchoolSharp className="text-lg" />
          <strong>Attendees:</strong> 34
        </div>
      </div>
      <div className="absolute lg:bottom-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-base-100"></div>
    </div>
  );
};

export default ClassCard;
