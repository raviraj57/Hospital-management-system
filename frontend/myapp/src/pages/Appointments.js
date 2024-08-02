import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentCard from "./AppointmentCard";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    gender: "",
    age: "", // Added age state
  });
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch appointments on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  // Handle form submission for adding a new appointment
  const handleAddAppointment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/appointments/add", newAppointment)
      .then((response) => {
        setAppointments([...appointments, response.data]);
        setNewAppointment({
          patientName: "",
          doctorName: "",
          date: "",
          gender: "",
          age: "", // Reset age state
        });
      })
      .catch((error) => console.error("Error adding appointment:", error));
  };

  // Handle form submission for updating an existing appointment
  const handleUpdateAppointment = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/appointments/update/${selectedAppointment._id}`, selectedAppointment)
      .then((response) => {
        const updatedAppointments = appointments.map((appointment) =>
          appointment._id === selectedAppointment._id ? response.data : appointment
        );
        setAppointments(updatedAppointments);
        setSelectedAppointment(null);
        setIsEditMode(false); // Switch back to Add mode
      })
      .catch((error) => console.error("Error updating appointment:", error));
  };

  // Handle deleting an appointment
  const handleDeleteAppointment = (id) => {
    axios
      .delete(`http://localhost:5000/appointments/delete/${id}`)
      .then(() => {
        setAppointments(appointments.filter((appointment) => appointment._id !== id));
      })
      .catch((error) => console.error("Error deleting appointment:", error));
  };

  // Handle editing an appointment
  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsEditMode(true); // Switch to Edit mode
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full p-4 md:w-1/2">
        <div className="p-4 bg-white border rounded-md shadow-md">
          <h4 className="mb-4 text-center">
            {isEditMode ? "Edit Appointment" : "Add New Appointment"}
          </h4>
          <form
            className="space-y-4"
            onSubmit={isEditMode ? handleUpdateAppointment : handleAddAppointment}
          >
            <div className="flex flex-col">
              <label>Patient Name:</label>
              <input
                type="text"
                value={isEditMode ? selectedAppointment.patientName : newAppointment.patientName}
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({ ...selectedAppointment, patientName: e.target.value })
                    : setNewAppointment({ ...newAppointment, patientName: e.target.value })
                }
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label>Gender:</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={isEditMode ? selectedAppointment.gender === "Male" : newAppointment.gender === "Male"}
                  onChange={(e) =>
                    isEditMode
                      ? setSelectedAppointment({ ...selectedAppointment, gender: e.target.value })
                      : setNewAppointment({ ...newAppointment, gender: e.target.value })
                  }
                  className="mr-2"
                />
                <label className="mr-4">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={isEditMode ? selectedAppointment.gender === "Female" : newAppointment.gender === "Female"}
                  onChange={(e) =>
                    isEditMode
                      ? setSelectedAppointment({ ...selectedAppointment, gender: e.target.value })
                      : setNewAppointment({ ...newAppointment, gender: e.target.value })
                  }
                  className="mr-2"
                />
                <label className="mr-4">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={isEditMode ? selectedAppointment.gender === "Other" : newAppointment.gender === "Other"}
                  onChange={(e) =>
                    isEditMode
                      ? setSelectedAppointment({ ...selectedAppointment, gender: e.target.value })
                      : setNewAppointment({ ...newAppointment, gender: e.target.value })
                  }
                  className="mr-2"
                />
                <label>Other</label>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Age:</label>
              <input
                type="number"
                value={isEditMode ? selectedAppointment.age : newAppointment.age}
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({ ...selectedAppointment, age: e.target.value })
                    : setNewAppointment({ ...newAppointment, age: e.target.value })
                }
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label>Doctor Name:</label>
              <input
                type="text"
                value={isEditMode ? selectedAppointment.doctorName : newAppointment.doctorName}
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({ ...selectedAppointment, doctorName: e.target.value })
                    : setNewAppointment({ ...newAppointment, doctorName: e.target.value })
                }
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label>Date:</label>
              <input
                type="date"
                value={isEditMode ? selectedAppointment.date : newAppointment.date}
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                    : setNewAppointment({ ...newAppointment, date: e.target.value })
                }
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              {isEditMode ? "Update Appointment" : "Add Appointment"}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/2">
        <div className="p-4 bg-white border rounded-md shadow-md">
          <h3 className="mb-4 text-center">Appointments ({appointments.length})</h3>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment._id}
                appointment={appointment}
                onEdit={handleEditAppointment}
                onDelete={handleDeleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
