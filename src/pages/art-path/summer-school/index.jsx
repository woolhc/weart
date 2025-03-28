import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import SummerSchool from '../components/SummerSchool';

const SummerSchoolPage = () => {
  return (
    <PageLayout title="夏校申请">
      <div className="space-y-12">
        <SummerSchool />
        
        {/* 申请流程 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">申请流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "初步咨询",
                content: "了解学生背景和需求，提供课程建议"
              },
              {
                step: "2",
                title: "选校指导",
                content: "根据学生情况推荐合适的夏校项目"
              },
              {
                step: "3",
                title: "材料准备",
                content: "协助准备申请材料，包括个人陈述等"
              },
              {
                step: "4",
                title: "提交申请",
                content: "跟进申请进度，及时处理相关事务"
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 border border-gray-200 rounded-lg">
                <div className="absolute -top-4 left-6 bg-[#F46801] text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2 text-[#2F1C3A]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SummerSchoolPage; 