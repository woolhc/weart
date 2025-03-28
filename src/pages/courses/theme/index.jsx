import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const Theme = () => {
  const themes = [
    {
      title: "艺术探索",
      description: "探索不同艺术风格和表现形式",
      content: [
        "现代艺术风格研究",
        "混合媒材创作",
        "实验性艺术表现",
        "个人风格探索"
      ]
    },
    {
      title: "创意思维",
      description: "培养创造性思维和问题解决能力",
      content: [
        "创意思维训练",
        "艺术概念发展",
        "创作主题策划",
        "作品创意呈现"
      ]
    },
    {
      title: "文化艺术",
      description: "探索不同文化背景下的艺术表现",
      content: [
        "世界艺术文化",
        "传统艺术研究",
        "当代艺术解析",
        "跨文化创作"
      ]
    }
  ];

  const schedule = [
    {
      phase: "探索阶段",
      duration: "4周",
      activities: [
        "艺术风格研究",
        "创作主题确定",
        "材料技法实验",
        "创意构思发展"
      ]
    },
    {
      phase: "创作阶段",
      duration: "6周",
      activities: [
        "作品创作指导",
        "技法深化训练",
        "创作过程记录",
        "阶段性评估"
      ]
    },
    {
      phase: "呈现阶段",
      duration: "2周",
      activities: [
        "作品完善修改",
        "展示方案设计",
        "艺术家陈述",
        "成果展示"
      ]
    }
  ];

  return (
    <PageLayout title="主题课程">
      <div className="space-y-12">
        {/* 课程主题 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程主题</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#F46801]">
                  {theme.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {theme.description}
                </p>
                <ul className="space-y-2">
                  {theme.content.map((item, idx) => (
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

        {/* 课程安排 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程安排</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedule.map((phase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-[#F46801]">
                    {phase.phase}
                  </h3>
                  <span className="bg-[#F46801] text-white px-3 py-1 rounded-full text-sm">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 报名咨询 */}
        <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            对我们的主题课程感兴趣？
          </h2>
          <p className="text-lg mb-6">
            立即联系我们，了解更多课程详情和报名信息
          </p>
          <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
            预约课程咨询
          </button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Theme; 