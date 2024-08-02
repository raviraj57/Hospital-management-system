import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <img
        src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png'
        alt="404 Not Found"
        className="w-64 mb-4"
      />
      <h1 className="mb-2 text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
      <p className="mb-6 font-bold text-gray-500">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
