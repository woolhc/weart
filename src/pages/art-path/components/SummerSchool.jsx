import React from 'react';

const SummerSchool = () => {
  const programs = [
    {
      title: "艺术创作工作坊",
      duration: "4周",
      schedule: "每周一至周五",
      content: [
        "专业艺术创作指导",
        "艺术家工作室参访",
        "创作技法深度训练",
        "小组创作项目"
      ]
    },
    {
      title: "艺术展览策划",
      duration: "2周",
      schedule: "每周一至周五",
      content: [
        "展览策划基础",
        "艺术作品陈列",
        "展览文案写作",
        "实践展览筹备"
      ]
    },
    {
      title: "艺术游学项目",
      duration: "3周",
      schedule: "密集课程",
      content: [
        "美术馆/博物馆参访",
        "艺术家工作室探访",
        "艺术院校交流",
        "文化体验活动"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">暑期学校</h2>
      <p className="text-gray-700 mb-8">
        丰富多彩的暑期艺术课程，为学生提供沉浸式的艺术学习体验
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-[#F46801]">
                {program.title}
              </h3>
              <span className="bg-[#F46801] text-white px-3 py-1 rounded-full text-sm">
                {program.duration}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">
              课程安排：{program.schedule}
            </p>

            <h4 className="font-semibold text-gray-700 mb-2">课程内容：</h4>
            <ul className="space-y-2">
              {program.content.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          报名咨询
        </button>
      </div>
    </section>
  );
};

export default SummerSchool; 