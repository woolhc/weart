import React from 'react';

const CourseIntro = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">课程介绍</h2>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          人体写生课程是艺术学习中的重要组成部分，通过系统的训练，帮助学生掌握人体结构、比例、
          动态等要素的表现技巧。课程强调对人体解剖学的理解，以及光影、质感的准确表达。
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">课程目标</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>掌握人体结构与比例关系</li>
              <li>理解人体解剖学基础</li>
              <li>提升动态表现能力</li>
              <li>培养艺术表现技巧</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">适合人群</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>美术专业学生</li>
              <li>艺术爱好者</li>
              <li>插画师</li>
              <li>艺术教师</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro; 