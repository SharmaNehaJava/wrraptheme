import { FaInbox, FaCommentDots, FaCalendarAlt, FaFolderOpen, FaAddressBook, FaNewspaper, FaGlobe, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed right-0 top-0 h-full w-12 bg-white shadow-md flex flex-col items-center py-12 gap-6">
      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/messages")}>
        <FaInbox />
      </button>

      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/calendar")}>
        <FaCalendarAlt />
      </button>

      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/files")}>
        <FaFolderOpen />
      </button>

      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/contacts")}>
        <FaAddressBook />
      </button>

      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/blog")}>
        <FaNewspaper />
      </button>

      <button className="text-xl text-gray-700 hover:text-blue-500" onClick={() => navigate("/app/web-app")}>
        <FaGlobe />
      </button>

      <button className="text-xl text-green-600 hover:text-green-800 mt-auto">
        <FaPlus />
      </button>
    </div>
  );
};

export default RightSidebar;
