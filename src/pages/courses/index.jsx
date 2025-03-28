import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';

const Courses = () => {
  const courses = [
    {
      title: "专业基础",
      path: "/courses/basic",
      description: "系统的美术基础训练，包括素描、色彩、构图等核心课程",
      features: [
        "专业的基础技法训练",
        "系统的美术理论学习",
        "丰富的创作实践机会",
        "定期的作品点评指导"
      ]
    },
    {
      title: "数码绘画",
      path: "/courses/digital",
      description: "数字艺术创作技能培训，掌握各类数字绘画软件的专业应用",
      features: [
        "数字绘画软件教学",
        "数字艺术创作技巧",
        "商业插画制作",
        "个人作品集指导"
      ]
    },
    {
      title: "人体写生",
      path: "/courses/figure",
      description: "专业的人体结构与表现技法训练，提升造型能力",
      features: [
        "人体结构解析",
        "动态速写训练",
        "光影质感表现",
        "创作技法提升"
      ]
    },
    {
      title: "雕塑课程",
      path: "/courses/sculpture",
      description: "立体造型能力培养，探索空间艺术创作",
      features: [
        "雕塑基础技法",
        "材料运用训练",
        "空间构成研究",
        "创意表现实践"
      ]
    },
    {
      title: "主题课程",
      path: "/courses/theme",
      description: "特色主题创作课程，激发艺术灵感与创造力",
      features: [
        "主题创作指导",
        "艺术风格探索",
        "创意思维培养",
        "作品展示机会"
      ]
    }
  ];

  return (
    <PageLayout title="课程体系">
      <div className="space-y-8">
        {/* 课程介绍 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#2F1C3A]">
            课程特色
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            WeArt提供全面的艺术教育课程体系，从基础技能到专业创作，
            帮助学生系统地提升艺术修养和创作能力。我们的课程设置科学合理，
            注重理论与实践的结合，为学生的艺术发展打下坚实基础。
          </p>
        </section>

        {/* 课程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#F46801]">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {course.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#F46801] rounded-full"></span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 课程咨询 */}
        <section className="bg-[#2F1C3A] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            想了解更多课程信息？
          </h2>
          <p className="text-lg mb-6">
            我们的课程顾问将为您提供专业的建议和详细的课程规划
          </p>
          <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
            预约课程咨询
          </button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Courses; 