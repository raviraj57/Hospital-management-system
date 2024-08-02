

import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="m-6 md:m-10">
        <h2 className="mb-6 font-serif text-2xl font-bold text-center text-green-600">
          VT-HOSPITAL, WELCOMES YOU!
        </h2>
        <hr className="w-32 mx-auto border-t-4 border-green-600" />

        <p className="text-sm text-center sm:text-base md:text-lg">
          Apollo Clinics are multi-specialty clinics run by Apollo Health &
          Lifestyle Limited (AHLL), a subsidiary of Apollo Hospitals Enterprise
          Limited (AHEL). AHLL is one of the largest players in the retail
          healthcare segment in India. Apollo Clinics was founded in 2002 with the
          aim “to bring healthcare of international standards within the reach of
          every individual.” At present, there are 80 Apollo Clinics operating pan
          India. Apollo Clinic, Surat has been serving residents of the city since
          2005.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {/* Left card */}
          <div className="p-2 border border-4 border-green-600">
            <img
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
              alt="Hospital Building"
              className="w-full h-auto"
            />
          </div>
          {/* Right card */}
          <div className="text-center">
            <p className="hidden text-4xl sm:block">
              "One of the large networks of clinics in India and Overseas."
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Each Apollo Clinic is committed to not only providing consistently
              superior quality health care services but also addressing the
              day-to-day health care needs of the family.
              <br />
              <br />
              To maximize convenience and comfort, Apollo Clinic is an integrated
              model and offers facilities for Preventive Health Checks,
              Diagnostics, Specialist Consultation, Pharmacy, all under one roof.
            </p>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
              <img
                src="https://media.istockphoto.com/id/1199745866/photo/portrait-of-a-cheerful-doctor-in-modern-office.jpg?s=612x612&w=0&k=20&c=lIAXdbNEj1jXNpvMuFjJN-coYcreVyzEMdJq8IBcCB0="
                alt="VT-Hospital"
                className="w-full mx-auto rounded-lg shadow-md sm:w-auto"
                style={{ maxWidth: "100%" }}
              />
              <div className="text-center text-black">
                <h3 className="text-lg font-bold md:text-2xl">
                  Dr. Raviraj Yadav
                </h3>
                <p className="text-sm md:text-base">MBBS, MD Neurologist</p>
                <p className="text-sm md:text-base">Experience: 30 years</p>
                <p className="text-sm md:text-base">Director, VT-Hospital</p>
                <img
                  src="https://signature.freefire-name.com/img.php?f=2&t=Ravi%20Raj"
                  className="w-40 mx-auto mt-2 md:w-64"
                  alt="Signature"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-10 md:px-10">
          <h1 className="p-4 font-serif text-2xl font-light text-center md:text-4xl md:p-6">
            GET YOUR HEALTH CHECK DONE TODAY!
            <p className="mt-2 font-semibold text-green-600">
              Prevention is better than Cure!
            </p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Welcome;

