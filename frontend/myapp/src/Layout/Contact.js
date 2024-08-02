
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <>
      <div className="p-8 bg-gray-100">
        <h2 className="mb-6 font-serif text-2xl font-bold text-center text-green-600">
          Contact VT-Hospital
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="hidden md:block md:col-span-1">
            <div className="overflow-hidden rounded-md shadow-md">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14877.130750922652!2d72.843073!3d21.220636!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720721899049!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="p-6 bg-white rounded-md shadow-md">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-semibold text-gray-700">
                    Vasta Devdi Rd, near Sumul Dairy Road,
                    <br />
                    Tunki, Katargam, Surat, Gujarat 395004
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm text-gray-700">+91-9660688232</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm text-gray-700">careers@VT-Hospital.com</p>
                </div>
              </div>
              <hr className="my-4" />

              {/* Query Form */}
              <form className="mt-4">
                <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="query"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Your Query
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      rows="3"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
