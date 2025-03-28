import React from 'react';

const TeachingContent = () => {
  const content = {
    basic: {
      title: "基础阶段",
      items: [
        {
          title: "雕塑基础",
          description: "学习雕塑的基本概念和工具使用"
        },
        {
          title: "泥塑技法",
          description: "掌握泥塑的基本技法和表现方式"
        },
        {
          title: "石膏制作",
          description: "学习石膏翻制和修饰技巧"
        },
        {
          title: "结构研究",
          description: "理解三维空间中的形体结构"
        }
      ]
    },
    advanced: {
      title: "进阶阶段",
      items: [
        {
          title: "材料探索",
          description: "尝试木雕、金属等不同材料的创作"
        },
        {
          title: "主题创作",
          description: "完成特定主题的雕塑作品"
        },
        {
          title: "空间构成",
          description: "研究雕塑与空间的关系"
        },
        {
          title: "创意表现",
          description: "发展个人艺术语言和表现方式"
        }
      ]
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">教学内容</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.values(content).map((phase, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-[#2F1C3A]">
              {phase.title}
            </h3>
            <div className="space-y-4">
              {phase.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#F46801] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachingContent; 