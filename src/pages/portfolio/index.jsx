import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioTypes = [
    {
      title: "私校申请作品集",
      description: "针对私立学校申请的专业作品集指导",
      path: "/portfolio/private",
      features: [
        "个性化作品集规划",
        "专业创作指导",
        "申请文书准备",
        "作品集整理优化"
      ]
    },
    {
      title: "艺术高中作品集",
      description: "艺术高中入学作品集准备",
      path: "/portfolio/highschool",
      features: [
        "基础技能培养",
        "创意思维训练",
        "多元媒材尝试",
        "考试重点突破"
      ]
    },
    {
      title: "AP作品集",
      description: "AP艺术课程作品集指导",
      path: "/portfolio/api",
      features: [
        "AP考试要求解析",
        "主题深度探索",
        "技法系统训练",
        "文档规范指导"
      ]
    },
    {
      title: "艺术大学作品集",
      description: "艺术类大学申请作品集准备",
      path: "/portfolio/university",
      features: [
        "院校要求分析",
        "个人风格塑造",
        "专业方向明确",
        "作品集完整规划"
      ]
    }
  ];

  return (
    <PageLayout title="作品集">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioTypes.map((type, index) => (
          <Link 
            key={index}
            to={type.path}
            className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#2F1C3A]">
              {type.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {type.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {type.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-[#2F1C3A] rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          需要专业的作品集指导？
        </h3>
        <p className="text-lg mb-6">
          我们的专业团队随时为您提供个性化的作品集规划和指导
        </p>
        <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#E45700] transition-colors">
          预约咨询
        </button>
      </div>
    </PageLayout>
  );
};

export default Portfolio; 