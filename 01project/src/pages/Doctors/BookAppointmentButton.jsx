// src/components/BookAppointmentButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointmentButton = () => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/BookAppointment"); // Navigates to BookAppointment page
  };

  return (
    <button
      onClick={handleBookAppointmentClick}
      className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
    >
      Book Appointment
    </button>
  );
};

export default BookAppointmentButton;
