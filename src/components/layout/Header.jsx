import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import HeaderMenuDropdown from '../common/HeaderMenuDropdown';

const Header = () => {
  const [language, setLanguage] = useState('中文');

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

  return (
    <header className="w-full bg-white shadow-md">
      <div className="py-4 w-full">
        <div className="flex justify-between items-center px-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="WeArt Logo" className="h-12" />
          </Link>

          <nav className="hidden items-center space-x-1 md:flex">
            {menuItems.map((item, index) => (
              <HeaderMenuDropdown
                key={index}
                title={item.name}
                menuItems={item.subItems}
                link={item.link}
              />
            ))}
          </nav>

          <button
            onClick={() => setLanguage(language === '中文' ? 'English' : '中文')}
            className="min-w-[80px] px-4 py-2 text-[#282626] hover:text-[#F46801] transition-colors text-center"
          >
            {language}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 