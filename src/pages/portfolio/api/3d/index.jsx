import React from 'react';
import PageLayout from '../../../../components/common/PageLayout';

const AP3DDesign = () => {
  return (
    <PageLayout title="AP 3D Design">
      <div className="space-y-12">
        <section className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">课程介绍</h2>
          <p className="mb-8 text-gray-700">
            AP 3D Design课程关注三维空间中的艺术创作，包括雕塑、装置、建筑等领域。
            学生将学习空间构成原理，探索各类材料的可能性，发展个人的立体创作语言。
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">创作方向</h3>
              <ul className="space-y-2">
                {[
                  "雕塑创作",
                  "装置艺术",
                  "建筑设计",
                  "产品设计",
                  "空间设计",
                  "环境艺术"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#F46801]">材料探索</h3>
              <ul className="space-y-2">
                {[
                  "金属材料",
                  "木质材料",
                  "陶瓷材料",
                  "复合材料",
                  "回收材料",
                  "数字建模"
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

export default AP3DDesign; 