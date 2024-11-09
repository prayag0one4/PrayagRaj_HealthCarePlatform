import Testimonial from "../../components/Testimonials/Testimonial.jsx";
import { doctors } from ".././../../data/doctors.js";
import DoctorCard from "./DoctorCard";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]  max-w-7xl   ">
        <div className="container text-center">
          <div>
            
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex item-center justify-between">
              <input
                type="search"
                placeholder="Search Doctor"
                className="py-4 pl-4 pr-2 bg-transparent w-full  focus:ouline-none cursor-pointer placeholder:text-textColor"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" max-w-7xl ml-64" >
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
          "
          >
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className=" max-w-7xl ml-64 " >
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our paient say</h2>
            <p className="text_para text-center">
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
