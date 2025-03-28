import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ads_1 from '@/pages/home/assets/ads_1.jpg';
// import ads_2 from '@/pages/home/assets/ads_2.jpg';
// import ads_3 from '@/pages/home/assets/ads_3.jpg';
// import ads_4 from '@/pages/home/assets/ads_4.jpg';
// import ads_5 from '@/pages/home/assets/ads_5.jpg';
// import cert1 from '@/pages/home/assets/cert_1.jpg';
// import cert2 from '@/pages/home/assets/cert_2.jpg';
// import cert3 from '@/pages/home/assets/cert_3.jpg';

const Home = () => {
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
      <div className="w-3 h-3 mx-1 rounded-full bg-[rgba(135,116,138,0.48)]"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center space-x-2",
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

  const teacherSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => setCurrentTeacherSlide(next/2),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 mx-1 rounded-full ${
          i === currentTeacherSlide ? 'bg-[#F26F26]' : 'bg-[rgba(242,111,38,0.5)]'
        }`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center mt-8 space-x-2"
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
      {/* AdCarousel 部分 */}
      <section className="pt-0 w-full">
        {/* 主轮播图区域 */}
        <div className="w-[1440px] mx-auto h-[683px]">
          <Slider {...adCarouselSettings} className="h-full ad-carousel">
            {ads.map((ad) => (
              <div key={ad.id} className="h-full outline-none">
                <div className="relative w-full h-full">
                  {/* 轮播图背景 */}
                  <div className="flex justify-center items-center w-full h-full bg-white">
                    <div className="flex relative justify-center items-center w-full h-full">
                      {/* 轮播图片 */}
                      <img 
                        src={`${ad.image}`} 
                        alt={`轮播图 ${ad.id}`} 
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400' preserveAspectRatio='xMidYMid meet'%3E%3Crect fill='%23F0F0F0' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23666'%3E轮播图 " + ad.id + "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      {/* 描述文字 */}
                      <div className="absolute bottom-[120px] right-[40px]">
                        <p className="font-['Inter'] font-semibold text-[20px] leading-[24px] text-[#404040]">
                          {ad.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
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

      {/* WhyWeArt 部分 */}
      <section className="w-[1440px] mx-auto h-[801px] mb-10 relative bg-white overflow-hidden">
        <div className="absolute left-[103px] top-[39px]">
          <h2 className="text-[25px] font-normal text-[#431B26] leading-[1.21em]">
            为什么选择WeArt
          </h2>
        </div>
        
        {/* 导航和内容区域 */}
        <div className="absolute top-[81px] w-full h-[720px] flex">
          {navItems.map((item) => {
            // 判断是否为当前激活项
            const isActive = activeNavItem === item.id;
            
            // 设置不同的宽度
            const width = isActive ? 'calc(100% - 340px)' : '85px';
            
            return (
              <div 
                key={item.id} 
                onClick={() => handleNavItemClick(item.id)}
                className={`h-[720px] relative cursor-pointer ${isActive ? 'bg-white' : item.bgColor}`}
                style={{ 
                  width,
                  order: item.id,
                  transition: 'width 500ms ease'
                }}
              >
                {/* 非激活状态 - 收缩按钮 */}
                {!isActive && (
                  <div className="relative w-full h-full">
                    {/* 垂直文本区域 - 参考示意图位置 */}
                    <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2">
                      <p 
                        className={`${item.textColor} text-[33px] font-black whitespace-nowrap`}
                        style={{
                          transform: 'rotate(-90deg)',
                          transformOrigin: 'center'
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                    
                    {/* 底部标识符 */}
                    <div className="absolute right-6 bottom-6 w-7 h-7 rounded-full border-2 border-[#2F1C3A] flex items-center justify-center">
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M1 1L6 6L1 11" stroke="#2F1C3A" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* 内容区域 - 激活状态可见 */}
                {isActive && (
                  <div className="w-full h-full">
                    <div className="flex flex-col px-16 absolute bottom-[120px] w-full">
                      <h3 className="text-[63px] font-black text-[#311C3B] leading-[76px] mb-8">
                        {item.text}
                      </h3>
                      <p className="text-[25px] text-[#311C3B] leading-[30px] max-w-[765px]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FeaturedCourses 部分 */}
      <section className="w-[1440px] mx-auto py-16 mb-10 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12">
            <h2 className="text-[25px] font-normal text-[#431B26] leading-[1.21em] container mx-auto px-4 mb-8">
              精选课程
            </h2>
          </div>
          
          {/* 课程列表 3x2布局 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => (
              <div key={course.id} className="w-[342px] h-[392px] bg-white rounded-lg overflow-hidden relative">
                {/* 课程图片 */}
                <div className="w-full h-[300px] bg-gray-200">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                
                {/* 课程标题 */}
                <div className="absolute right-0 bottom-0 left-0 p-6 bg-white">
                  <h3 className="text-[20px] font-medium text-[#311C3B] text-center">{course.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* InstructorTeam 部分 */}
      <section className="w-[1440px] mx-auto bg-white mb-10">
        <div className="pl-[103px] pt-[39px] pb-[120px]">
          <div className="mb-[60px]">
            <h2 className="text-[25px] font-normal text-[#431B26] leading-[1.21em] container mx-auto px-4 mb-8">
              师资团队
            </h2>
          </div>
          
          {/* 教师轮播 1*2布局 */}
          <div className="w-[1234px]">
            <Slider {...teacherSettings}>
              {teachers.map(teacher => (
                <div key={teacher.id} className="px-[17px]">
                  <div className="w-[600px] h-[400px] relative">
                    {/* 教师照片 */}
                    <div className="w-[400px] h-[400px] bg-gray-200">
                      {teacher.image ? (
                        <img src={teacher.image} alt={teacher.name} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    
                    {/* 教师信息 - 覆盖在图片右侧 */}
                    <div className="absolute top-[60px] right-0 w-[300px] bg-white pl-[40px]">
                      <h3 className="text-[25px] font-normal text-[#282626] mb-[24px]">{teacher.name}</h3>
                      {Array.isArray(teacher.description) ? (
                        <div className="space-y-[16px]">
                          {teacher.description.map((item, index) => (
                            <p key={index} className="text-[16px] font-normal text-[#282626] leading-[19px] opacity-80">
                              • {item}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[16px] font-normal text-[#282626] leading-[19px] opacity-80">{teacher.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* PortfolioShowcase 部分 */}
      <section className="w-[1440px] mx-auto h-[884px] bg-white flex items-center justify-center mb-10">
        <div className="flex">
          {portfolios.map(portfolio => (
            <div 
              key={portfolio.id}
              className={`w-[300px] h-[824px] overflow-hidden relative ${portfolio.bgColor}`}
            >
              {/* 作品图片 */}
              <div className="w-full h-full">
                {portfolio.image ? (
                  <img src={portfolio.image} alt={portfolio.title} className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              
              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              
              {/* 作品信息 */}
              <div className="absolute bottom-0 left-0 right-0 pb-[24px] pt-0 px-0">
                <div className="ml-[24px] mb-[8px]">
                  <p className="text-2xl font-normal text-white">{portfolio.artist}</p>
                </div>
                <div className="flex items-center ml-[24px] mr-[24px]">
                  <h3 className="flex-1 text-xl font-light text-white">{portfolio.title}</h3>
                  
                  {/* 箭头按钮 */}
                  <button className="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1 1L6 6L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TeachingScene 部分 */}
      <section className="w-[1440px] h-[801px] mx-auto bg-white">
        <div className="flex h-full">
          {/* 左侧内容区域 */}
          <div className="w-[720px] relative pt-[39px] pl-[45px]">
            {/* 主标题 */}
            <div className="mb-[60px]">
              <h2 className="text-[63px] font-black text-[#282626] leading-[76px]">激发创意，</h2>
              <h2 className="text-[63px] font-black text-[#282626] leading-[76px]">塑造未来</h2>
            </div>

            {/* 副标题 */}
            <div className="mb-[30px]">
              <p className="text-[25px] font-normal text-[#282626]">创意在此焕发新生</p>
            </div>

            {/* 描述文字 */}
            <div className="w-[507px] mb-[40px]">
              <p className="text-[16px] leading-[19px] text-[#282626]">
                在WeArt学校，我们通过精心设计的学习环境和创新的课程，致力于激发每位学生的创造潜力，为他们的艺术旅程铺就成功之路。感受艺术卓越的理想环境，我们精心设计的空间与专注的教师团队共同支持您的创意之旅
              </p>
            </div>

            {/* 地图组件 */}
            <div className="w-[507px] h-[180px]">
              <iframe 
                title="WeArt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5711001262204!2d-79.3485732!3d43.855651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3e1a302f823%3A0xb3c756c2100ab1f3!2s21%20Fairburn%20Dr%20%2320%2C%20Markham%2C%20ON%20L6G%200A4!5e0!3m2!1sen!2sca!4v1615923234567!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="w-[720px] relative">
            {/* 右上角文字 */}
            <div className="absolute right-[45px] top-[39px] text-right">
              <p className="text-[16px] text-[#282626] mb-[8px]">精心打造的空间</p>
              <p className="text-[16px] text-[#282626]">艺术与卓越在此交融</p>
            </div>

            {/* 右侧轮播图 */}
            <div className="absolute right-[45px] top-[81px] w-[507px] h-[720px] bg-[#404040] overflow-hidden">
              <Slider {...sceneSettings} className="teaching-scene-carousel">
                {scenes.map((scene) => (
                  <div key={scene.id} className="h-[720px]">
                    <div className="w-full h-full bg-gray-600"></div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 