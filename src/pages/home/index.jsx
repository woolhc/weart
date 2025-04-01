import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
// import ads_1 from '@/pages/home/assets/ads_1.jpg';
// import ads_2 from '@/pages/home/assets/ads_2.jpg';
// import ads_3 from '@/pages/home/assets/ads_3.jpg';
// import ads_4 from '@/pages/home/assets/ads_4.jpg';
// import ads_5 from '@/pages/home/assets/ads_5.jpg';
// import cert1 from '@/pages/home/assets/cert_1.jpg';
// import cert2 from '@/pages/home/assets/cert_2.jpg';
// import cert3 from '@/pages/home/assets/cert_3.jpg';

const Home = () => {
  // 响应式判断
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  // 共用状态
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [currentTeacherSlide, setCurrentTeacherSlide] = useState(0);
  const [currentSceneSlide, setCurrentSceneSlide] = useState(0);

  // AdCarousel 部分
  const adCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div className="w-2 md:w-3 h-2 md:h-3 mx-1 rounded-full bg-[rgba(135,116,138,0.48)]"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center space-x-2 mb-4 md:mb-8",
    pauseOnHover: false,
  };

  // 轮播图数据
  const ads = [
    { id: 1, image: '/assets/home/lb1.png', description: '探索艺术的无限可能' },
    { id: 2, image: '/assets/home/lb2.png', description: '激发创意的艺术殿堂' },
    { id: 3, image: '/assets/home/lb3.png', description: '塑造未来艺术家' },
    { id: 4, image: '/assets/home/lb4.png', description: '专业的艺术教育' },
    { id: 5, image: '/assets/home/lb5.png', description: '开启艺术之旅' },
  ];

  // 证书图片数据
  const certificates = [
    { id: 1, image: '/assets/home/cert_1.jpg', alt: '证书 1' },
    { id: 2, image: '/assets/home/cert_2.jpg', alt: '证书 2' },
    { id: 3, image: '/assets/home/cert_3.jpg', alt: '证书 3' },
    { id: 4, image: '/assets/home/cert_1.jpg', alt: '证书 1' },
    { id: 5, image: '/assets/home/cert_2.jpg', alt: '证书 2' },
    { id: 6, image: '/assets/home/cert_3.jpg', alt: '证书 3' },
    { id: 7, image: '/assets/home/cert_1.jpg', alt: '证书 1' },
    { id: 8, image: '/assets/home/cert_2.jpg', alt: '证书 2' },
    { id: 9, image: '/assets/home/cert_3.jpg', alt: '证书 3' },
    { id: 10, image: '/assets/home/cert_1.jpg', alt: '证书 1' },
    { id: 11, image: '/assets/home/cert_2.jpg', alt: '证书 2' },
    { id: 12, image: '/assets/home/cert_3.jpg', alt: '证书 3' },
  ];

  // WhyWeArt 部分
  const navItems = [
    { id: 1, bgColor: 'bg-[#F26F1B]', textColor: 'text-white', text: '定制留学方案', 
      content: '个性化留学申请方案，专门针对艺术留学申请，定制专属申请方案，申请流程无缝对接。' },
    { id: 2, bgColor: 'bg-[#EACEE4]', textColor: 'text-[#E99322]', text: '丰富课程产品', 
      content: '多样化的课程选择，涵盖各类艺术技能和专业知识，满足不同学生的学习需求。' },
    { id: 3, bgColor: 'bg-[#7B5199]', textColor: 'text-[#DAD320]', text: '国际化教学', 
      content: '国际化教学模式，以学生为中心，源自加拿大成熟教学体系，注重多元互动体验。' },
    { id: 4, bgColor: 'bg-[#F5D5AF]', textColor: 'text-[#7B5199]', text: '2000+成功案例', 
      content: '大量成功的学生案例，证明我们教学方法的有效性和专业指导的价值。' },
    { id: 5, bgColor: 'bg-[#F25B26]', textColor: 'text-white', text: '专业导师团队', 
      content: '经验丰富的艺术教育专家，来自世界知名院校和机构，确保教学质量。' },
  ];

  // 添加状态管理当前激活的导航项
  const [activeNavItem, setActiveNavItem] = useState(3);

  // 处理导航项点击
  const handleNavItemClick = (id) => {
    setActiveNavItem(id);
  };

  // FeaturedCourses 部分
  const courses = [
    { id: 1, title: "AP艺术精选课程", image: '/assets/home/kc1.png' },
    { id: 2, title: "大学艺术作品集", image: '/assets/home/kc2.png' },
    { id: 3, title: "艺术高中作品集", image: '/assets/home/kc3.png' },
    { id: 4, title: "艺术升学规划", image: '/assets/home/kc4.png' },
    { id: 5, title: "青少年艺术教育", image: '/assets/home/kc5.png' },
    { id: 6, title: "美术系统课程", image: '/assets/home/kc6.png' }
  ];

  // InstructorTeam 部分
  const teachers = [
    {
      id: 1,
      name: "VIVIAN TANG",
      description: [
        "Former 985 University Lecturer",
        "Examiner for Joint Artistic Examinations",
        "13+ Years of Expertise in North American Academic Planning"
      ],
      image: '/assets/about/team/VIVIAN2.png'
    },
    {
      id: 2,
      name: "Maochun Li",
      description: [
        "Renowned Oil Painter",
        "Central Academy of Fine Arts",
        "Academic Leader of Professional Courses"
      ],
      image: '/assets/about/team/MAOCHUN.png'
    }
  ];

  // 教师轮播图设置
  const teacherSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => setCurrentTeacherSlide(next/(isMobile ? 1 : 2)),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 mx-1 rounded-full ${
          i === currentTeacherSlide ? 'bg-[#F26F26]' : 'bg-[rgba(242,111,38,0.5)]'
        }`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center mt-4 md:mt-8 space-x-2"
  };

  // PortfolioShowcase 部分
  const portfolios = [
    {
      id: 1,
      title: 'Canvas of Creativity',
      artist: 'EMILY',
      image: '/assets/home/zp1.jpg',
      bgColor: 'bg-[#c3878e]'
    },
    {
      id: 2,
      title: 'Journeys in Art',
      artist: 'ANNIE',
      image: '/assets/home/zp2.png',
      bgColor: 'bg-[#63fa3e]'
    },
    {
      id: 3,
      title: 'Expressions Unveiled',
      artist: 'XINHUI',
      image: '/assets/home/zp3.png',
      bgColor: 'bg-[#194b11]'
    },
    {
      id: 4,
      title: 'Visions in Progress',
      artist: 'DORA',
      image: '/assets/home/zp4.png',
      bgColor: 'bg-[#7bc429]'
    }
  ];

  // TeachingScene 部分
  const sceneSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => setCurrentSceneSlide(next),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full ${
          i === currentSceneSlide ? 'bg-white' : 'bg-[rgba(255,255,255,0.48)]'
        }`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center mt-4 space-x-2"
  };

  const scenes = [
    { id: 1, image: 'scene1.jpg' },
    { id: 2, image: 'scene2.jpg' },
    { id: 3, image: 'scene3.jpg' },
    { id: 4, image: 'scene4.jpg' },
    { id: 5, image: 'scene5.jpg' },
  ];

  return (
    <main className="overflow-hidden w-full">
      {/* Ad Carousel Section */}
      <section className="relative w-full">
        <Slider {...adCarouselSettings} className="w-full">
          {ads.map((ad) => (
            <div key={ad.id} className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
              <img
                src={ad.image}
                alt={ad.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg md:text-2xl lg:text-3xl font-medium">
                  {ad.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* 证书横向滚动展示区域 - 固定高度243px */}
      <section className="w-[1440px] mx-auto h-[243px] bg-white relative overflow-hidden">
        <div className="overflow-x-auto absolute inset-0 scrollbar-hide">
          <div className={`flex items-center space-x-4 w-full h-full ${certificates.length > 5 ? 'animate-scroll' : 'justify-center'}`} 
               onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
               onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
            {[...certificates, ...certificates].map((cert, index) => (
              <div 
                key={index} 
                className="flex-none w-[182px] h-[243px] bg-white shadow rounded"
              >
                <div className="overflow-hidden w-full h-full rounded">
                  <img
                    src={`${cert.image}`}
                    alt={cert.alt}
                    className="object-cover w-full h-full rounded transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 182 243' preserveAspectRatio='xMidYMid meet'%3E%3Crect fill='%23F0F0F0' width='182' height='243'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23666'%3E证书 " + cert.id + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WeArt Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          为什么选择WeArt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-lg p-6 md:p-8 cursor-pointer transform transition-transform hover:scale-105`}
              onClick={() => handleNavItemClick(item.id)}
            >
              <h3 className={`${item.textColor} text-xl md:text-2xl font-bold mb-4`}>
                {item.text}
              </h3>
              <p className="text-white text-sm md:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          精选课程
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative pt-[75%]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor Team Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          师资团队
        </h2>
        <Slider {...teacherSettings}>
          {teachers.map((teacher) => (
            <div key={teacher.id} className="px-2 md:px-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative pt-[100%]">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{teacher.name}</h3>
                  <ul className="space-y-2">
                    {teacher.description.map((desc, index) => (
                      <li key={index} className="text-sm md:text-base text-gray-600">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          优秀作品集
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className={`${portfolio.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="relative pt-[133%]">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                    {portfolio.artist}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {portfolio.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Scene Section */}
      <section className="relative py-8 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
            教学场景
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...sceneSettings}>
              {scenes.map((scene) => (
                <div key={scene.id} className="px-2">
                  <div className="relative pt-[56.25%]">
                    <img
                      src={scene.image}
                      alt={`Teaching scene ${scene.id}`}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 