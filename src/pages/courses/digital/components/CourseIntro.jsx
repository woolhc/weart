import React from 'react';

const CourseIntro = () => {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">课程介绍</h2>
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          数码绘画课程旨在培养学生掌握数字艺术创作技能，课程涵盖各种数字绘画软件的使用，
          以及数字艺术的创作理念和技巧。通过系统的学习，学生将能够创作出专业水准的数字艺术作品。
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">课程目标</h3>
            <ul className="pl-6 space-y-2 list-disc text-gray-700">
              <li>掌握数字绘画软件的专业应用</li>
              <li>建立数字艺术创作思维</li>
              <li>培养个人艺术风格</li>
              <li>完成专业作品集</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#F46801]">适合人群</h3>
            <ul className="pl-6 space-y-2 list-disc text-gray-700">
              <li>数字艺术爱好者</li>
              <li>插画师培训学员</li>
              <li>艺术专业学生</li>
              <li>视觉设计从业者</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro; 