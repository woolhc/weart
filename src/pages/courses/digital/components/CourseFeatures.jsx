import React from 'react';

const CourseFeatures = () => {
  const features = [
    {
      title: "专业设备",
      description: "配备高端数位板和绘图显示器",
      icon: "💻"
    },
    {
      title: "小班教学",
      description: "确保每位学生得到充分指导",
      icon: "👥"
    },
    {
      title: "实战项目",
      description: "真实项目实践，积累作品集",
      icon: "🎯"
    },
    {
      title: "就业指导",
      description: "提供行业资源和就业建议",
      icon: "🌟"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">课程特点</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#2F1C3A]">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFeatures; 