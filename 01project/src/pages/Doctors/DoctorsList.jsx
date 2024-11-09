import { doctors } from "../../../data/doctors.js";
import DoctorCard from "./DoctorCard.jsx";
const DoctorsList = () => {
  return (
    <div className="grid grid-cols-3 gap-8 justify-between">
      {doctors.map((doctor, index) => (
        <DoctorCard doctor={doctor} key={index} />
      ))}
    </div>
  );
};

export default DoctorsList;
