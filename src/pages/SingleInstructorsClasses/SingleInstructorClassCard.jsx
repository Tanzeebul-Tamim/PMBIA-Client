import { BsFillPersonPlusFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";

const SingleInstructorClassCard = ({ classItem }) => {
  return (
    <div className="group card relative h-full description rounded-2xl card-compact w-full lg:ml-3 lg:mr-3 bg-base-200 shadow-xl">
      <div>
        <img
          className="rounded-t-2xl h-[240px] z-0 w-full"
          src={classItem.image}
        />
      </div>
      <div className="card-body z-50">
        <h2 className="card-title text-yellow-500">{classItem.name}</h2>
        <div className="text-white flex gap-2 items-center">
          <ImPriceTags className="text-lg" />
          <strong>Price:</strong> $ {classItem.price}
        </div>
        <div className="text-white flex gap-2 items-center">
          <BsFillPersonPlusFill className="text-lg" />
          <strong>Available Slot:</strong>{" "}
          {classItem.studentSlot - classItem.totalStudent}
        </div>
        <div className="btn btn-sm rounded-full hover:bg-stone-800 border-0 bg-base-100">
          Add Class
        </div>
      </div>
      <div className="absolute lg:bottom-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-base-100"></div>
    </div>
  );
};

export default SingleInstructorClassCard;
