import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../../../data/doctors.js";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout.jsx";
import Feedback from "./Feedback.jsx";
import SidePanel from "./SidePanel.jsx";
import VideoCall from "../video-call.jsx";
import Videocalling from "./videocallbutton.jsx";

const DoctorsDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState("about");

  useEffect(() => {
    const selectedDoctor = doctors.find((doc) => doc.id === id);
    setDoctor(selectedDoctor);
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>; // Return a loading indicator if data is not yet available
  }

  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,

    short,
  } = doctor;

  return (
    <section className="py-14">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="ml-64">
          <div className="grid grid-cols-3 gap-8 ">
            <div className="md:col-span-2 bg-white rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
                <figure className="flex-shrink-0">
                  <img
                    src={photo}
                    alt={name}
                    className="w-48 h-48 rounded-lg object-cover shadow-sm"
                  />
                </figure>

                <div className="space-y-4">
                  <span className="inline-block bg-[#CCF0F3] text-irisBlueColor py-1.5 px-4 text-sm lg:text-base font-semibold rounded-full">
                    {specialty}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-headingColor">
                    {name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-sm lg:text-base font-semibold text-headingColor">
                      <img src={starIcon} alt="rating" className="w-5 h-5" />
                      {avgRating}
                    </span>
                    <span className="text-sm lg:text-base font-semibold text-headingColor">
                      ({totalRating})
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm lg:text-base max-w-2xl">
                    {short}
                  </p>
                </div>
              </div>

              <div className="mt-12 border-b border-gray-200">
                <div className="space-x-8">
                  <button
                    onClick={() => setTab("about")}
                    className={`pb-4 text-base font-semibold text-headingColor transition-colors ${
                      tab === "about"
                        ? "border-b-2 border-primaryColor text-primaryColor"
                        : "hover:text-primaryColor"
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setTab("feedback")}
                    className={`pb-4 text-base font-semibold text-headingColor transition-colors ${
                      tab === "feedback"
                        ? "border-b-2 border-primaryColor text-primaryColor"
                        : "hover:text-primaryColor"
                    }`}
                  >
                    Feedback
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {tab === "about" && <DoctorAbout doctor={doctor} />}
                {tab === "feedback" && <Feedback doctor={doctor} />}
              </div>
            </div>

            <div className="space-y-8">
              <SidePanel />
              <Videocalling />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
