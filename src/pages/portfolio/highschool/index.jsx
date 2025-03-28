import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const HighSchool = () => {
  const courseModules = [
    {
      title: "基础技法训练",
      duration: "3个月",
      content: [
        "素描基础强化",
        "色彩表现技法",
        "构图原理应用",
        "材料技法掌握"
      ]
    },
    {
      title: "创意思维培养",
      duration: "2个月",
      content: [
        "创意发想方法",
        "主题创作实践",
        "艺术风格探索",
        "个人语言建立"
      ]
    },
    {
      title: "专项考试准备",
      duration: "2个月",
      content: [
        "考试要点解析",
        "模拟考试训练",
        "快速创作能力",
        "考试技巧指导"
      ]
    }
  ];

  const features = [
    {
      title: "专业师资",
      description: "具有丰富艺术高中升学指导经验的资深教师团队",
      icon: "👨‍🏫"
    },
    {
      title: "个性化教学",
      description: "根据学生基础和目标制定针对性的培养方案",
      icon: "🎯"
    },
    {
      title: "考试导向",
      description: "紧扣考试要求，强化考试重点项目训练",
      icon: "📝"
    },
    {
      title: "全程跟进",
      description: "从基础训练到最终考试的全过程专业指导",
      icon: "📊"
    }
  ];

  return (
    <PageLayout title="艺术高中作品集">
      {/* 课程模块 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">课程模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseModules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-[#F46801]">
                  {module.title}
                </h3>
                <span className="bg-[#F46801] text-white px-3 py-1 rounded-full text-sm">
                  {module.duration}
                </span>
              </div>
              <ul className="space-y-3">
                {module.content.map((item, idx) => (
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

      {/* 教学特色 */}
      <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">教学特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 报名咨询 */}
      <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">开启艺术高中升学之路</h2>
        <p className="mb-8 text-gray-300">
          专业的艺术高中作品集培训，助您实现艺术梦想
        </p>
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          预约免费咨询
        </button>
      </section>
    </PageLayout>
  );
};

export default HighSchool; 