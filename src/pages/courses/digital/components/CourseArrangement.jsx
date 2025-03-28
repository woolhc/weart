import React from 'react';

const CourseArrangement = () => {
  const courses = {
    basic: {
      title: "基础课程",
      duration: "3个月",
      items: [
        {
          title: "数位板使用技巧",
          content: "掌握数位板的基本操作和绘画技巧"
        },
        {
          title: "软件基础操作",
          content: "学习各类软件的界面和基本工具使用"
        },
        {
          title: "数字绘画基础",
          content: "理解数字绘画的基本原理和方法"
        },
        {
          title: "色彩与构图",
          content: "掌握数字艺术中的色彩应用和构图技巧"
        }
      ]
    },
    advanced: {
      title: "进阶课程",
      duration: "4个月",
      items: [
        {
          title: "角色设计",
          content: "学习角色创作和表现技巧"
        },
        {
          title: "场景绘制",
          content: "掌握场景设计和氛围营造"
        },
        {
          title: "商业插画创作",
          content: "了解商业插画的创作流程和要求"
        },
        {
          title: "个人风格开发",
          content: "建立独特的艺术风格和创作方向"
        }
      ]
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">课程安排</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.values(courses).map((course, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-[#2F1C3A]">
                {course.title}
              </h3>
              <span className="px-3 py-1 bg-[#F46801] text-white rounded-full text-sm">
                {course.duration}
              </span>
            </div>
            <div className="space-y-4">
              {course.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#F46801] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseArrangement; 