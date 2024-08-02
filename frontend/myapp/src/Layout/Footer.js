import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-28">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="font-serif text-4xl font-bold text-center text-green-600">
              VT-Hospital
            </h1>
            <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
              Your trusted healthcare provider
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Surgery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pediatrics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Maternity
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Departments
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Neurology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Oncology
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://instagram.com/vthospital"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/vthospital"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/vthospital"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://Facebook.com/company/vthospital"
                    className="hover:underline"
                  >
                    Facebook{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 VT-Hospital. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              View more services
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
