import React from "react";

const services = [
  { label: "BOOK YOUR APPOINTMENTS", href: "#" },
  { label: "DONATE BLOOD", href: "#" },
  { label: "QUICK ENQUIRY", href: "#" },
  { label: "FIND DOCTORS", href: "#" },
  { label: "BLOGS", href: "#" },
  { label: "CAREERS", href: "#" },
  { label: "GALLERY", href: "#" },
  

];

const Service = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.href}
          className="inline-flex px-4 py-2 font-medium tracking-wide text-white bg-indigo-900 rounded-lg animate-bounce focus:animate-none hover:animate-none text-md"
        >
          <span className="ml-2">{service.label} 🏀</span>
        </a>
      ))}
    </div>
  );
};

export default Service;
