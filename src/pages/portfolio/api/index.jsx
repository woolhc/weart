import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import { Link } from 'react-router-dom';

const API = () => {
  const apCourses = [
    {
      title: "AP艺术史",
      description: "探索艺术发展历程，培养艺术鉴赏能力",
      path: "/portfolio/api/history",
      icon: "🎨"
    },
    {
      title: "AP Drawing",
      description: "深化绘画技法，建立个人艺术语言",
      path: "/portfolio/api/drawing",
      icon: "✏️"
    },
    {
      title: "AP 2D Design",
      description: "探索平面设计与视觉传达",
      path: "/portfolio/api/2d",
      icon: "📐"
    },
    {
      title: "AP 3D Design",
      description: "发展空间思维与立体创作",
      path: "/portfolio/api/3d",
      icon: "🗿"
    }
  ];

  const courseContent = [
    {
      title: "Sustained Investigation",
      description: "深入探索个人创作主题",
      items: [
        "主题确立与发展",
        "创作过程记录",
        "作品系列规划",
        "创作理念阐述"
      ]
    },
    {
      title: "Selected Works",
      description: "精选作品集制作",
      items: [
        "作品筛选标准",
        "作品质量提升",
        "作品陈述撰写",
        "材料运用说明"
      ]
    },
    {
      title: "Written Evidence",
      description: "文字材料准备",
      items: [
        "创作思路阐述",
        "艺术家陈述",
        "技法说明文档",
        "反思与总结"
      ]
    }
  ];

  const scoringCriteria = [
    {
      aspect: "创意思维",
      description: "展现独特的创作视角和创新思维",
      score: "6分"
    },
    {
      aspect: "技法运用",
      description: "熟练运用多种艺术媒材和技法",
      score: "6分"
    },
    {
      aspect: "主题发展",
      description: "深入探索和发展创作主题",
      score: "6分"
    },
    {
      aspect: "材料整合",
      description: "有效整合视觉元素和创作材料",
      score: "6分"
    }
  ];

  return (
    <PageLayout title="AP作品集">
      <div className="space-y-12">
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程概览</h2>
          <p className="text-gray-700 mb-8">
            AP艺术课程是美国大学理事会开设的大学先修课程，旨在帮助高中生提前接触大学水平的艺术教育。
            我们提供全面的AP艺术课程指导，帮助学生在作品集创作中取得优异成绩。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apCourses.map((course, index) => (
              <Link
                key={index}
                to={course.path}
                className="block p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{course.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#2F1C3A] text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">为什么选择AP艺术课程？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "提升申请竞争力",
                content: "展现学术能力和艺术天赋，增加录取机会"
              },
              {
                title: "获得学分认可",
                content: "可能获得大学学分，减少学习成本"
              },
              {
                title: "专业能力提升",
                content: "系统性提升艺术创作和理论水平"
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">课程内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">{content.description}</p>
                <ul className="space-y-3">
                  {content.items.map((item, idx) => (
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

        <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">评分标准</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoringCriteria.map((criteria, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-[#F46801]">
                    {criteria.aspect}
                  </h3>
                  <span className="bg-[#F46801] text-white px-3 py-1 rounded-full">
                    {criteria.score}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#2F1C3A]">时间规划</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="space-y-8">
              {[
                { month: "9-10月", task: "确定研究主题，开始初步创作" },
                { month: "11-12月", task: "深入探索主题，完成系列作品" },
                { month: "1-2月", task: "优化作品，准备文字材料" },
                { month: "3-4月", task: "完善作品集，模拟提交训练" },
                { month: "5月", task: "最终修改，正式提交作品" }
              ].map((timeline, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F46801] rounded-full"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <span className="font-semibold text-[#F46801]">{timeline.month}</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-600">{timeline.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">开启AP艺术之旅</h2>
          <p className="mb-8 text-gray-300">
            专业的AP作品集指导，助您获得理想成绩
          </p>
          <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
            预约免费咨询
          </button>
        </section>
      </div>
    </PageLayout>
  );
};

export default API; 