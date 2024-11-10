import "./style/Header.css";
import userImg from "../assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navLinks = [
    {
      path: "/home",
      display: t("dash1"), // Translated text
    },
    {
      path: "/doctors",
      display: t("dash3"), // Translated text
    },
    {
      path: "/pharmacy",
      display: t("dash4"), // Translated text
    },
    {
      path: "/healtheducation",
      display: t("dash5"), // Translated text
    },
    {
      path: "/image",
      display: t("dash6"), // Translated text
    },
    {
      path: "/contact",
      display: t("dash7"), // Translated text
    },
  ];
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
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
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("shown__menu");

  return (
    <div className="container">
      <div className="w-60 h-screen bg-gray-50 fixed left-0 top-0">
        {/* Logo */}
        <div className="p-4">
          <h1 className="text-indigo-600 text-xl font-semibold">
            {t("title")}
          </h1>
        </div>

        {/* Menu */}
        <div className="navigation" onClick={toggleMenu} ref={menuRef}>
          <ul className="flex flex-col space-y-6 p-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
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
                <img src={userImg} alt="user" />
              </figure>
            </Link>
          </div>
        </div>
        <button onClick={(e)=>logout()} className=" bg-blue-500 py-2 px-6 text-white hover:bg-blue-600 font-[600] h-[44px] flex items-center justify-center rounded-[50px]   ml-2 mt-10">
          Logout
        </button>
        <span className="md:hidden" onClick={toggleMenu}>
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Header;
