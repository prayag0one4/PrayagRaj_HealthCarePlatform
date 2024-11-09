import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import availableSlots from './availableSlot';

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
    <div className="bg-white p-4 rounded shadow-lg max-w-md">
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

      <label className="block mb-2">Select Day:</label>
      <select value={day} onChange={(e) => setDay(e.target.value)} className="border p-2 rounded mb-4 w-full">
        {Object.keys(availableSlots).map((dayOption) => (
          <option key={dayOption} value={dayOption}>{dayOption}</option>
        ))}
      </select>

      <label className="block mb-2">Select Time Slot:</label>
      <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="border p-2 rounded mb-4 w-full">
        {availableSlots[day].map((slot) => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>

      <button onClick={handleBooking} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
