import React from "react";

const TopGames = ({ top }) => {
  const { title, coverPhoto, description} = top;

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl cursor-pointer Framer Motion (now Motion)">
      {/* Cover Photo */}
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />

      {/* Card Content */}
      <div className="p-5 space-y-5">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Button */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Click Me
        </a>
      </div>
    </div>
  );
};

export default TopGames;
