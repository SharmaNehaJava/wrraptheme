import { FaInbox, FaCommentDots, FaCalendarAlt, FaFolderOpen, FaAddressBook, FaNewspaper, FaGlobe, FaPlus } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-12 bg-white shadow-md flex flex-col items-center py-12 gap-6">
      {/* Inbox */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaInbox />
      </button>

      {/* Chat */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaCommentDots />
      </button>

      {/* Calendar */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaCalendarAlt />
      </button>

      {/* File Manager */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaFolderOpen />
      </button>

      {/* Contact List */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaAddressBook />
      </button>

      {/* Blog */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaNewspaper />
      </button>

      {/* Globe / Website */}
      <button className="text-xl text-gray-700 hover:text-blue-500">
        <FaGlobe />
      </button>

      {/* Plus (+) Button */}
      <button className="text-xl text-green-600 hover:text-green-800 mt-auto">
        <FaPlus />
      </button>
    </div>
  );
};

export default RightSidebar;
