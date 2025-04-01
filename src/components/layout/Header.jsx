import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import HeaderMenuDropdown from '../common/HeaderMenuDropdown';

const Header = () => {
  const [language, setLanguage] = useState('中文');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const aboutUsMenuItems = [
    { text: '师资团队', path: '/about/team' },
    { text: '合作伙伴', path: '/about/partners' },
    { text: '加入我们', path: '/about/join' },
  ];

  const courseMenuItems = [
    { text: '专业基础', path: '/courses/basic' },
    { text: '数码绘画', path: '/courses/digital' },
    { text: '人体写生', path: '/courses/figure' },
    { text: '雕塑课', path: '/courses/sculpture' },
    { text: '主题课', path: '/courses/theme' },
  ];

  const portfolioMenuItems = [
    { text: '私校申请作品集', path: '/portfolio/private' },
        { text: '艺术高中作品集', path: '/portfolio/highschool' },
        { text: 'AP作品集', path: '/portfolio/api', subItems: [
          { text: 'AP艺术史', path: '/portfolio/api/history' },
          { text: 'AP Drawing', path: '/portfolio/api/drawing' },
          { text: 'AP 2D Design', path: '/portfolio/api/2d' },
          { text: 'AP 3D Design', path: '/portfolio/api/3d' },
        ]},
        { text: '艺术大学作品集', path: '/portfolio/university' },
  ];

  const artPathMenuItems = [
    { text: '艺术背景提升', path: '/art-path/background' },
    { text: '夏校申请', path: '/art-path/summer-school' },
    { text: '艺术实践项目', path: '/art-path/practice' },
    { text: '艺术竞赛', path: '/art-path/competition' },
  ];

  const menuItems = [
    { 
      name: '关于我们', 
      link: '/about',
      subItems: aboutUsMenuItems
    },
    {
      name: '课程体系',
      link: '/courses',
      subItems: courseMenuItems
    },
    {
      name: '艺术作品集',
      link: '/portfolio',
      subItems: portfolioMenuItems
    },
    {
      name: '艺术爬藤',
      link: '/art-path',
      subItems: artPathMenuItems
    },
    {
      name: '竞赛',
      link: '/competition',
      subItems: []
    },
    {
      name: '联系我们',
      link: '/contact',
      subItems: []
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="py-4 w-full">
        <div className="flex justify-between items-center px-4 md:px-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="WeArt Logo" className="h-8 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <HeaderMenuDropdown
                key={index}
                title={item.name}
                menuItems={item.subItems}
                link={item.link}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          <button
            onClick={() => setLanguage(language === '中文' ? 'English' : '中文')}
            className="min-w-[80px] px-4 py-1.5 bg-transparent text-[#282626] hover:text-[#F46801] border border-[#282626] hover:border-[#F46801] rounded-md transition-all duration-300 text-center hidden md:block text-sm"
            style={{ backgroundColor: 'transparent' }}
          >
            {language}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />
      <nav
        className={`fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <button
            onClick={() => setLanguage(language === '中文' ? 'English' : '中文')}
            className="w-full px-4 py-2 bg-transparent text-[#282626] hover:text-[#F46801] transition-colors text-left md:hidden"
            style={{ backgroundColor: 'transparent' }}
          >
            {language}
          </button>
        </div>
        <div className="py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="px-4">
              <Link
                to={item.link}
                className="block py-2 text-gray-800 hover:text-[#F46801] transition-colors"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
              {item.subItems.length > 0 && (
                <div className="pl-4 border-l border-gray-200">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block py-2 text-sm text-gray-600 hover:text-[#F46801] transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header; 