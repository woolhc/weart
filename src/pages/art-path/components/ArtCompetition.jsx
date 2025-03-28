import React from 'react';

const ArtCompetition = () => {
  const trainingModules = [
    {
      title: "竞赛作品指导",
      description: "针对性的竞赛作品创作指导和建议",
      features: [
        "作品主题策划",
        "创作技法指导",
        "作品完善建议",
        "参赛材料准备"
      ]
    },
    {
      title: "作品集培训",
      description: "专业的作品集制作和优化指导",
      features: [
        "作品集规划",
        "作品筛选建议",
        "版式设计指导",
        "作品集答辩准备"
      ]
    }
  ];

  const upcomingCompetitions = [
    {
      name: "全国青年艺术大赛",
      deadline: "2024-07-15",
      categories: ["绘画", "雕塑", "数字艺术"],
      level: "国家级"
    },
    {
      name: "国际青少年艺术节",
      deadline: "2024-08-30",
      categories: ["综合艺术", "创意设计"],
      level: "国际级"
    },
    {
      name: "亚太区艺术创新大赛",
      deadline: "2024-09-20",
      categories: ["当代艺术", "新媒体艺术"],
      level: "国际级"
    }
  ];

  return (
    <section className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">竞赛培训</h2>
      <p className="text-gray-700 mb-8">
        专业的竞赛指导和培训，助力学生在艺术竞赛中脱颖而出
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {trainingModules.map((module, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">
              {module.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {module.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {module.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-6 text-[#2F1C3A]">近期竞赛信息</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-gray-700">竞赛名称</th>
              <th className="px-6 py-3 text-left text-gray-700">截止日期</th>
              <th className="px-6 py-3 text-left text-gray-700">参赛类别</th>
              <th className="px-6 py-3 text-left text-gray-700">竞赛级别</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {upcomingCompetitions.map((competition, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-[#F46801] font-medium">
                  {competition.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {competition.deadline}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {competition.categories.join(", ")}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#F46801] text-white px-3 py-1 rounded-full text-sm">
                    {competition.level}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          预约竞赛指导
        </button>
      </div>
    </section>
  );
};

export default ArtCompetition; 