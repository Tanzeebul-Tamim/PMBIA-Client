import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../Helmet/useTitle";
import { getUserData } from "../../api/authApi";
import { getBookedClasses } from "../../api/bookApi";
import DashboardPageTitle from "../../shared_components/DashboardPageTitle/DashboardPageTitle";
import { PropagateLoader  } from "react-spinners";
import PaymentHistoryTable from "./PaymentHistoryTable/PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const paidBookings = userBookings.filter(
    (booking) => booking.paymentStatus === "paid"
  );
  useTitle("| Payment History");

  useEffect(() => {
    if (user && user.email) {
      setLoading(true);
      getUserData(user.email)
        .then((data) => {
          setUserDetails(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [user]);

  useEffect(() => {
    if (user && user.email && userDetails._id) {
      getBookedClasses(userDetails._id)
        .then((data) => {
          setUserBookings(data);
        })
        .catch((error) => console.error(error));
    } else if (!user) {
      setUserBookings([]);
    }
  }, [userDetails, userBookings]);

  if (loading) {
    return (
      <>
        <DashboardPageTitle title={"My Payment History"} />
        <div
          style={{ height: "400px" }}
          className="flex justify-center items-center"
        >
          <PropagateLoader color="rgb(234 179 8)" />
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardPageTitle title={"My Payment History"} />
      <PaymentHistoryTable userBookings={paidBookings}></PaymentHistoryTable>
    </>
  );
};

export default PaymentHistory;
