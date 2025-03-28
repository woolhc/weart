import React from 'react';

const BackgroundEnhancement = () => {
  const enhancementItems = [
    {
      title: "艺术史研究",
      description: "深入了解艺术发展历史，掌握不同时期的艺术特点和风格演变",
      features: [
        "西方艺术史专题研究",
        "现代艺术流派解析",
        "艺术史论文写作指导",
        "艺术作品赏析能力培养"
      ]
    },
    {
      title: "艺术理论建构",
      description: "系统学习艺术理论知识，构建完整的艺术认知体系",
      features: [
        "艺术创作理论",
        "美学原理",
        "艺术批评方法",
        "当代艺术思潮"
      ]
    },
    {
      title: "创作技法提升",
      description: "全方位提升艺术创作技能，掌握多种艺术表现形式",
      features: [
        "绘画技法深化",
        "数字艺术创作",
        "混合媒介实验",
        "创新表现手法"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">背景提升</h2>
      <p className="text-gray-700 mb-8">
        通过系统化的艺术理论学习和实践，全面提升艺术素养和创作能力
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {enhancementItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {item.description}
            </p>
            <ul className="space-y-2">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackgroundEnhancement; 