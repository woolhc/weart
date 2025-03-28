import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[40px] font-bold text-[#282626] mb-8">{title}</h1>
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout; 