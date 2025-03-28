import React from 'react';

const CourseFeatures = () => {
  const features = [
    {
      title: "专业工作室",
      description: "配备完善的雕塑创作设备",
      icon: "🏭"
    },
    {
      title: "多元材料",
      description: "体验不同雕塑材料的特性",
      icon: "🗿"
    },
    {
      title: "实践为主",
      description: "注重动手能力的培养",
      icon: "🔨"
    },
    {
      title: "创意引导",
      description: "激发艺术创作灵感",
      icon: "💡"
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
