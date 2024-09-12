// src/components/Card.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, link }) => {
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
        <p className="mt-2 ml-20 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
