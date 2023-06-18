import { GiTeacher } from "react-icons/gi";
import EnrolledClassesTableHead from "./EnrolledClassesTableHead";


const EnrolledClassesTable = ({ userBookings }) => {

      if (userBookings?.length === 0) {
        return (
          <div className="flex h-screen items-center justify-center">
            <h1 className="z-[10] description text-5xl">
              You Haven&apos;t Enrolled In Any Classes Yet
            </h1>
          </div>
        );
      }
    
      return (
        <div className="overflow-x-auto">
          <div className="mb-5 flex justify-between gap-2 text-white description text-xl">
            <strong className="z-[100] flex items-center gap-2">
              <GiTeacher className="text-2xl" />
              <span>Enrolled Classes Count :</span>
              <span>{userBookings?.length}</span>
            </strong>{" "}
          </div>
          <table className="z-[100] table text-center description text-white">
            {/* head */}
            <EnrolledClassesTableHead />
            <tbody className="text-sm">
              {userBookings.map((classItem) => {
    
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
};

export default EnrolledClassesTable;