import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import availableSlots from "./availableSlot";

const BookAppointment = () => {
  const [day, setDay] = useState("Sunday");
  const [timeSlot, setTimeSlot] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    const peerId = uuidv4();

    // Navigate to the VideoCall page with the peerId as state
    navigate("/video-call", { state: { peerId } });

    alert(`Appointment booked! Your Peer ID: ${peerId}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg max-w-md w-full mx-auto mt-50 mb-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Book Appointment
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Day:
          </label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
          >
            {Object.keys(availableSlots).map((dayOption) => (
              <option key={dayOption} value={dayOption}>
                {dayOption}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Time Slot:
          </label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
          >
            {availableSlots[day].map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
