import { doctors } from ".././../../data/doctors.js";
import DoctorCard from "./DoctorCard";
import Testimonial from "../../components/Testimonials/Testimonial.jsx";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea] h-[60px] max-w-7xl  ml-10   ">
        <div className="container text-center pt-1 ">
          <div className="">
            <div className="max-w-lg mx-auto mt-8 mb-[100px] bg-white rounded-lg shadow-sm border border-gray-200 flex items-center overflow-hidden">
              <input
                type="search"
                placeholder="Search Doctor"
                className="py-3 px-4 w-full focus:outline-none placeholder:text-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto ml-64">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl ml-10 ">
        <div className="container">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              What our patients say
            </h2>
            <p className="text-gray-600 text-center text-lg">
              World-class care for everyone. Our health system offers unmatched,
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
