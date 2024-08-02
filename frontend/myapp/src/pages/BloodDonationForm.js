import React, { useState, useEffect } from 'react';
import BloodDonationEntry from './BloodDonationEntry';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    bloodGroup: '',
    quantity: '',
    phoneNumber: '',
    date: '',
    time: '',
    gender: 'male', // Default gender value
  });
  const [donations, setDonations] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/bloodDonations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        const updatedDonation = {
          ...formData,
          _id: editId,
        };
        await axios.put(`http://localhost:5000/bloodDonations/update/${editId}`, updatedDonation);
        setDonations(donations.map(donation => (donation._id === editId ? updatedDonation : donation)));
        setIsEditing(false);
        setEditId(null);
      } catch (error) {
        console.error('Error updating donation:', error);
      }
    } else {
      try {
        const newDonation = {
          ...formData,
          _id: uuidv4(),
        };
        const response = await axios.post('http://localhost:5000/bloodDonations/add', newDonation);
        setDonations([...donations, response.data]);
      } catch (error) {
        console.error('Error adding donation:', error);
      }
    }
    setFormData({
      donorName: '',
      bloodGroup: '',
      quantity: '',
      phoneNumber: '',
      date: '',
      time: '',
      gender: 'male',
    });
  };

  const handleEdit = (donation) => {
    setFormData({
      donorName: donation.donorName,
      bloodGroup: donation.bloodGroup,
      quantity: donation.quantity,
      phoneNumber: donation.phoneNumber,
      date: donation.date,
      time: donation.time,
      gender: donation.gender,
    });
    setIsEditing(true);
    setEditId(donation._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/bloodDonations/delete/${id}`);
      const updatedDonations = donations.filter(donation => donation._id !== id);
      setDonations(updatedDonations);
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-white border rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">
        {isEditing ? 'Edit Blood Donation' : 'Blood Donation Form'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="donorName" className="mb-1">Donor Name:</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={formData.donorName}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Gender:</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="bloodGroup" className="mb-1">Blood Group:</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-1">Quantity (ml):</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="mb-1">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="time" className="mb-1">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md"
            required
          />
        </div>
    
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-center">Blood Donation Entries</h2>
        {donations.length > 0 ? (
          donations.map(donation => (
            <BloodDonationEntry
              key={donation._id}
              donation={donation}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No donations found.</p>
        )}
      </div>
    </div>
  );
};

export default BloodDonationForm;
