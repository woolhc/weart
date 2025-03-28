import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import ArtPractice from '../components/ArtPractice';

const Practice = () => {
  return (
    <PageLayout title="艺术实践项目">
      <div className="space-y-12">
        <ArtPractice />
        
        {/* 项目日程 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">近期项目日程</h2>
          <div className="space-y-6">
            {[
              {
                date: "2024年7月",
                title: "社区艺术节",
                location: "Markham文化中心",
                status: "报名中"
              },
              {
                date: "2024年8月",
                title: "青年艺术家展览",
                location: "WeArt画廊",
                status: "筹备中"
              },
              {
                date: "2024年9月",
                title: "公共艺术创作营",
                location: "多伦多市中心",
                status: "即将开放"
              }
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-6">
                  <div className="text-[#F46801] font-semibold w-24">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2F1C3A]">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                <span className="bg-[#F46801] text-white px-4 py-1 rounded-full text-sm">
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Practice; 