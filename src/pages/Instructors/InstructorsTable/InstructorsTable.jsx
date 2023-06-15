import { useEffect, useState } from "react";
import { getTotalInstructors } from "../../../api/api";
import InstructorsTableHead from "./InstructorsTableHead";

const InstructorsTable = ({ instructors }) => {
  const [totalInstructors, setTotalInstructors] = useState({});

  useEffect(() => {
    getTotalInstructors()
      .then((data) => {
        setTotalInstructors(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="overflow-x-auto pt-10">
      <h1 className="mb-5 text-white description text-xl">
        <strong>Instructors Count :</strong> {totalInstructors.totalInstructors}
      </h1>
      <table className="table text-center description text-white">
        {/* head */}
        <InstructorsTableHead />
        <tbody className="text-xl">
          {instructors.map((instructor) => {
            return (
              <tr key={instructor._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={instructor.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{instructor.name}</div>
                  </div>
                  <span className="badge badge-ghost badge-md text-white">
                    {instructor.email}
                  </span>
                </td>
                <td>
                  <div>
                    <div className="quote">{instructor?.quote}</div>
                  </div>
                </td>
                <td>{instructor.classes.length}</td>
                <td>
                  <div className="btn btn-sm rounded-lg hover:bg-stone-700 bg-stone-800">
                    See {instructor.name.split(" ")[0]}&apos;s Classes
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

export default InstructorsTable;
