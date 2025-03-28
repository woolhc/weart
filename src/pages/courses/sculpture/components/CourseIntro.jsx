import React from 'react';

const CourseIntro = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">课程介绍</h2>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          雕塑课程旨在培养学生对三维空间的理解和塑造能力，通过系统的训练，
          帮助学生掌握雕塑的基本技法、材料运用以及艺术表现。课程涵盖泥塑、石膏、木雕等多种材料的创作实践。
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">课程目标</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>掌握雕塑基本技法</li>
              <li>理解空间结构关系</li>
              <li>提升材料驾驭能力</li>
              <li>培养艺术创作思维</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">适合人群</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>雕塑专业学生</li>
              <li>艺术爱好者</li>
              <li>设计师</li>
              <li>艺术教师</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro; 