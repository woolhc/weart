import React from 'react';

const CourseFeatures = () => {
  const features = [
    {
      title: "专业模特",
      description: "经验丰富的专业模特指导",
      icon: "👤"
    },
    {
      title: "小班教学",
      description: "确保每位学生得到充分指导",
      icon: "👥"
    },
    {
      title: "系统训练",
      description: "从基础到高阶的完整课程体系",
      icon: "📚"
    },
    {
      title: "多媒材尝试",
      description: "丰富的绘画材料体验",
      icon: "🎨"
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