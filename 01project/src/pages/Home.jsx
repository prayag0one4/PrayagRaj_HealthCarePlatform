import React from 'react';

const Home = () => {
  const features = [
    {
      title: "Schedule Appointment",
      description: "Book your appointments easily.",
    },
    {
      title: "Find Pharmacies",
      description: "Find pharmacies near you easily.",
    },
    {
      title: "Health Education",
      description: "Access health resources and emergency guidelines.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-yellow-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Medicare+
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Providing easy access to healthcare and emergency services.
            </p>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Book an Appointment
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/api/placeholder/500/600"
              alt="Doctor"
              className="w-96 object-cover"
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
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;