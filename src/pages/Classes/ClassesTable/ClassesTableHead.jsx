const ClassesTableHead = () => {
    return (
        <thead className="bg-base-200">
          <tr className="text-white text-lg">
            <th className="">Image</th>
            <th className="">Topic</th>
            <th className="">Instructor</th>
            <th className="">Available Slots</th>
            <th className="">Price</th>
            <th className="">Add to wishlist</th>
          </tr>
        </thead>
    );
};

export default ClassesTableHead;