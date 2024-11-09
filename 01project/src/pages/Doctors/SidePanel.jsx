import Videocallbutton from "./videocallbutton";

const SidePanel = () => {
  return (
    <div className="shadow-lg p-5 rounded-lg bg-white max-w-6xl ">
      <div className="flex items-center justify-between border-b pb-4">
        <p className="text-lg font-semibold text-gray-800">Ticket Price</p>
        <span className="text-3xl font-bold text-blue-600">₹200</span>
      </div>

      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Available Time Slots:
        </p>
        <ul className="space-y-4">
          <li className="hover:bg-gray-50 p-3 rounded-md transition-colors">
            <p className="text-gray-700 font-medium mb-1">Sunday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
          <li className="hover:bg-gray-50 p-3 rounded-md transition-colors">
            <p className="text-gray-700 font-medium mb-1">Monday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
          <li className="hover:bg-gray-50 p-3 rounded-md transition-colors">
            <p className="text-gray-700 font-medium mb-1">Tunday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
          <li className="hover:bg-gray-50 p-3 rounded-md transition-colors">
            <p className="text-gray-700 font-medium mb-1">Wednesday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>
      <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
        Book Appointment
      </button>
      <Videocallbutton />
    </div>
  );
};

export default SidePanel;
