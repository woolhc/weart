import React from 'react';
import PageLayout from '../../../../components/common/PageLayout';

const APDrawing = () => {
  return (
    <PageLayout title="AP Drawing">
      <div className="space-y-12">
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程介绍</h2>
          <p className="text-gray-700 mb-8">
            AP Drawing课程注重绘画技法的深度发展和个人艺术语言的建立。
            学生将通过持续性的创作实践，探索多样的表现手法，完成系统的作品集。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">课程要求</h3>
              <ul className="space-y-2">
                {[
                  "探索性研究",
                  "技法精进",
                  "主题发展",
                  "材料实验",
                  "过程记录",
                  "作品集整理"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">评分标准</h3>
              <ul className="space-y-2">
                {[
                  "技法掌握程度",
                  "创意思维表现",
                  "材料运用能力",
                  "主题深度探索",
                  "视觉表现效果",
                  "作品完整度"
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

export default APDrawing; 