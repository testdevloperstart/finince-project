import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, link, Image }) => {  // Accept the Image prop here
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-5">
      <div className="p-4">
        <button className="border p-2 bg-yellow-500 text-lg font-semibold text-black rounded-xl">
          <NavLink
            to={link}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-black hover:text-yellow-700"
            }
          >
            {title}
          </NavLink>
        </button>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg mb-4">
          {/* Display Image */}
          {Image && (
            <img
              src={Image}
              alt={title}
              className="w-32 h-32 object-cover rounded-md mr-4"
            />
          )}

          {/* Display text content */}
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
