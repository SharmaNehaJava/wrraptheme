import React, { useState } from 'react';
import { FaInbox, FaPaperPlane, FaFileAlt, FaFolderOpen, FaStar, FaTrash } from 'react-icons/fa';
import { MdOutlineStarBorder, MdOutlineStar } from 'react-icons/md';

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Herman Beck', tag: 'MARKETING', content: 'Lorem Ipsum is simply dummy text...', date: '23 Jun', highlight: true },
    { id: 2, sender: 'Mary Adams', tag: 'SUPPORT', content: 'There are many variations of Lorem Ipsum...', date: '22 Jun' },
    { id: 3, sender: 'June Lane', tag: 'FAMILY', content: 'Lorem Ipsum is simply dummy text...', date: '20 Jun', highlight: false },
  ]);

  const [selectedMessages, setSelectedMessages] = useState([]);

  // Toggle highlight (Star feature)
  const toggleHighlight = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, highlight: !msg.highlight } : msg
      )
    );
  };

  // Handle checkbox selection
  const handleSelect = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id)
        ? prev.filter((msgId) => msgId !== id)
        : [...prev, id]
    );
  };

  // Delete selected messages
  const handleDelete = () => {
    setMessages(messages.filter((msg) => !selectedMessages.includes(msg.id)));
    setSelectedMessages([]); // Clear selected messages after deletion
  };

  return (
    <div className='h-full w-screen flex pr-18 m-4'>
      {/* Left Sidebar */}
      <div className='w-1/4 bg-white p-4 border border-gray-200'>
        <button className='w-full bg-red-500 text-white py-3 rounded-md mb-6'>
          Compose
        </button>

        {/* Sidebar Menu */}
        <div className='space-y-4'>
          <MenuItem icon={<FaInbox />} label="Inbox" count={6} color="bg-green-100 text-green-600" />
          <MenuItem icon={<FaPaperPlane />} label="Sent" />
          <MenuItem icon={<FaFileAlt />} label="Draft" count={3} color="bg-blue-100 text-blue-600" />
          <MenuItem icon={<FaFolderOpen />} label="Outbox" />
          <MenuItem icon={<FaStar />} label="Starred" count={6} color="bg-yellow-100 text-yellow-600" />
          <MenuItem icon={<FaTrash />} label="Trash" count={9} color="bg-red-100 text-red-600" />
        </div>
      </div>

      {/* Main Inbox Section */}
      <div className='w-3/4 p-4 border border-gray-200'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-medium text-gray-600'>Inbox</h2>
          <input
            type="text"
            placeholder='Search Mail'
            className='border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Action Buttons */}
        <div className='flex justify-end space-x-4 mb-4'>
          <button
            onClick={handleDelete}
            className={`px-3 py-1 bg-red-500 text-white rounded-md ${!selectedMessages.length && 'opacity-0 '}`}
            disabled={!selectedMessages.length}
          >
            Delete
          </button>
        </div>

        {/* Sample Messages List */}
        <div className='bg-white p-4 rounded-md shadow-md'>
          {messages.map((msg) => (
            <div key={msg.id} className={`p-2 border-b last:border-none flex items-center gap-3 ${msg.highlight && 'bg-yellow-100'}`}>
              <input
                type="checkbox"
                checked={selectedMessages.includes(msg.id)}
                onChange={() => handleSelect(msg.id)}
              />
              <div
                className='cursor-pointer'
                onClick={() => toggleHighlight(msg.id)}
              >
                {msg.highlight ? (
                  <MdOutlineStar className='text-yellow-500 text-xl' />
                ) : (
                  <MdOutlineStarBorder className='text-gray-400 text-xl' />
                )}
              </div>
              <div className='flex-1'>
                <span className='font-semibold'>{msg.sender}</span>
                <span className='ml-2 text-xs px-2 py-1 rounded bg-gray-200'>{msg.tag}</span>
                <p className='text-gray-500 text-sm'>{msg.content}</p>
              </div>
              <div className='text-gray-400 text-sm'>{msg.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sidebar Menu Item Component
const MenuItem = ({ icon, label, count, color }) => (
  <div className='flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md'>
    <div className='flex items-center gap-2'>
      {icon}
      <span>{label}</span>
    </div>
    {count && (
      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${color}`}>
        {count}
      </span>
    )}
  </div>
);

export default Messages;
