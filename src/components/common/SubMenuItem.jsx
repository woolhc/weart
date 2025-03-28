import React from 'react';
import PropTypes from 'prop-types';

const SubMenuItem = ({ text, onClick, active, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className="w-[180px] h-[36px] px-[10px] pl-[52px] py-[11px] flex justify-end items-center cursor-pointer hover:bg-white"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`text-[15px] font-normal leading-[1.21] transition-colors duration-200
        ${active ? 'text-[#F46801]' : 'text-[#282626] hover:text-[#F46801]'}`}
      >
        {text}
      </span>
    </div>
  );
};

SubMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default SubMenuItem; 