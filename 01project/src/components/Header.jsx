import { Link, NavLink } from "react-router-dom";
 
import { useEffect, useRef } from "react";
const navLinks = [
  {
    path: "/home",
    display: "Dashboard",
  },
  {
    path: "/doctors",
    display: "Virtual Consultations",
  },
  
 
  {
    path: "/pharmacy",
    display: "Pharmacy",
  },
  {
    path: "/healtheducation",
    display: "Health Education",
  },
  {
    path:"/image",
    display:"Image Scanner"
  },
  {
    path: "/contact",
    display: "Contact",
  },
   
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.sscrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const togglemenu = () => menuRef.current.classList.toggle("shown__menu");
  return (
    // <header className="header">
    <div className="container">
      <div className="w-60 h-screen bg-gray-50 fixed left-0 top-0 ">
        {/*  Logo  */}
        <div className="p-4">
          <h1 className="text-indigo-600 text-xl font-semibold">MediCare+</h1>
        </div>

        {/* Menu */}

        <div className="navigation " onClick={togglemenu} ref={menuRef}>
          <ul className="flex flex-col space-y-6 p-4 ">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-16px leading-7 font-600"
                      : "text-textColor text-16px leading-7 font-500"
                  }
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center px-4 py-2">
          <div className="hidden">
            <Link to="/">
              <figure className="w-35px h-35px rounded-full">
                
              </figure>
            </Link>
          </div>
        </div>
        <Link to="login">
          <button className=" bg-blue-500 py-2 px-6 text-white hover:bg-blue-600 font-[600] h-[44px] flex items-center justify-center rounded-[50px]   ml-2 mt-10">
            Login
          </button>
        </Link>
        <span className="md:hidden" onClick={togglemenu}>
           
        </span>
      </div>
    </div>
    // </header>
  );
};

export default Header;
