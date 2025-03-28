import React from 'react';

const ArtPractice = () => {
  const practices = [
    {
      title: "社区艺术项目",
      description: "参与社区艺术创作，将艺术融入公共空间",
      activities: [
        "社区壁画创作",
        "公共艺术装置",
        "社区艺术工作坊",
        "艺术公益活动"
      ]
    },
    {
      title: "艺术展览实践",
      description: "策划和参与艺术展览，展示创作成果",
      activities: [
        "个人作品展",
        "群展策划参与",
        "展览设计布置",
        "开幕活动组织"
      ]
    },
    {
      title: "艺术创作营",
      description: "沉浸式艺术创作体验，激发创作灵感",
      activities: [
        "主题创作研讨",
        "艺术家指导",
        "创作成果展示",
        "艺术交流分享"
      ]
    },
    {
      title: "艺术志愿服务",
      description: "通过志愿服务推广艺术教育",
      activities: [
        "艺术教育普及",
        "文化场所服务",
        "艺术活动组织",
        "艺术资源共享"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">艺术实践</h2>
      <p className="text-gray-700 mb-8">
        丰富的艺术实践机会，帮助学生积累实战经验，培养综合能力
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {practices.map((practice, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">
              {practice.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {practice.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {practice.activities.map((activity, idx) => (
                <div key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                  {activity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          实践机会定期更新，请关注最新信息
        </p>
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          查看更多机会
        </button>
      </div>
    </section>
  );
};

export default ArtPractice; 