import { NavLink } from "react-router-dom";

const ActiveLink2 = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-yellow-500 font-bold description tracking-widest description text-lg" : "text-white font-bold description tracking-widest description text-lg"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink2;
