import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/doctorCard"); // Updated route name
        setDoctors(response.data);
      } catch (error) {
        console.error("There was an error fetching the doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container px-4 py-8 m-10 mx-auto" id="projects">
      <h2 className="mt-3 mb-1 font-serif text-2xl font-bold text-center text-green-600">
        Welcome to VT-Hospital's Official Blog!
      </h2>
      <hr className="w-32 mx-auto my-2 border-green-600" />
      <p className="pb-3 text-lg text-center text-gray-700">
        At VT Hospital, we are committed to providing the highest quality
        healthcare services to our community. Our dedicated team of doctors,
        nurses, and staff work tirelessly to ensure that every patient receives
        personalized and compassionate care. We believe that staying informed
        about health and wellness is essential, and our blog aims to keep you
        updated with the latest health tips, medical advancements, and hospital
        news.
      </p>

      <div className="container p-4 mx-auto">
        <div className="flex flex-wrap -mx-2" id="ads">
          {doctors
            .slice(0, showAll ? doctors.length : 3)
            .map((doctor, index) => (
              <div key={index} className="w-full px-2 mb-4 sm:w-1/2 lg:w-1/3">
                <div className="overflow-hidden transition duration-500 bg-white shadow-lg rounded-xl hover:shadow-2xl">
                  <div className="relative">
                    <span className="absolute px-3 py-1 text-sm text-black bg-orange-400 rounded-full top-2 left-2">
                      {doctor.category}
                    </span>
                    <img
                      src={doctor.imgSrc}
                      alt={`Image of ${doctor.name}`}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="flex justify-center mt-3 space-x-2 text-sm text-black">
                    {doctor.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-3 py-1 bg-yellow-400 rounded-2xl badge"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 text-center">
                    <h6 className="text-lg font-semibold uppercase">
                      {doctor.name}
                    </h6>
                    <a
                      className="inline-block px-4 py-1 mt-3 text-white transition duration-300 bg-teal-600 border-2 border-teal-600 rounded-full hover:bg-white hover:text-teal-600"
                      href={doctor.link}
                    >
                      Contact...
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {doctors.length > 3 && (
          <div className="mt-4 text-center">
            <p
              className="text-blue-600 cursor-pointer"
              onClick={handleToggleShowAll}
            >
              {showAll ? "View Less" : "View All Doctors"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;










