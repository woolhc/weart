import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const Join = () => {
  const positions = [
    {
      title: "艺术教师",
      requirements: [
        "艺术相关专业本科及以上学历",
        "3年以上艺术教学经验",
        "良好的沟通能力和教学热情",
        "能够用中英文授课"
      ],
      responsibilities: [
        "设计和实施艺术课程",
        "指导学生完成作品集",
        "参与教学研讨和课程开发",
        "跟进学生学习进度"
      ]
    },
    {
      title: "课程顾问",
      requirements: [
        "教育相关专业背景优先",
        "熟悉北美教育体系",
        "优秀的沟通和协调能力",
        "中英文流利"
      ],
      responsibilities: [
        "为学生提供升学咨询",
        "制定个性化学习计划",
        "协助学生申请学校",
        "维护家校关系"
      ]
    }
  ];

  return (
    <PageLayout title="加入我们">
      <div className="space-y-12">
        {positions.map((position, index) => (
          <section key={index} className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">
              {position.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                  岗位要求
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#F46801]">
                  工作职责
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {position.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-[#F46801] text-white px-8 py-3 rounded-lg hover:bg-[#E45700] transition-colors">
                申请职位
              </button>
            </div>
          </section>
        ))}

        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">联系方式</h2>
          <p className="text-gray-700">
            简历投递邮箱：careers@weart.ca<br />
            联系电话：(647) 898-6018
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Join;
