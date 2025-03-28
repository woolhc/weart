import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import ArtCompetition from '../components/ArtCompetition';

const Competition = () => {
  return (
    <PageLayout title="艺术竞赛">
      <div className="space-y-12">
        <ArtCompetition />
        
        {/* 历届获奖作品展示 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">历届获奖作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "色彩的交响",
                artist: "Emily Wang",
                award: "2023国际青年艺术节金奖",
                category: "绘画类"
              },
              {
                title: "都市印象",
                artist: "Michael Chen",
                award: "2023亚太区艺术创新大赛特等奖",
                category: "数字艺术"
              },
              {
                title: "生命的律动",
                artist: "Sarah Zhang",
                award: "2023全国青年艺术大赛金奖",
                category: "雕塑类"
              }
            ].map((work, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* 作品图片占位 */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                    {work.title}
                  </h3>
                  <p className="text-gray-700 mb-2">作者：{work.artist}</p>
                  <p className="text-gray-700 mb-2">获奖：{work.award}</p>
                  <span className="inline-block bg-[#F46801] text-white px-3 py-1 rounded-full text-sm">
                    {work.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Competition; 