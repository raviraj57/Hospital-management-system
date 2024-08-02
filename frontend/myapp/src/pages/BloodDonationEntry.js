import React from 'react';

const BloodDonationEntry = ({ donation, onEdit, onDelete }) => {
  return (
    <div className="p-4 mb-2 border border-gray-300 rounded-md">
      <p className="font-bold">Donor Name: {donation.donorName}</p>
      <p>Gender: {donation.gender}</p>

      <p>Blood Group: {donation.bloodGroup}</p>
      <p>Quantity: {donation.quantity} ml</p>
      <p>Phone Number: {donation.phoneNumber}</p>
      <p>Date: {donation.date}</p>
      <p>Time: {donation.time}</p>
      <button
        onClick={() => onEdit(donation)}
        className="px-2 py-1 mt-2 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(donation._id)}
        className="px-2 py-1 mt-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default BloodDonationEntry;
