import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientCard from "./PatientCard";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  const handleAddPatient = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/patients/add", newPatient)
      .then((response) => {
        console.log(response.data);
        setPatients([...patients, response.data]);
        setNewPatient({ name: "", age: "", gender: "" });
      })
      .catch((error) => console.error("Error adding patient:", error));
  };

  const handleUpdatePatient = (id, e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/patients/update/${id}`, selectedPatient)
      .then((response) => {
        const updatePat = {
          ...selectedPatient,
          _id: id,
        };

        console.log("update patient", updatePat);

        setPatients(
          patients.map((patient) => (patient._id === id ? updatePat : patient))
        );

        setSelectedPatient(null);
        setIsEditMode(false); // Switch back to Add mode
      })
      .catch((error) => console.error("Error updating patient:", error));
  };

  const handleDeletePatient = (id) => {
    axios
      .delete(`http://localhost:5000/patients/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        setSelectedPatient(null);
        setPatients(patients.filter((patient) => patient._id !== id));
      })
      .catch((error) => console.error("Error deleting patient:", error));
  };

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
    setIsEditMode(true); // Switch to Edit mode
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="form-section w-full md:w-1/2 md:mr-4 mb-4 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">{isEditMode ? "Edit Patient" : "Add New Patient"}</h4>
        <form
          onSubmit={
            isEditMode
              ? (e) => handleUpdatePatient(selectedPatient._id, e)
              : handleAddPatient
          }
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Name: </label>
            <input
              type="text"
              value={isEditMode ? selectedPatient.name : newPatient.name}
              onChange={(e) =>
                isEditMode
                  ? setSelectedPatient({
                      ...selectedPatient,
                      name: e.target.value,
                    })
                  : setNewPatient({
                      ...newPatient,
                      name: e.target.value,
                    })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Age: </label>
            <input
              type="text"
              value={isEditMode ? selectedPatient.age : newPatient.age}
              onChange={(e) =>
                isEditMode
                  ? setSelectedPatient({
                      ...selectedPatient,
                      age: e.target.value,
                    })
                  : setNewPatient({
                      ...newPatient,
                      age: e.target.value,
                    })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender: </label>
            <input
              type="text"
              value={isEditMode ? selectedPatient.gender : newPatient.gender}
              onChange={(e) =>
                isEditMode
                  ? setSelectedPatient({
                      ...selectedPatient,
                      gender: e.target.value,
                    })
                  : setNewPatient({
                      ...newPatient,
                      gender: e.target.value,
                    })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            {isEditMode ? "Update Patient" : "Add Patient"}
          </button>
        </form>
      </div>

      <div className="patients-section w-full md:w-1/2">
        <h3 className="text-center text-xl font-semibold mb-4">Patients ({patients.length})</h3>

        <div className="patient-list space-y-4">
          {patients.map((patient) => (
            <PatientCard
              key={patient._id}
              patient={patient}
              onEdit={handleEditPatient}
              onDelete={handleDeletePatient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
