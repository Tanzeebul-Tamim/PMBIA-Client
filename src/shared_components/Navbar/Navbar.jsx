import ActiveLink from "../../activeLink/ActiveLink";
import { CgMenuGridO } from "react-icons/cg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { SlNote } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="from-transparent to-black bg-gradient-to-t fixed z-[1500] gap-5 navbar px-5 lg:px-10 lg:py-8 transition ease-in-out">
      <div className="navbar-start gap-1 lg:gap-6 flex items-center">
        <div
          className={`mt-2 flex flex-col bg-opacity-80 absolute duration-300 ${
            open ? "top-10 right-5" : "top-10 -right-28"
          } lg:hidden z-10 py-2 px-4 bg-base-100 rounded-md`}
        >
          <ActiveLink
            to="/"
            className="gap-2 mb-2 text-sm text-white hover:text-yellow-400"
          >
            <span className="flex items-center gap-1">
              <AiOutlineHome className="text-xs" />
              HOME
            </span>
          </ActiveLink>
          <ActiveLink
            to="/instructors"
            className="block mb-2 text-sm text-white hover:text-yellow-400"
          >
            <span className="flex items-center gap-1">
              <FaChalkboardTeacher className="text-xs" />
              INSTRUCTORS
            </span>
          </ActiveLink>
          <ActiveLink
            to="/classes"
            className="block mb-2 text-sm text-white hover:text-yellow-400"
          >
            <span className="flex items-center gap-1">
              <MdOutlineSchool className="text-xs" />
              CLASSES
            </span>
          </ActiveLink>
          {user && (
            <ActiveLink
              to="/dashboard"
              className="block text-sm text-white hover:text-yellow-400"
            >
              <span className="flex items-center gap-1">
                <LuLayoutDashboard className="text-xs" />
                DASHBOARD
              </span>
            </ActiveLink>
          )}
          <ActiveLink
            to="/about-us"
            className="block text-sm text-white hover:text-yellow-400"
          >
            <span className="flex items-center gap-1">
              <AiOutlineInfoCircle className="text-xs" />
              ABOUT US
            </span>
          </ActiveLink>
        </div>
        <Link to="/">
          <img
            className="lg:w-[400px] hover:scale-110 duration-200"
            src="https://i.ibb.co/7gCjkHF/pmbia-logo-word-reverse.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="navbar-center uppercase lg:block hidden">
        <div className="flex nav-btn glow-effect py-3 px-6 rounded-full gap-5 tracking-[2px] text-xl">
          <ActiveLink className="hover:text-yellow-400" to="/">
            <div>Home</div>
          </ActiveLink>
          <ActiveLink className="hover:text-yellow-400" to="/instructors">
            <div>Instructors</div>
          </ActiveLink>
          <ActiveLink className="hover:text-yellow-400" to="/classes">
            <div>classes</div>
          </ActiveLink>
          {user && 
          <ActiveLink className="hover:text-yellow-400" to="/dashboard">
            <div>Dashboard</div>
          </ActiveLink>}
          <ActiveLink className="hover:text-yellow-400" to="/about-us">
            <div>About Us</div>
          </ActiveLink>
        </div>
      </div>
      {user ? (
        <div className="navbar-end uppercase gap-7 lg:flex hidden">
          <button
            onClick={handleLogOut}
            className="hover:scale-110 duration-200 text-yellow-400 font-light text-xl"
          >
            <div className="flex tracking-[2px] items-center gap-2">
              <FiLogOut />
              <span className="text-xl uppercase">Logout</span>
            </div>
          </button>
          <div
            data-tip={user?.displayName}
            className="tooltip tooltip-bottom tooltip-warning"
          >
            {user.photoURL ? (
              <img
                className="rounded-full glow-effect cursor-pointer w-[55px] h-[55px]"
                src={user?.photoURL}
              />
            ) : (
              <img
                className="rounded-full glow-effect cursor-pointer w-[55px] h-[55px]"
                src="https://i.ibb.co/yktKPFk/149071.png"
              />
            )}
          </div>
        </div>
      ) : loading ? (
        <div className="navbar-end uppercase gap-5 lg:flex hidden">
          <div
            className="text-transparent w-1/6 rounded-md opacity-25 border-yellow-400 border bg-transparent"
          >a</div>
          <div
            className="text-transparent w-1/6 rounded-md opacity-25 border-white border bg-transparent"
          >a</div>
        </div>
      ) : (
        <div className="navbar-end uppercase gap-5 lg:flex hidden">
          <Link
            to="/login"
            className="hover:scale-110 duration-200 font-light text-yellow-400 text-xl"
          >
            <div className="flex tracking-[2px] items-center gap-2">
              <FiLogIn />
              <span className="text-xl">Login</span>
            </div>
          </Link>
          <Link
            to="/register"
            className="hover:scale-110 duration-200 text-white font-light text-xl"
          >
            <div className="flex tracking-[2px] items-center gap-2">
              <SlNote />
              <span className="text-xl">Register</span>
            </div>
          </Link>
        </div>
      )}
      <div className="navbar-end flex gap-2 lg:hidden">
        {loading ? (
          <div>
            <img
              className="h-[35px] w-[35px] rounded-full"
              src="https://i.ibb.co/yktKPFk/149071.png"
              alt=""
            />
          </div>
        ) : !loading && user ? (
          <div
            data-tip={user?.displayName}
            className="tooltip tooltip-bottom tooltip-warning"
          >
            <img
              className="h-[35px] w-[35px] rounded-full"
              src={user.photoURL}
              alt=""
            />
          </div>
        ) : (
          ""
        )}
        <div onClick={() => setOpen(!open)}>
          {open ? <IoMdClose /> : <CgMenuGridO />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
