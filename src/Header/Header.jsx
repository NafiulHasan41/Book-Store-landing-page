import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
        <div className="navbar bg-base-100 w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[16px] font-medium rounded-box w-52 "
              >
                <li>
                <NavLink to="/"  className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""} >Home</NavLink>

                </li>
                <li>
                <NavLink to="/bookList"   className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""}>Listed Books</NavLink>
                </li>
                <li>
                <NavLink to="/pageRead"  className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""}>Pages to Read</NavLink>
                </li>
            
              </ul>
            </div>
            <a className="btn btn-ghost text-[14px] md:text-xl font-bold  px-2">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
              <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""} > Home </NavLink>
              </li>
              <li>
              <NavLink to="/bookList"  className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""} >Listed Books</NavLink>
              </li>
              <li>
              <NavLink to="/pageRead"  className={({ isActive }) =>
                isActive ? "text-[#23BE0A] border-green-500 bg-transparent border-2" : ""} >Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            
            <div>
              <a className="btn md:p-3 bg-[#23BE0A] ">
                <div className="text-xs md:text-[16px]  font-semibold">Sign In</div>
              </a>
            </div>
            <div>
              <a className="btn p-3  bg-[#59C6D2] ">
                <div className=" text-[16px]   font-semibold">Sign Up</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;