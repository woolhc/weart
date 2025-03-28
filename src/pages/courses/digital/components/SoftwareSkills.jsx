import React from 'react';

const SoftwareSkills = () => {
  const software = [
    {
      name: "Photoshop",
      level: "专业",
      description: "数字绘画和图像处理的行业标准软件",
      icon: "🎨"
    },
    {
      name: "Procreate",
      level: "进阶",
      description: "iPad上强大的数字艺术创作工具",
      icon: "✏️"
    },
    {
      name: "Clip Studio",
      level: "专业",
      description: "专业的漫画和插画创作软件",
      icon: "📚"
    },
    {
      name: "Illustrator",
      level: "基础",
      description: "矢量图形设计和插画制作工具",
      icon: "💫"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">软件技能</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {software.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg flex items-start space-x-4"
          >
            <div className="text-4xl">{item.icon}</div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl font-semibold text-[#2F1C3A]">
                  {item.name}
                </h3>
                <span className="px-2 py-1 bg-[#F46801] text-white text-sm rounded">
                  {item.level}
                </span>
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareSkills; 