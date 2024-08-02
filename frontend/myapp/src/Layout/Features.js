import React from "react";
import {
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaAmbulance,
  FaHeartbeat,
  FaBed,
} from "react-icons/fa";

const features = [
  {
    title: "24/7 Emergency Services",
    description: "Our hospital provides round-the-clock emergency services.",
    icon: <FaAmbulance className="text-5xl text-blue-500" />,
  },
  {
    title: "Qualified Doctors",
    description: "We have a team of highly qualified and experienced doctors.",
    icon: <FaUserMd className="text-5xl text-blue-500" />,
  },
  {
    title: "Advanced Equipment",
    description: "Our hospital is equipped with the latest medical technology.",
    icon: <FaStethoscope className="text-5xl text-blue-500" />,
  },
  {
    title: "Patient Care",
    description: "We ensure the best care and comfort for our patients.",
    icon: <FaHeartbeat className="text-5xl text-blue-500" />,
  },
  {
    title: "In-Patient Services",
    description: "We offer comfortable in-patient rooms and services.",
    icon: <FaHospital className="text-5xl text-blue-500" />,
  },
  {
    title: "Capacity",
    description: "We offer comfortable in-patient rooms and services.",
    icon: <FaBed className="text-5xl text-blue-500" />,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-600">
          Our Features
        </h2>

        <p className="mb-8 text-center text-gray-700">
          Vermont's hospitals, encompassing critical access facilities, rural
          institutions, academic medical centers, and specialized centers,
          provide a range of services from emergency care to advanced
          specialties like oncology and cardiology. These patient-centered
          institutions often leverage modern medical technology to deliver
          high-quality healthcare across the state.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow shadow-lg hover:shadow-xl hover:bg-slate-100"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-center text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
