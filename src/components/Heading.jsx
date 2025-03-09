import React from "react";

const Heading = ({ title, breadcrumbs, buttons }) => {
  return (
    <div className="p-6 flex justify-between items-center pr-16 ">
      {/* Left Section - Title & Breadcrumbs */}
      <div>
        <h1 className="text-2xl font-medium text-teal-400 p-2">{title}</h1>
        <div className="flex items-center text-gray-500 text-sm">
        <span className="">🏠</span>
        <span className="mx-2">/</span>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center">
              <span className={index === breadcrumbs.length - 1 ? "text-gray-500 font-medium" : "text-teal-400"}>
                {crumb.text}
              </span>
              {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-3">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              btn.color === "blue" ? "bg-blue-600 text-white" : "bg-teal-500 text-white"
            }`}
            onClick={btn.onClick}
          >
            {btn.icon && <span>{btn.icon}</span>}
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Heading;
