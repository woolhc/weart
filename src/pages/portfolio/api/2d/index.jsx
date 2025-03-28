import React from 'react';
import PageLayout from '../../../../components/common/PageLayout';

const AP2DDesign = () => {
  return (
    <PageLayout title="AP 2D Design">
      <div className="space-y-12">
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程介绍</h2>
          <p className="text-gray-700 mb-8">
            AP 2D Design课程专注于平面设计原理和视觉传达，培养学生在二维空间中的创作能力。
            课程涵盖传统和数字媒介，强调设计思维和视觉表现的创新性。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">设计元素</h3>
              <ul className="space-y-2">
                {[
                  "构图与布局",
                  "色彩运用",
                  "形式美法则",
                  "视觉层次",
                  "图文关系",
                  "空间组织"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">创作媒介</h3>
              <ul className="space-y-2">
                {[
                  "数字插画",
                  "摄影创作",
                  "平面设计",
                  "混合媒材",
                  "版画制作",
                  "拼贴艺术"
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

export default AP2DDesign; 