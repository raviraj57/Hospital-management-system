import React from "react";

const PatientCard = ({ patient, onEdit, onDelete }) => {
  return (
    <div className="patient-card p-4 bg-white shadow-md rounded-md mb-4 dark:bg-gray-800">
      <h4 className="text-xl font-semibold mb-2 dark:text-white">
        {patient.name}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">Age: {patient.age}</p>
      <p className="text-gray-700 dark:text-gray-300">
        Gender: {patient.gender}
      </p>
      <div className="btn-container flex space-x-2 mt-4">
        <button
          onClick={() => onEdit(patient)}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient._id)}
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
