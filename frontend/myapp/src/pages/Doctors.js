// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DoctorCard from "./DoctorCard";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [newDoctor, setNewDoctor] = useState({
//     name: "",
//     specialty: "",
//   });
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/doctors")
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error("Error fetching doctors:", error));
//   }, []);

//   const handleAddDoctor = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/doctors/add", newDoctor)
//       .then((response) => {
//         console.log("doc", response.data);
//         setDoctors([...doctors, response.data]);
//         setNewDoctor({
//           name: "",
//           specialty: "",
//         });
//       })
//       .catch((error) => console.error("Error adding doctor:", error));
//   };

//   const handleUpdateDoctor = (id, e) => {
//     e.preventDefault();
//     axios
//       .post(`http://localhost:5000/doctors/update/${id}`, selectedDoctor)
//       .then((response) => {
//         const updateDoc = {
//           ...selectedDoctor,
//           _id: id,
//         };

//         console.log("update doc", updateDoc);

//         setDoctors(
//           doctors.map((doctor) => (doctor._id === id ? updateDoc : doctor))
//         );

//         setSelectedDoctor(null);
//         setIsEditMode(false); // Switch back to Add mode
//       })
//       .catch((error) => console.error("Error updating doctor:", error));
//   };

//   const handleDeleteDoctor = (id) => {
//     axios
//       .delete(`http://localhost:5000/doctors/delete/${id}`)
//       .then((response) => {
//         console.log(response.data);
//         setDoctors(doctors.filter((doctor) => doctor._id !== id));
//       })
//       .catch((error) => console.error("Error deleting doctor:", error));
//   };

//   const handleEditDoctor = (doctor) => {
//     setSelectedDoctor(doctor);
//     setIsEditMode(true); // Switch to Edit mode
//   };

//   return (
//     <div className="flex flex-wrap items-center justify-center">
      
//       <div className="w-1/2 p-4">
//         <h4 className="mb-4 text-center">{isEditMode ? "Edit Doctor" : "Add New Doctor"}</h4>
//         <form
//           onSubmit={
//             isEditMode
//               ? (e) => handleUpdateDoctor(selectedDoctor._id, e)
//               : handleAddDoctor
//           }
//         >
//           <label className="block mb-2">Name:</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 mb-4 border rounded-md"
//             value={isEditMode ? selectedDoctor.name : newDoctor.name}
//             onChange={(e) =>
//               isEditMode
//                 ? setSelectedDoctor({
//                     ...selectedDoctor,
//                     name: e.target.value,
//                   })
//                 : setNewDoctor({
//                     ...newDoctor,
//                     name: e.target.value,
//                   })
//             }
//           />

//           <label className="block mb-2">Specialty:</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 mb-4 border rounded-md"
//             value={isEditMode ? selectedDoctor.specialty : newDoctor.specialty}
//             onChange={(e) =>
//               isEditMode
//                 ? setSelectedDoctor({
//                     ...selectedDoctor,
//                     specialty: e.target.value,
//                   })
//                 : setNewDoctor({
//                     ...newDoctor,
//                     specialty: e.target.value,
//                   })
//             }
//           />

//           <button
//             type="submit"
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//           >
//             {isEditMode ? "Update Doctor" : "Add Doctor"}
//           </button>
//         </form>
//       </div>

//       <div className="w-1/2 p-4">
//         <h3 className="mb-4 text-center">Doctors ({doctors.length})</h3>
//         <div className="flex flex-wrap justify-center">
//           {doctors.map((doctor) => (
//             <DoctorCard
//               key={doctor._id}
//               doctor={doctor}
//               onEdit={handleEditDoctor}
//               onDelete={handleDeleteDoctor}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
