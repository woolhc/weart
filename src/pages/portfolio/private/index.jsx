import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const PrivateSchool = () => {
  const services = [
    {
      title: "作品集规划",
      content: [
        "个性化主题策划",
        "创作方向指导",
        "技法选择建议",
        "进度规划制定"
      ]
    },
    {
      title: "创作指导",
      content: [
        "基础技法训练",
        "创意思维培养",
        "作品深度打磨",
        "风格塑造指导"
      ]
    },
    {
      title: "文书准备",
      content: [
        "艺术自述撰写",
        "作品说明指导",
        "个人陈述修改",
        "申请材料优化"
      ]
    }
  ];

  const successCases = [
    {
      studentName: "Emily L.",
      school: "Phillips Academy",
      year: "2023",
      portfolio: "绘画与数字艺术",
      description: "结合传统绘画和数字创作，展现独特的艺术视角"
    },
    {
      studentName: "Michael C.",
      school: "Deerfield Academy",
      year: "2023",
      portfolio: "混合媒材艺术",
      description: "通过多元材料的创新运用，表达对环境议题的关注"
    },
    {
      studentName: "Sarah W.",
      school: "Choate Rosemary Hall",
      year: "2022",
      portfolio: "装置与摄影",
      description: "将日常物件转化为艺术语言，创造独特的视觉体验"
    }
  ];

  return (
    <PageLayout title="私校申请作品集">
      {/* 服务介绍 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">服务内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.content.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 成功案例 */}
      <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successCases.map((caseItem, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#F46801]">
                  {caseItem.studentName}
                </h3>
                <p className="text-gray-600">{caseItem.school}</p>
                <p className="text-sm text-gray-500">录取年份：{caseItem.year}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">作品集方向</h4>
                <p className="text-gray-600">{caseItem.portfolio}</p>
              </div>
              <p className="text-gray-600 text-sm">{caseItem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 咨询预约 */}
      <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">开启您的私校申请之旅</h2>
        <p className="mb-8 text-gray-300">
          我们将为您提供专业的私校作品集指导，助您实现艺术梦想
        </p>
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
          预约免费咨询
        </button>
      </section>
    </PageLayout>
  );
};

export default PrivateSchool; 