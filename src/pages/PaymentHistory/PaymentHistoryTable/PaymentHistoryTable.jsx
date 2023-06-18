import { BsFillCreditCardFill } from "react-icons/bs";
import PaymentHistoryTableHead from "./PaymentHistoryTableHead";

const PaymentHistoryTable = ({ userBookings }) => {
  if (userBookings?.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="z-[10] description text-5xl">
          You Haven&apos;t Made Any Payment Yet
        </h1>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="mb-5 flex justify-between gap-2 text-white description text-xl">
        <strong className="z-[100] flex items-center gap-2">
          <BsFillCreditCardFill className="text-2xl" />
          <span>Transactions Count :</span>
          <span>{userBookings?.length}</span>
        </strong>{" "}
      </div>
      <table className="z-[100] table text-center description text-white">
        {/* head */}
        <PaymentHistoryTableHead />
        <tbody className="text-sm">
          {userBookings.map((classItem) => {
            return (
              <tr className="" key={classItem._id}>
                <td >
                  <div>
                    <div className="font-bold">{classItem['class-name']}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.transactionId}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.date.split("T")[0]}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">$ {classItem.classFee}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">Paid</div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
