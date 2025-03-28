import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const Basic = () => {
  return (
    <PageLayout title="专业基础">
      <div className="space-y-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">课程介绍</h2>
          <p className="text-lg text-gray-700">
            专业基础课程是艺术学习的重要起点，我们为学生提供系统的美术基础训练，包括素描、色彩、构图等核心技能的培养。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">课程特点</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>系统的美术基础训练</li>
            <li>专业的教学团队指导</li>
            <li>个性化的学习计划</li>
            <li>丰富的实践机会</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">适合人群</h2>
          <p className="text-lg text-gray-700">
            本课程适合零基础学员以及希望夯实美术基础的学生。无论是准备艺术考试，还是对艺术创作感兴趣的学员都可以参加。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">课程安排</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">基础课程</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>素描基础</li>
                  <li>色彩理论</li>
                  <li>构图原理</li>
                  <li>材料技法</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">进阶课程</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>创意思维</li>
                  <li>艺术赏析</li>
                  <li>作品创作</li>
                  <li>portfolio准备</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Basic; 