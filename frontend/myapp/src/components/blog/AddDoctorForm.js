import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDoctorForm = () => {
  const navigate = useNavigate();
  const initialDoctorState = {
    category: '',
    imgSrc: '',
    badges: '',
    name: '',
    link: '',
  };

  const [doctor, setDoctor] = useState(initialDoctorState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDoctor = {
      ...doctor,
      badges: doctor.badges.split(',').map((badge) => badge.trim()),
    };

    try {
      const response = await axios.post('http://localhost:5000/doctorCard', newDoctor); // Updated route name
      console.log('Doctor added:', response.data);
      navigate('/');
      setDoctor(initialDoctorState);
    } catch (error) {
      console.error('There was an error adding the doctor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-4 bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-lg font-semibold">Add New Doctor</h2>
      <div className="mb-2">
        <label className="block mb-1">Specialty Category</label>
        <input
          type="text"
          name="category"
          value={doctor.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Profile Picture</label>
        <input
          type="text"
          name="imgSrc"
          value={doctor.imgSrc}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Badges (comma separated)</label>
        <input
          type="text"
          name="badges"
          value={doctor.badges}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Doctor Name</label>
        <input
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Blog Post Link</label>
        <input
          type="text"
          name="link"
          value={doctor.link}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700">
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctorForm;
