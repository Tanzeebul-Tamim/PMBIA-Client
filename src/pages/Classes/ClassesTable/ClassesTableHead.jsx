const ClassesTableHead = ({ userDetails, userLoading, loading }) => {
  return (
    <thead className="bg-base-200">
      <tr className="text-white text-lg">
        <th className="">No</th>
        <th className="">Image</th>
        <th className="">Course</th>
        <th className="">Instructor</th>
        <th className="">Available Slots</th>
        <th className="">Price</th>
        {userDetails.role !== "Instructor" && !loading && !userLoading && (
          <th className="">Book Courses</th>
        )}
      </tr>
    </thead>
  );
};

export default ClassesTableHead;
