import React from "react";

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  return (
    <div className="p-4 mb-4 border rounded-md shadow-md">
      <p className="mb-2">
        <span className="font-bold">Patient:</span> {appointment.patientName}
      </p>
      <p className="mb-2">
        <span className="font-bold">Gender:</span> {appointment.gender}
      </p>
      <p className="mb-2">
        <span className="font-bold">Age:</span> {appointment.age}
      </p>
      <p className="mb-2">
        <span className="font-bold">Doctor:</span> {appointment.doctorName}
      </p>
      <p className="mb-2">
        <span className="font-bold">Date:</span>{" "}
        {new Date(appointment.date).toLocaleDateString()}
      </p>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => onEdit(appointment)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          onClick={() => onDelete(appointment._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
