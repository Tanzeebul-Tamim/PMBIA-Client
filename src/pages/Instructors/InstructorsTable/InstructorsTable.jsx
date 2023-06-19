import { useEffect, useState } from "react";
import { getTotalInstructors } from "../../../api/api";
import InstructorsTableHead from "./InstructorsTableHead";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";

const InstructorsTable = ({ instructors, tableRef }) => {
  const [totalInstructors, setTotalInstructors] = useState({});

  useEffect(() => {
    getTotalInstructors()
      .then((data) => {
        setTotalInstructors(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {instructors.length == 0 ? (
        <div className="text-5xl flex justify-center py-28">
          <h1>No results found for your search</h1>
        </div>
      ) : (
        <div ref={tableRef} className="overflow-x-auto pt-10">
          <div className="mb-5 flex gap-2 text-white description text-xl">
            <strong className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-2xl" />
              <span>Instructors Count :</span>
            </strong>{" "}
            {totalInstructors.totalInstructors}
          </div>
          <table className="table text-center description text-white">
            {/* head */}
            <InstructorsTableHead />
            <tbody className="text-xl">
              {instructors.map((instructor, index) => {
                return (
                  <tr key={instructor._id}>
                    <td>
                     {index + 1}
                    </td>
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
                    <td>{instructor?.classes?.length}</td>
                    <td>
                      <Link
                      to={`/instructor/${instructor._id}`}
                      className="btn text-white btn-sm rounded-lg hover:bg-stone-700 bg-stone-800">
                        See {instructor.name.split(" ")[0]}&apos;s Courses
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default InstructorsTable;
