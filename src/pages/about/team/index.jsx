import React from 'react';
import PageLayout from '@/components/common/PageLayout';
import TeacherCard from './components/TeacherCard';

// 导入教师照片
// import maochunImage from '@/assets/images/teachers/MAOCHUN.png';
// import joImage from '@/assets/images/teachers/JO.png';
// import titusImage from '@/assets/images/teachers/TITUS.png';
// import mancyImage from '@/assets/images/teachers/MANCY.png';
// import annieImage from '@/assets/images/teachers/ANNIE.png';
// import brianImage from '@/assets/images/teachers/BRIAN.png';
// import jessieImage from '@/assets/images/teachers/JESSIE.png';
// import sylviaImage from '@/assets/images/teachers/SYLVIA.png';
// import vanessaImage from '@/assets/images/teachers/VANESSA.png';
// import vivianImage from '@/assets/images/teachers/VIVIAN.png';
// import founderBg from '@/assets/images/teachers/founder-bg.png';

const Team = () => {
  const teachers = [
    {
      id: 1,
      name: "MAOCHUN",
      title: "Distinguished Senior Lecturer",
      subtitle: "International Oil Painting Artist",
      image: '/assets/about/team/MAOCHUN.png'
    },
    {
      id: 2,
      name: "JO",
      title: "Director of Admissions",
      subtitle: "Artistic Education Advisor",
      image: '/assets/about/team/JO.png'
    },
    {
      id: 3,
      name: "TITUS",
      title: "Animation Team Leader",
      image: '/assets/about/team/TITUS.png'
    },
    {
      id: 4,
      name: "MANCY",
      title: "Director of Foundational Arts",
      image: '/assets/about/team/MANCY.png'
    },
    {
      id: 5,
      name: "ANNIE",
      title: "Senior Layout Artist",
      subtitle: "Foundational Arts Instructor",
      image: '/assets/about/team/ANNIE.png'
    },
    {
      id: 6,
      name: "BRIAN",
      title: "Sculpture Instructor",
      subtitle: "Sculpture Artist",
      subtitle2: "SVA",
      image: '/assets/about/team/BRIAN.png'
    },
    {
      id: 7,
      name: "JESSIE",
      title: "Academic Affairs Manager",
      subtitle: "Project Coordinator",
      image: '/assets/about/team/JESSIE.png'
    },
    {
      id: 8,
      name: "SYLVIA",
      title: "Illustration Teaching Lead",
      image: '/assets/about/team/SYLVIA.png'
    },
    {
      id: 9,
      name: "VANESSA",
      title: "Architecture Instructor",
      subtitle: "Cornell University",
      image: '/assets/about/team/VANESSA.png'
    }
  ];

  return (
    <PageLayout>
      {/* 顶部标语部分 - 白色背景带圆形元素 */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 relative">
          <h1 className="text-[47px] font-light text-[#2F1C3A] max-w-3xl mb-4">
            Nurturing artistic growth and building pathways to success.
          </h1>
          
          {/* 右侧橙色圆形元素 */}
          <div className="absolute right-4 top-0 w-[230px] h-[230px] rounded-full bg-[#EB6A04] flex items-center justify-center">
            <p className="text-[15px] font-medium text-white text-center max-w-[160px]">
              Empowering creativity leading to success.
            </p>
          </div>
        </div>
      </section>

      {/* 创始人部分 - 背景图 */}
      <section className="w-full py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* 左侧Vivian名片 */}
            <div className="w-full md:w-1/5 mb-8 md:mb-0">
              <div className="p-6 text-center bg-white">
                <h3 className="text-[27px] font-normal text-[#2F1C3A]">Vivian</h3>
                <p className="text-[21px] font-light text-[rgba(47,28,58,0.62)]">Founder</p>
              </div>
            </div>
            
            {/* 中间图片 */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0 px-4">
              <div className="w-full overflow-hidden">
                <img 
                  src='/assets/about/team/VIVIAN.png'
                  alt="Vivian - Founder" 
                  className="w-full object-cover"
                />
              </div>
            </div>
            
            {/* 右侧内容区 - 带背景图 */}
            <div 
              className="w-full md:w-1/2 md:pl-4 p-6" 
              style={{ 
                background: `url('/assets/about/team/founder-bg.png')`,
                backgroundSize: 'contain', 
                backgroundPosition: 'center'
              }}
            >
              <h4 className="text-[31px] font-normal text-black mb-4">Inspiring Creative Pathways</h4>
              <p className="text-[15px] font-light text-black mb-6">
                Founder Vivian, a seasoned educator and visionary, brings over 13 years of expertise in North American academic planning and artistic excellence. Her vision focuses on nurturing the next generation of creators, inspiring students to explore, express, and transform their artistic dreams into meaningful realities.
              </p>
              
              <div className="mb-6">
                <h5 className="text-[19px] font-normal text-black mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#EB6A04] mr-2"></span>
                  Visionary Leadership
                </h5>
                <p className="text-[15px] font-light text-black">
                  creates a supportive community where creativity thrives and empowers students to reach their full potential.
                </p>
              </div>
              
              <div>
                <h5 className="text-[19px] font-normal text-black mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#EB6A04] mr-2"></span>
                  Empowering Artistic Journeys
                </h5>
                <p className="text-[15px] font-light text-black">
                  guides students on their unique artistic journeys with encouragement and direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍部分 - 白色背景 */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-[31px] font-light text-black mb-4">Our Team</h2>
          <div className="w-16 h-0.5 bg-black mb-12"></div>
          
          <p className="text-[17px] font-light text-black mb-16 w-full whitespace-normal leading-relaxed">
            WeArt的教学团队覆盖北美和中国，汇聚了顶尖的艺术家和教学资源，致力于为全球有艺术梦想的学员提供支持。这些导师不仅是教学专家，更是行业内的资深专业人士，能够将最新的行业理念与技术及时融入实践教学，为学生提供前沿的学习体验。
          </p>

          {/* 教师卡片网格 */}
          <div style={{ marginLeft: "200px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {teachers.map(teacher => (
              <div key={teacher.id} className="flex">
                <TeacherCard
                  name={teacher.name}
                  title={teacher.title}
                  subtitle={teacher.subtitle}
                  subtitle2={teacher.subtitle2}
                  image={teacher.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
