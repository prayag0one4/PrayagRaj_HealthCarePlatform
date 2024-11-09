 
import { doctors } from ".././../../data/doctors.js";
import DoctorCard from "./DoctorCard";
import Testimonial from "../../components/Testimonials/Testimonial.jsx";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea] h-[60px] max-w-7xl  ml-10   ">
        <div className="container text-center pt-1 ">
          <div className="" >
             
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex item-center justify-between  ">
              <input
                type="search"
                placeholder="Search Doctor"
                className="py-2 pl-4 pr-2  bg-transparent w-full  focus:ouline-none cursor-pointer placeholder:text-textColor pt-4 align-middle"
              />
              <button className="btn mt-0 rounded-[5px] rounded-r-md ">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" max-w-7xl ml-64" >
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7
          "
          >
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className=" max-w-7xl ml-10 " >
        <div className="container">
        <div className="w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">What our patients say</h2>
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
