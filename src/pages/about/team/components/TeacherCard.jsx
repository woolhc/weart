import React from 'react';
import PropTypes from 'prop-types';

const TeacherCard = ({ name, title, subtitle, subtitle2, image }) => {
  return (
    <div className="flex flex-col items-start w-full max-w-[298px]">
      {/* 图片容器 */}
      <div className="w-full h-[370px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 信息区域 */}
      <div className="w-full mt-3">
        <h3 className="text-base font-semibold uppercase">{name}</h3>
        <p className="text-sm font-normal mt-1">{title}</p>
        {subtitle && (
          <p className="text-xs font-light text-gray-600">{subtitle}</p>
        )}
        {subtitle2 && (
          <p className="text-xs font-light text-gray-600">{subtitle2}</p>
        )}
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subtitle2: PropTypes.string,
  image: PropTypes.string
};

export default TeacherCard; 