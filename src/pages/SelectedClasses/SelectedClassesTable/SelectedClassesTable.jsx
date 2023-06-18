import { GiTeacher } from "react-icons/gi";
import SelectedClassesTableHead from "./SelectedClassesTableHead";
import { BsFillCreditCardFill, BsFillTrash3Fill } from "react-icons/bs";
import { deleteAllClass, deleteClass } from "../../../api/bookApi";
import { Link } from "react-router-dom";

const SelectedClassesTable = ({ userBookings, userDetails }) => {
  const handleClearList = () => {
    deleteAllClass(userDetails._id);
  };

  if (userBookings?.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="z-[10] description text-5xl">
          You Haven&apos;t Booked Any Classes Yet
        </h1>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="mb-5 flex justify-between gap-2 text-white description text-xl">
        <strong className="z-[100] flex items-center gap-2">
          <GiTeacher className="text-2xl" />
          <span>Booked Classes Count :</span>
          <span>{userBookings?.length}</span>
        </strong>{" "}
        <button
          onClick={handleClearList}
          className="z-[100] btn text-white btn-xs text-sx border-0 rounded-lg hover:bg-stone-700 bg-stone-800"
        >
          <span>Clear List</span>
        </button>
      </div>
      <table className="z-[100] table text-center description text-white">
        {/* head */}
        <SelectedClassesTableHead />
        <tbody className="text-sm">
          {userBookings.map((classItem) => {
            const handleDelete = (studentId, instructorId, classIndex) => {
              deleteClass(studentId, instructorId, classIndex);
            };

            return (
              <tr className="" key={classItem._id}>
                <td className="flex justify-center">
                  <img
                    className="w-16 rounded-xl h-8"
                    src={classItem.classImage}
                  />
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem["class-name"]}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.instructorName}</div>
                  </div>
                </td>
                <td>$ {classItem.classFee}</td>
                <td>
                  <Link 
                    to={`/dashboard/payment/${classItem.studentId}/${classItem._id}`}
                    className="btn text-white btn-xs text-sx border-0 rounded-lg hover:bg-stone-700 bg-stone-800"
                  >
                    <BsFillCreditCardFill /> <span>Pay</span>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDelete(
                        classItem.studentId,
                        classItem.instructorId,
                        classItem.classIndex
                      )
                    }
                    className="btn text-white btn-xs text-sx border-0 rounded-lg hover:bg-stone-700 bg-stone-800"
                  >
                    <BsFillTrash3Fill /> <span>Delete</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClassesTable;
