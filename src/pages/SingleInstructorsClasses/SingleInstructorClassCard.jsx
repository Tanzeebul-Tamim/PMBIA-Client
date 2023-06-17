import { BsFillPersonPlusFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { MdLibraryAdd } from "react-icons/md";

const SingleInstructorClassCard = ({ classItem }) => {
  const availableSeat = classItem.studentSlot - classItem.totalStudent;

  return (
    <div className="group card relative h-full description rounded-2xl card-compact w-full bg-base-200 shadow-xl">
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
        {availableSeat == 0 ? (
          <div className="text-white flex gap-2 items-center">
            <p className="text-red-600 font-bold">Fully Booked</p>
          </div>
        ) : (
          <div className="text-white flex gap-2 items-center">
            <BsFillPersonPlusFill className="text-lg" />
            <strong>Available Slot:</strong>{" "}
            {availableSeat}
          </div>
        )}
        <button
          disabled={availableSeat == 0 && true}
          className="disabled:bg-stone-800 btn btn-sm rounded-full hover:bg-stone-700 border-0 bg-base-100"
        >
          <MdLibraryAdd /> <span>Book Class</span>
        </button>
      </div>
      <div className="absolute lg:bottom-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-base-100"></div>
    </div>
  );
};

export default SingleInstructorClassCard;
