import React from 'react';
import PageLayout from '../../components/common/PageLayout';

const Competition = () => {
  const competitions = [
    {
      title: "国际艺术竞赛",
      description: "面向全球青少年的综合艺术竞赛",
      deadline: "2024年6月30日",
      categories: ["绘画", "数字艺术", "雕塑", "摄影"],
      prizes: ["金奖: $3000", "银奖: $2000", "铜奖: $1000"]
    },
    {
      title: "青年艺术家创作大赛",
      description: "发掘和培养有潜力的青年艺术家",
      deadline: "2024年8月15日",
      categories: ["当代艺术", "装置艺术", "新媒体艺术"],
      prizes: ["特等奖: $5000", "优秀奖: $2000"]
    },
    {
      title: "数字艺术设计大赛",
      description: "探索数字技术与艺术的创新融合",
      deadline: "2024年9月30日",
      categories: ["UI设计", "动画", "数字插画"],
      prizes: ["一等奖: $3000", "二等奖: $2000", "三等奖: $1000"]
    }
  ];

  return (
    <PageLayout title="艺术竞赛">
      <div className="space-y-12">
        {competitions.map((competition, index) => (
          <section key={index} className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#2F1C3A]">
              {competition.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {competition.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                  参赛类别
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {competition.categories.map((category, idx) => (
                    <li key={idx} className="text-gray-700">{category}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                  奖项设置
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {competition.prizes.map((prize, idx) => (
                    <li key={idx} className="text-gray-700">{prize}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-[#F46801]">
                截止日期：{competition.deadline}
              </p>
              <button className="bg-[#F46801] text-white px-6 py-2 rounded-lg hover:bg-[#E45700] transition-colors">
                立即报名
              </button>
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
};

export default Competition; 