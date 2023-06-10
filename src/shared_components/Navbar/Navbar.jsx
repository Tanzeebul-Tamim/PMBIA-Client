import ActiveLink from "../../activeLink/ActiveLink";
import { CgLogIn, CgMenuGridO } from "react-icons/cg";
import { SlNote } from "react-icons/sl";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolledPastBanner, setScrolledPastBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerHeight = 800;

      if (scrollPosition >= bannerHeight) {
        setScrolledPastBanner(true);
      } else {
        setScrolledPastBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolledPastBanner ? 'from-base-100 to-black' : 'from-transparent to-black'} bg-gradient-to-t duration-100 fixed z-[1500] gap-5 navbar px-5 lg:px-10 lg:py-8
    transition ease-in-out`}>
      <div className="navbar-start gap-1 lg:gap-6 flex items-center">
        <div onClick={() => setOpen(!open)} className="lg:hidden text-lg">{open ? <IoCloseCircleOutline /> : <CgMenuGridO />}</div>
        <div className={`mt-2 flex flex-col bg-opacity-80 absolute duration-300 ${open ? 'top-16 right-5' : 'top-16 -right-28'} lg:hidden z-10 py-2 px-4 bg-base-100 rounded-md`}>
          <ActiveLink
            to="/"
            className="block mb-2 text-sm text-white hover:text-yellow-400"
          >
            Home
          </ActiveLink>
          <ActiveLink
            to="/instructors"
            className="block mb-2 text-sm text-white hover:text-yellow-400"
          >
            Instructors
          </ActiveLink>
          <ActiveLink
            to="/sessions"
            className="block mb-2 text-sm text-white hover:text-yellow-400"
          >
            Sessions
          </ActiveLink>
          <ActiveLink
            to="/dashboard"
            className="block text-sm text-white hover:text-yellow-400"
          >
            Dashboard
          </ActiveLink>
        </div>
        <div>
          <img
            className="w-1/2 lg:w-[140px]"
            src="https://www.pmbia.org/img/pmbia-logo-word-reverse.png"
            alt="Logo"
          />
        </div>
        <div className="title text-start uppercase lg:block hidden text-lg">
          <span className="text-white">Professional</span> <span className="text-yellow-500">Mountain Biking</span>{" "}
          <br /> <span className="text-white">Instructors</span>{" "}
          <span className="text-yellow-500">Association</span>
        </div>
      </div>

      <div className="navbar-center uppercase lg:block hidden">
        <div className="flex nav-btn glow-effect py-3 px-6 rounded-full gap-5 tracking-[2px] text-xl">
          <ActiveLink className="hover:text-yellow-400" to="/">
            <div>Home</div>
          </ActiveLink>
          <ActiveLink className="hover:text-yellow-400" to="/instructors">
            <div>Instructors</div>
          </ActiveLink>
          <ActiveLink className="hover:text-yellow-400" to="/sessions">
            <div>Sessions</div>
          </ActiveLink>
          <ActiveLink className="hover:text-yellow-400" to="/dashboard">
            <div>Dashboard</div>
          </ActiveLink>
        </div>
      </div>

      <div className="navbar-end uppercase lg:hidden">
        <div className="title-sm text-end uppercase text-[10px]">
          <span className="text-white">Professional</span> <span className="text-yellow-600">Mountain Biking</span>{" "}
          <br /> <span className="text-white">Instructors</span>{" "}
          <span className="text-yellow-600">Association</span>
        </div>       
      </div>

      <div className="navbar-end lg:flex hidden">
        <Link to="/login" className="btn btn-ghost font-light text-yellow-400 text-xl">
          <div className="flex tracking-[2px] items-center gap-2">
            <CgLogIn />
            <span className="text-xl">Login</span>
          </div>
        </Link>
        <Link to="/register" className="btn btn-ghost text-white font-light text-xl">
          <div className="flex tracking-[2px] items-center gap-2">
            <SlNote />
            <span className="text-xl">Register</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
