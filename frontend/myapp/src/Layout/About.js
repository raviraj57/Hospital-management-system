import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 about-page dark:bg-gray-800">
      <div className="flex flex-col max-w-4xl p-10 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900 md:flex-row">
        <div className="mb-6 md:w-1/3 md:mr-6 md:mb-0">
          <img
            src="https://media.istockphoto.com/id/1199745866/photo/portrait-of-a-cheerful-doctor-in-modern-office.jpg?s=612x612&w=0&k=20&c=lIAXdbNEj1jXNpvMuFjJN-coYcreVyzEMdJq8IBcCB0="
            alt="VT-Hospital"
            className="rounded-lg shadow-md"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            <hr></hr>
              Dr. Raviraj Yadav
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              MBBS, MD Neurologist
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Director, VT-Hospital
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Experience: 10 years
            </p>
       
          
          </div>
        </div>
        <div className="overflow-y-auto md:w-2/3 h-96">
          <h1 className="mb-4 text-3xl font-bold text-center text-gray-900 dark:text-white">
            About VT-Hospital
          </h1>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Welcome to VT-Hospital, your trusted healthcare provider. At
            VT-Hospital, we are dedicated to providing top-notch medical
            services with a patient-centered approach. Our team of experienced
            professionals is committed to ensuring the well-being and comfort of
            our patients.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our hospital offers a wide range of medical services, including
            general surgery, cardiology, orthopedics, and more. We are equipped
            with state-of-the-art medical technology to provide the best
            possible care to our patients.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our mission is to deliver high-quality healthcare services that meet
            the needs of our community. We strive to create a safe and
            compassionate environment where patients can receive the best care
            possible.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Our Vision
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our vision is to be the leading healthcare provider in the region,
            known for our excellence in patient care and medical innovation. We
            aim to continually improve our services and facilities to meet the
            evolving needs of our patients.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions or need more information, please feel free
            to contact us at
            <a
              href="mailto:info@vt-hospital.com"
              className="text-blue-600 dark:text-blue-400"
            >
              {" "}
              info@vt-hospital.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:123-456-7890"
              className="text-blue-600 dark:text-blue-400"
            >
              (123) 456-7890
            </a>
            . We are here to assist you with any inquiries you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
