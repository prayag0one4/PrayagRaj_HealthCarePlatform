import React from "react";
import doctor from "../assets/images/doctor-image.png";

const Home = () => {
  const features = [
    {
      title: "Schedule Appointment",
      description: "Book your appointments easily.",
      icon: "📅",
    },
    {
      title: "Find Pharmacies",
      description: "Find pharmacies near you easily.",
      icon: "🏥",
    },
    {
      title: "Health Education",
      description: "Access health resources and emergency guidelines.",
      icon: "📘",
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
            <button className="text-sm font-semibold text-black">
              translate🌐
            </button>{" "}
            {/* Translate Icon */}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex flex-col items-center justify-center lg:w-1/2 mb-8 lg:mb-0 mx-auto text-center">
                <h1 className="text-5xl font-light text-gray-800 mb-4">
                  Medicare+
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Providing easy access to healthcare and emergency services.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                  Book an Appointment
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={doctor}
                alt="Doctor"
                className="w-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appointments & Reports Section */}
        <div className="container mx-auto px-4 py-16 bg-transparent text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            Upcoming Appointments & Reports
          </h2>
          <p>No upcoming appointments or reports available.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
