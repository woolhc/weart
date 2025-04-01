import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubMenuItem = ({ item, isActive, hasChildren, isMobile }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (isMobile) {
    return (
      <div className="pl-4">
        <Link
          to={item.path}
          className={`block py-2 text-sm ${
            isActive ? 'text-[#F46801]' : 'text-gray-600 hover:text-[#F46801]'
          } transition-colors`}
        >
          {item.text}
        </Link>
        {hasChildren && item.subItems && item.subItems.length > 0 && (
          <div className="pl-4 border-l border-gray-200">
            {item.subItems.map((subItem, idx) => (
              <SubMenuItem
                key={idx}
                item={subItem}
                isActive={false}
                hasChildren={subItem.subItems && subItem.subItems.length > 0}
                isMobile={true}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}
    >
      <Link
        to={item.path}
        className={`block px-4 py-2 text-[15px] font-normal text-right transition-colors
          ${isActive ? 'text-[#F46801]' : 'text-[#282626] hover:text-[#F46801]'}`}
      >
        <div className="flex items-center justify-end">
          <span>{item.text}</span>
          {hasChildren && (
            <span className="ml-2">›</span>
          )}
        </div>
      </Link>
      
      {hasChildren && showSubMenu && item.subItems && item.subItems.length > 0 && (
        <div className="absolute left-full top-0 w-[180px] bg-white shadow-lg">
          {item.subItems.map((subItem, idx) => (
            <SubMenuItem
              key={idx}
              item={subItem}
              isActive={false}
              hasChildren={subItem.subItems && subItem.subItems.length > 0}
              isMobile={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const HeaderMenuDropdown = ({ title, menuItems, link, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkActive = (items) => {
      if (location.pathname === link) return true;
      if (!items) return false;
      return items.some(item => {
        if (location.pathname.startsWith(item.path)) return true;
        if (item.subItems) return checkActive(item.subItems);
        return false;
      });
    };
    
    setIsActive(checkActive(menuItems));
  }, [location.pathname, link, menuItems]);

  if (isMobile) {
    return (
      <div className="px-4">
        <Link
          to={link}
          className={`block py-2 text-base ${
            isActive ? 'text-[#F46801]' : 'text-gray-800 hover:text-[#F46801]'
          } transition-colors`}
        >
          {title}
        </Link>
        {menuItems.length > 0 && (
          <div className="pl-4 border-l border-gray-200">
            {menuItems.map((item, idx) => (
              <SubMenuItem
                key={idx}
                item={item}
                isActive={location.pathname.startsWith(item.path)}
                hasChildren={item.subItems && item.subItems.length > 0}
                isMobile={true}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (menuItems.length === 0) {
    return (
      <Link 
        to={link}
        className="group relative w-[186px] h-[34px] flex flex-col items-center"
      >
        <div className="h-full px-[25px] py-[8px] flex flex-col items-center gap-[5px] cursor-pointer">
          <span className={`text-[15px] font-medium ${isActive ? 'text-[#F46801]' : 'text-[#282626] group-hover:text-[#F46801]'} transition-colors`}>
            {title}
          </span>
        </div>
        <div className={`absolute bottom-0 left-[25px] right-[25px] h-[2px] bg-[#F46801] transition-all duration-200 
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
        />
      </Link>
    );
  }

  return (
    <div 
      className="group relative w-[186px] h-[34px] flex flex-col items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={link}
        className="h-full px-[25px] py-[8px] flex flex-col items-center gap-[5px] cursor-pointer"
      >
        <span className={`text-[15px] font-medium ${isOpen || isActive ? 'text-[#F46801]' : 'text-[#282626] group-hover:text-[#F46801]'} transition-colors`}>
          {title}
        </span>
      </Link>
      <div className={`absolute bottom-0 left-[25px] right-[25px] h-[2px] bg-[#F46801] transition-all duration-200 
        ${isOpen || isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
      />

      {isOpen && menuItems.length > 0 && (
        <div className="absolute top-[34px] left-0 w-[180px] bg-white shadow-lg z-40">
          {menuItems.map((item, idx) => (
            <SubMenuItem
              key={idx}
              item={item}
              isActive={location.pathname.startsWith(item.path)}
              hasChildren={item.subItems && item.subItems.length > 0}
              isMobile={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

SubMenuItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    subItems: PropTypes.array
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  hasChildren: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
};

HeaderMenuDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      subItems: PropTypes.array
    })
  ),
  link: PropTypes.string.isRequired,
  isMobile: PropTypes.bool
};

HeaderMenuDropdown.defaultProps = {
  menuItems: [],
  isMobile: false
};

export default HeaderMenuDropdown; 