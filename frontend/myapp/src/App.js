// src/App.js
import { React} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Appointments from "./pages/Appointments";
// import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import MobileNavbar from "./Layout/Navbar";
import About from "./Layout/About";
import ImageSlider from "./Layout/ImageSlider";
import Footer from "./Layout/Footer";
import Register from "./auth/Register";
import Login from "./auth/Login";
import BlogCard from "./components/blog/BlogCard";
import AddDoctorForm from "./components/blog/AddDoctorForm";
import NotFound from "./Layout/NotFound";
import BloodDonationForm from "./pages/BloodDonationForm";
import Contact from "./Layout/Contact";
import Features from "./Layout/Features";
import Welcome from "./Layout/Welcome";
import Service from "./Layout/Service"
import Dashboard from "./components/Dashboard/Dashboard";
//

const App = () => {
  const location = useLocation();

  return (
    <div className="container">
      <MobileNavbar />
      {location.pathname === "/" && <ImageSlider />}
      {location.pathname === "/" && <Welcome />}
      {location.pathname === "/" && <Service />}


      {location.pathname === "/" && <Features />}

      {location.pathname === "/" && <BlogCard />}
      {location.pathname === "/" && <Contact />}

      <Routes>
        <Route path="/" />
        <Route path="/Appointments" element={<Appointments />} />
        {/* <Route path="/doctors" element={<Doctors />} /> */}
        <Route path="/patients" element={<Patients />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<AddDoctorForm />} />
        <Route path="/blood" element={<BloodDonationForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />



        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
};
export default App;
