import { useState } from "react";
import ClassesTableHead from "./ClassesTableHead";
import { useEffect } from "react";
import { getTotalClasses } from "../../../api/auth";

const ClassesTable = ({ classes }) => {
  const [totalClasses, setTotalClasses] = useState({});

  useEffect(() => {
    getTotalClasses()
      .then((data) => {
        setTotalClasses(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="overflow-x-auto pt-10">
      <h1 className="mb-5 text-white description text-xl">
        <strong>Classes Count :</strong> {totalClasses.totalClasses}
      </h1>
      <table className="table text-center description text-white">
        {/* head */}
        <ClassesTableHead />
        <tbody className="text-xl">
          {classes.map((classItem) => {
            return (
              <tr key={classItem._id}>
                <td className="flex justify-center">
                    <img
                      className="w-32 rounded-xl h-16"
                      src={classItem.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.instructorName}</div>
                  </div>
                </td>
                <td>{classItem.studentSlot - classItem.totalStudent}</td>
                <td>$ {classItem.price}</td>
                <td>
                  <div className="btn btn-sm rounded-full hover:bg-stone-700 bg-stone-800">
                    Add To Wishlist
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

export default ClassesTable;
