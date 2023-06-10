import { Link } from "react-router-dom";
import ActiveLink from "../../activeLink/ActiveLink";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar p-5 bg-base-200">
      <Link to="/" className="navbar-start gap-6 flex items-center">
        <div>
          <img
            className="w-[140px]"
            src="https://www.pmbia.org/img/pmbia-logo-word-reverse.png"
          />
        </div>
        <div className="title text-start uppercase text-xl">
            Professional <span className="text-yellow-600">Mountain Biking</span> <br /> Instructors <span className="text-yellow-600">Association</span>
        </div>
      </Link>
      <div className="navbar-center uppercase">
        <div className="flex gap-5 tracking-[2px] text-xl">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/instructors">Instructors</ActiveLink>
          <ActiveLink to="/sessions">Sessions</ActiveLink>
          <ActiveLink to="/dashboard">Dashboard</ActiveLink>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost font-light text-yellow-400 text-2xl">
          <div className="flex tracking-[2px] items-center  gap-2">
          <CgLogIn/><span className="text-lg">Login</span>
          </div>
        </button>       
      </div>
    </div>
  );
};

export default Navbar;
