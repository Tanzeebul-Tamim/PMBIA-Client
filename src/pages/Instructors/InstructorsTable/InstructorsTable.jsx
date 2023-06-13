const InstructorsTable = () => {
  return (
    <div className="overflow-x-auto pt-10 pb-24">
      <table className="table text-center description text-white">
        {/* head */}
        <thead className="bg-base-200">
          <tr className="text-white text-lg">
            <th className="">Image</th>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Classes Taken</th>
            <th className="">See Classes</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          <tr>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-24 h-24">
                  <img
                    src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/23/t9diy35ew60j2jvf2xkd/fabio-wibmer-team-fabio-wibmer"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>
              <div>
                <div className="font-bold">Fabio Wibmer</div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-lg text-white">
                fabio1995@gmail.com
              </span>
            </td>
            <td>50</td>
            <td>
              <div className="btn btn-sm rounded-full hover:bg-stone-700 bg-stone-800">
                See Classes
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InstructorsTable;
