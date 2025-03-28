import React from 'react';

const TeachingContent = () => {
  const content = {
    basic: {
      title: "基础阶段",
      items: [
        {
          title: "人体比例关系",
          description: "学习人体各部位的标准比例和变化规律"
        },
        {
          title: "骨骼结构研究",
          description: "理解人体骨骼系统的构成和运动规律"
        },
        {
          title: "肌肉组织分析",
          description: "掌握主要肌肉群的形态和功能"
        },
        {
          title: "速写训练",
          description: "培养快速捕捉人体动态的能力"
        }
      ]
    },
    advanced: {
      title: "进阶阶段",
      items: [
        {
          title: "动态人体表现",
          description: "深入研究人体运动中的结构变化"
        },
        {
          title: "不同角度练习",
          description: "掌握各种视角下的人体造型特点"
        },
        {
          title: "光影明暗关系",
          description: "提升光影塑造和空间表现能力"
        },
        {
          title: "个人风格探索",
          description: "发展独特的艺术语言和表现方式"
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