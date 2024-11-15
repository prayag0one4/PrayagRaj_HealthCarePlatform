import React from "react";
import doctor from "../assets/images/doctor-image.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("line1"),
      description: t("line2"),
      icon: "📅",
      path: "/doctors",
    },
    {
      title: t("line3"),
      description: t("line4"),
      icon: "🏥",
      path: "/pharmacy",
    },
    {
      title: t("line5"),
      description: t("line6"),
      icon: "📘",
      path: "/healtheducation",
    },
  ];

  return (
    <div className="home">
      {" "}
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-white">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
          <div className="flex items-center space-x-4"></div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher /> {/* Translate Icon */}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <div className="flex flex-col items-center justify-center lg:w-1/2 mb-4 lg:mb-0 mx-auto text-center">
                <h1 className="text-5xl font-light text-gray-800 mb-3">
                  {t("title")}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{t("heading")}</p>
                <Link to="/doctors">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-md transition duration-300">
                    {t("book")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={doctor}
                alt="Doctor"
                className="w-full max-w-4xl object-cover rounded-lg mr-16"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.path}>
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                    {t("Learn")}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
