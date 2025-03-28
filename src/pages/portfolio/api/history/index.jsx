import React from 'react';
import PageLayout from '../../../../components/common/PageLayout';

const APHistory = () => {
  return (
    <PageLayout title="AP艺术史">
      <div className="space-y-12">
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程介绍</h2>
          <p className="text-gray-700 mb-8">
            AP艺术史课程帮助学生探索艺术史上的重要作品和艺术运动，培养艺术鉴赏能力和批判性思维。
            通过系统学习，学生将掌握艺术史分析方法，了解不同时期和文化的艺术特征。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">课程内容</h3>
              <ul className="space-y-2">
                {[
                  "全球艺术史概览",
                  "艺术风格分析",
                  "文化背景研究",
                  "艺术作品解读",
                  "艺术评论写作",
                  "考试技巧指导"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">学习目标</h3>
              <ul className="space-y-2">
                {[
                  "掌握艺术史分析方法",
                  "理解艺术发展脉络",
                  "培养艺术鉴赏能力",
                  "提升写作表达能力",
                  "准备AP考试",
                  "建立艺术史知识体系"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default APHistory; 