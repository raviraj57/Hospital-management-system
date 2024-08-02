import React, { useState } from 'react';
import Appointments from "../../pages/Appointments";
import Login from "../../auth/Login"
import Register from "../../auth/Register"

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Doctors');

  const menuItems = [
    { name: 'Doctors', icon: 'M3 2H21V22H3V2Z', badge: '3' },
    { name: 'Appointments', icon: 'M4 4H20V20H4V4Z', badge: '8' },
    { name: 'Contact', icon: 'M3 3H21V21H3V3Z', badge: '14' },
    { name: 'Patients', icon: 'M4 4H20V20H4V4Z', badge: '12' },
    { name: 'BloodDonationForm', icon: 'M3 2H21V22H3V2Z', badge: '9' },
    { name: 'Register', icon: 'M4 4H20V20H4V4Z', badge: '22' },
    { name: 'Payments', icon: 'M4 4H20V20H4V4Z', badge: '2' },
    { name: 'Login', icon: 'M3 3H21V21H3V3Z' },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
    //   case 'Doctors':
    //     return <Doctors />;
      case 'Appointments':
        return <Appointments />;
    //   case 'BlogCard':
    //     return <BlogCard />;
    //   case 'Patients':
    //     return <Patients />;
    //   case 'BloodDonationForm':
    //     return <BloodDonation />;
      case 'Register':
        return <Register />;
    //   case 'Payments':
    //     return <Payments />;
      case 'Login':
        return <Login />;
      default:
        // return <Doctors />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-2rem)]">
      <div className="relative flex flex-col bg-white text-gray-700 bg-gray-200 shadow-xl w-full max-w-[20rem] p-4">
        <div className="p-4 mb-2 text-center bg-slate-400">
          <h5 className="font-serif text-xl font-bold text-gray-900">Dashboard</h5>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedMenu(item.name)}
              className="flex items-center w-full p-3 transition-all rounded-lg text-start hover:bg-blue-200 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
            >
              <div className="grid mr-4 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                  <path fillRule="evenodd" d={item.icon} clipRule="evenodd"></path>
                </svg>
              </div>
              {item.name}
              {item.badge && (
                <div className="grid ml-auto place-items-center justify-self-end">
                  <div className="relative grid items-center px-2 py-1 text-xs font-bold text-blue-900 uppercase rounded-full bg-blue-500/20">
                    <span>{item.badge}</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-4 bg-gray-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
