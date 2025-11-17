import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const MotionLink=motion(Link)

const AllGames = ({ card }) => {


  const { title, coverPhoto, id, description } = card;
  return (
    <>
   
      <MotionLink to={`/games-details/${id}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Cover Photo */}
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-48 object-cover transform  transition-transform duration-300"
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
      </MotionLink>


    </>
  );
};

export default AllGames;