import useAuth from "../hooks/useAuth";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  const { user, logoutSession } = useAuth();
  const handleLogout = () => {
    logoutSession();
  };
  return (
    <nav className="bg-blue-800 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className=" w-2/6" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            {user ? (
              <a
                onClick={handleLogout}
                className="cursor-pointer py-2 px-2 font-medium text-slate-400 rounded  hover:text-white transition duration-300"
              >
                Logout
              </a>
            ) : pathname !== "/signup" ? (
              <Link
                to={"/signup"}
                className="py-2 px-2 font-medium  text-slate-400  hover:text-white  rounded  transition duration-300"
              >
                Sign Up
              </Link>
            ) : (
              <Link
                to={"/"}
                className="py-2 px-2 font-medium  text-slate-400  hover:text-white  rounded  transition duration-300"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button className="group outline-none mobile-menu-button"></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
