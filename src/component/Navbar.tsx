import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-600  border-b-2 " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-600  border-b-2 " : ""
          }
        >
          contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? "text-purple-600  border-b-2 " : ""
          }
        >
          Service
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-purple-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost sm:text-[12px] lg:text-xl text-purple-800">
            E-commerce
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn m-1 border-2  border-purple-800"
            >
              Join Now
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/login"} className="text-purple-600">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/register"} className="text-purple-600">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
