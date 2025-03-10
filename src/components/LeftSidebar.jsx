import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-medium">Menu</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600 text-lg" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">Dr. Chandler Bing</p>
              <button className="text-sm text-blue-500 underline">My Profile</button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 text-center mb-4">
            <div>
              <p className="text-lg font-bold">14</p>
              <p className="text-sm text-gray-500">Exp</p>
            </div>
            <div>
              <p className="text-lg font-bold">13</p>
              <p className="text-sm text-gray-500">Awards</p>
            </div>
            <div>
              <p className="text-lg font-bold">213</p>
              <p className="text-sm text-gray-500">Clients</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            <li className="cursor-pointer p-2 rounded hover:bg-gray-100">
              Dashboard
            </li>
            <li className="cursor-pointer p-2 rounded hover:bg-gray-100">
              Doctors
            </li>
            <li className="cursor-pointer p-2 rounded hover:bg-gray-100">
              Patients
            </li>
            <li className="cursor-pointer p-2 rounded hover:bg-gray-100">
              Settings
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
