import { FaBars, FaSearch, FaBell, FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white  w-full pr-16">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <button className="text-xl text-gray-500">
          <FaBars />
        </button>
        {/* Logo */}
        <a href="/" className="text-2xl font-medium" style={{color: '#323A45'}}>ECLINITION</a>
      </div>

      {/* Center Section (Empty Space) */}
      <div className="flex-1"></div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Notification Bell */}
        <FaBell className="text-gray-600 cursor-pointer hover:text-blue-500" />
        <FaPowerOff className="text-gray-600 cursor-pointer hover:text-red-500" />
      </div>
    </nav>
  );
};

export default Navbar;
