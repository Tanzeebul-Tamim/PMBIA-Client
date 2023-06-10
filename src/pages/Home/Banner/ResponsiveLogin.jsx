import { CgLogIn } from "react-icons/cg";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";

const ResponsiveLogin = () => {
  return (
    <div className="lg:hidden bottom-0 flex absolute z-10">
      <Link to="/login" className="btn btn-ghost font-light text-yellow-400">
        <div className="flex tracking-[2px] items-center gap-2">
          <CgLogIn className="text-xl" />
          <span className="text-md">Login</span>
        </div>
      </Link>
      <Link to="/register" className="btn btn-ghost font-light">
        <div className="flex tracking-[2px] items-center gap-2">
          <SlNote className="text-md" />
          <span className="text-md">Register</span>
        </div>
      </Link>
    </div>
  );
};

export default ResponsiveLogin;
