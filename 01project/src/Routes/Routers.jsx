import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctor from "../pages/Doctors/doctors";
import HealthEducation from "../pages/healtheducation";
import Image from "../pages/image";
import Contact from "../pages/Contact";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails";
import MapPage from "../pages/pharmacy";
 

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
       <Route path="/doctors" element={<Doctor/>}/>
       <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
       <Route path="/pharmacy" element={<MapPage/>}/>
       <Route path="/healtheducation" element={<HealthEducation/>}/>
       <Route path="/image" element={<Image/>}/>
       <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default Routers;
