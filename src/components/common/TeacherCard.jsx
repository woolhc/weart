import React from 'react';
import PropTypes from 'prop-types';

const TeacherCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-4 aspect-h-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-4xl">📷</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-[#2F1C3A]">{name}</h3>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 bg-[#F46801] rounded-full flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string
};

export default TeacherCard; 