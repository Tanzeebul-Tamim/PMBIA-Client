import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ActiveLink2 from "../../activeLink2/activeLink2";
import { getUserData } from "../../api/authApi";
import { useContext, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../providers/AuthProvider";

const SideNav = () => {
  const { user, loading } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});
  const [title, setTitle] = useState(null);

  getUserData(user?.email).then((data) => {
    setUserDetails(data);
    if (userDetails.role == "Instructor") {
      setTitle("Instructor");
    }
    else {
      setTitle("Student");
    }
  });

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0.500)), url('https://blog.54ka.org/wp-content/uploads/2015/10/downhill-mountain-bike-extreme-jump_by_54ka.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen fixed p-7 bg-base-200"
    >
      <div className="flex justify-center items-center">
        <img
          className="w-[300px]"
          src="https://i.ibb.co/7gCjkHF/pmbia-logo-word-reverse.png"
        />
      </div>
      <div className="divider"></div>
      <h1 className="title mb-10 uppercase text-center text-2xl">
        {title} Dashboard
      </h1>
      <div className="flex flex-col gap-5">
        <Link
          to="/"
          className="font-bold flex gap-3 items-center tracking-widest text-white description text-lg"
        >
          <AiFillHome className="text-xl" /> Home
        </Link>
        <Link
          to="/instructors"
          className="font-bold flex gap-3 items-center tracking-widest text-white description text-lg"
        >
          <FaChalkboardTeacher className="text-xl" /> Instructors
        </Link>
        <Link
          to="/classes"
          className="font-bold flex gap-3 items-center tracking-widest text-white description text-lg"
        >
          <IoSchoolSharp className="text-xl" /> Courses
        </Link>
        <Link
          to="/about-us"
          className="font-bold flex gap-3 items-center tracking-widest text-white description text-lg"
        >
          <BsFillInfoCircleFill className="text-xl" /> About Us
        </Link>

        <div className="divider"></div>
        {userDetails.role == "Student" || !userDetails.role ? (
          <>
            <ActiveLink2 to="/dashboard/profile">My Profile</ActiveLink2>
            <ActiveLink2 to="/dashboard/selected-classes">
              My Booked Courses
            </ActiveLink2>
            <ActiveLink2 to="/dashboard/enrolled-classes">
              My Enrolled Courses
            </ActiveLink2>
            <ActiveLink2 to="/dashboard/payment">
              My Payment History
            </ActiveLink2>
          </>
        ) : userDetails.role == "Instructor" ? (
          <>
            <ActiveLink2 to="/dashboard/profile">My Profile</ActiveLink2>
            <ActiveLink2 to="/dashboard/add-class">Add a Course</ActiveLink2>
            <ActiveLink2 to="/dashboard/my-classes">My Courses</ActiveLink2>
            <ActiveLink2 to="/dashboard/pending-classes">
              My Pending Courses
            </ActiveLink2>
          </>
        ) : !userDetails.role || !userDetails || loading ? (
          <div className="flex mt-20 gap-11 justify-center">
              <ScaleLoader color="white" height={50} width={10}/>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SideNav;
