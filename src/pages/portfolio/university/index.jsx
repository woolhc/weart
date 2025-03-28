import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const University = () => {
  const portfolioGuidance = [
    {
      title: "作品集规划",
      description: "制定个性化作品集准备方案",
      items: [
        "院校要求分析",
        "个人特色定位",
        "创作主题确定",
        "时间进度规划"
      ]
    },
    {
      title: "创作指导",
      description: "专业的创作技法与思维指导",
      items: [
        "技法深度提升",
        "创意思维培养",
        "媒材多样运用",
        "风格特色塑造"
      ]
    },
    {
      title: "文案准备",
      description: "专业的文字材料撰写指导",
      items: [
        "艺术家陈述",
        "创作理念阐述",
        "技法说明文档",
        "个人简历制作"
      ]
    }
  ];

  const targetSchools = [
    {
      country: "英国",
      schools: [
        "Central Saint Martins",
        "Royal College of Art",
        "University of the Arts London",
        "Glasgow School of Art"
      ]
    },
    {
      country: "美国",
      schools: [
        "Rhode Island School of Design",
        "School of Visual Arts",
        "Parsons School of Design",
        "Maryland Institute College of Art"
      ]
    },
    {
      country: "加拿大",
      schools: [
        "OCAD University",
        "Emily Carr University",
        "NSCAD University",
        "Concordia University"
      ]
    }
  ];

  const successStories = [
    {
      name: "Sarah L.",
      school: "Central Saint Martins",
      major: "Fine Art",
      year: "2023",
      highlight: "获得学院奖学金",
      portfolio: "结合传统绘画和数字媒体的创新表现"
    },
    {
      name: "Michael W.",
      school: "Rhode Island School of Design",
      major: "Illustration",
      year: "2023",
      highlight: "作品入选学院展览",
      portfolio: "以环保主题为核心的系列插画创作"
    },
    {
      name: "Emma C.",
      school: "OCAD University",
      major: "Digital Painting",
      year: "2022",
      highlight: "获得最佳新生奖",
      portfolio: "探索数字艺术与传统文化的融合"
    }
  ];

  return (
    <PageLayout title="艺术大学作品集">
      {/* 作品集指导 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">作品集指导</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioGuidance.map((guidance, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                {guidance.title}
              </h3>
              <p className="text-gray-600 mb-4">{guidance.description}</p>
              <ul className="space-y-3">
                {guidance.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 目标院校 */}
      <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">目标院校</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetSchools.map((region, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                {region.country}
              </h3>
              <ul className="space-y-3">
                {region.schools.map((school, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {school}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 成功案例 */}
      <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                {story.name}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>录取院校：{story.school}</p>
                <p>专业方向：{story.major}</p>
                <p>申请年份：{story.year}</p>
                <p className="text-[#F46801] font-semibold">{story.highlight}</p>
                <p className="text-sm mt-4">{story.portfolio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 咨询预约 */}
      <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">开启艺术留学之旅</h2>
        <p className="mb-8 text-gray-300">
          专业的作品集指导，助您申请理想的艺术院校
        </p>
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          预约免费咨询
        </button>
      </section>
    </PageLayout>
  );
};

export default University; 