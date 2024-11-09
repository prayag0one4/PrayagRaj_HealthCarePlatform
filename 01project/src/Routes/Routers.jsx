import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctor from "../pages/Doctors/doctors";
import Pharmacy from "../pages/pharmacy";
import HealthEducation from "../pages/healtheducation";
import Image from "../pages/image";
import Contact from "../pages/Contact";
 

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
       <Route path="/doctors" element={<Doctor/>}/>
       <Route path="/pharmacy" element={<Pharmacy/>}/>
       <Route path="/healtheducation" element={<HealthEducation/>}/>
       <Route path="/image" element={<Image/>}/>
       <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default Routers;
