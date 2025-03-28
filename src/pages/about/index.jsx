import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StatItem from './components/StatItem';

// 导入学校logo
import harvard from './assets/harvard.svg';
import cmu from './assets/cmu.svg';
import mit from './assets/mit.svg';
import parsons from './assets/parsons.svg';
import risd from './assets/risd.svg';
import nyu from './assets/nyu.svg';
import syracuse from './assets/syracuse.svg';
import aalto from './assets/aalto.svg';
import schoolImage from './assets/school-image.svg';
import schoolImages from './assets/school-images.svg';
import schoolOg from './assets/school-og.svg';
import schoolA6c9 from './assets/school-a6c9.svg';
import school8522 from './assets/school8522.svg';
import school2 from './assets/school2.svg';

// 导入offer图片
import offer1 from './assets/offer1.jpg';
import offer2 from './assets/offer2.jpg';
import offer3 from './assets/offer3.jpg';
import offer4 from './assets/offer4.jpg';
import offer5 from './assets/offer5.jpg';
import offer6 from './assets/offer6.jpg';
import offer7 from './assets/offer7.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* 第一部分：Hero区域 */}
      <section className="w-full h-screen-minus-header bg-[rgba(245,154,70,0.86)] flex items-center">
        <div className="container px-8 mx-auto">
          <h1 className="font-labrada text-[66px] font-bold text-[#2F1C3A]">ABOUT</h1>
          <h2 className="font-labrada text-[77px] font-bold text-[#2F1C3A] mt-2">WeArt</h2>
          <p className="text-[15px] font-thin text-[#2F1C3A] max-w-[600px] mt-8">
            高端定制化艺术教育品牌<br />
            专注全球TOP艺术圈校申请
          </p>
        </div>
      </section>
      
      {/* 第二部分：详细介绍 */}
      <section className="py-16 w-full bg-white">
        <div className="container px-8 mx-auto">
          <p className="text-[15px] leading-8 text-[#282626] mb-12">
            WeArt艺术教育，由二十余年艺术教育经验的教师团队执教，提供全方位艺术支持与辅导。课程包括：艺术爬藤作品集、Portfolio艺术作品集、AP艺术课程、青少年艺术规划。自执教以来成功帮助过3000余名艺术生考入自己梦想中的顶级艺术院校或综合类名校，至今仍保持着100%升学率。
            <br /><br />
            WeArt在用一种全新的艺术教育理念。在这里，180度的转变意味着我们为每位学生打开了全新的视角，让他们从不同角度看待世界，激发他们无穷的创作潜力。
            <br /><br />
            在WeArt，我们相信艺术不仅仅是技能的提升，更是思维方式的彻底改变。通过我们的创新课程和导师指导，学生们将经历从传统到现代、从基础到突破的全方位蜕变。无论是视觉艺术、设计还是多媒体创作，我们都为未来的艺术家提供一个能够激发卓越、成就梦想的平台。
            <br /><br />
            加入WeArt，开启你的180度转变，探索无限可能，成就艺术梦想。
          </p>
        </div>
      </section>
      
      {/* 第三部分：合作学校和服务 */}
      <section className="relative py-16 mb-16 w-full bg-white">
        <div className="container px-8 mx-auto">
          {/* 标题和横线 */}
          <h3 className="text-[41px] font-labrada font-extrabold text-center mb-6">WeArt专注艺术顶校申请</h3>
          <div className="w-full h-2 bg-[#F6A860] mx-auto mb-12 rounded"></div>
          
          {/* 学校logo展示 - 两行排列 */}
          <div className="grid grid-cols-7 gap-6 mb-8">
            <img src={harvard} alt="Harvard University" className="mx-auto h-16" />
            <img src={cmu} alt="Carnegie Mellon University" className="mx-auto h-16" />
            <img src={mit} alt="MIT" className="mx-auto h-16" />
            <img src={school2} alt="Stanford" className="mx-auto h-16" />
            <img src={nyu} alt="New York University" className="mx-auto h-16" />
            <img src={schoolOg} alt="Royal Academy" className="mx-auto h-16" />
            <img src={aalto} alt="RISD" className="mx-auto h-16" />
          </div>
          
          <div className="grid grid-cols-7 gap-6 mb-8">
            <div className="flex items-center mx-auto h-12">
              <span className="mr-1 font-bold text-black">ual:</span>
            </div>
            <div className="flex items-center mx-auto h-12">
              <span className="font-bold text-black">Pratt</span>
            </div>
            <div className="mx-auto h-12 w-12 bg-[#F6A860] rounded-full"></div>
            <img src={schoolA6c9} alt="MIT" className="mx-auto h-12" />
            <img src={risd} alt="RISD" className="mx-auto h-12" />
            <img src={aalto} alt="Aalto University" className="mx-auto h-12" />
            <img src={parsons} alt="Parsons" className="mx-auto h-12" />
          </div>
          
          {/* 描述文字 */}
          <div className="mb-32">
            <p className="text-[15px] text-center">
              WeArt与全球艺术院校保持紧密合作，我们的导师团队由全球顶尖美院毕业生和海外教授组成，确保为学生提供最高水平的指导和支持。
            </p>
          </div>
          
          {/* 服务列表 */}
          <div className="flex flex-col md:flex-row">
            <div className="relative pl-12 md:w-[40%]">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#B3B3B0]"></div>
              <p className="font-labrada font-semibold text-[30px] leading-[44px] text-[#B3B3B0] tracking-[0.12em] whitespace-nowrap">
                美国TOP大学<br />
                Portfolio艺术作品集<br />
                AP艺术设计课程<br />
                国际艺术绘画大赛<br />
                青少年艺术成长规划<br />
                艺术背景提升<br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 第四部分：数据统计 */}
      <section className="py-20 m-10 bg-black">
        <div className="container px-4 mx-auto">
          {/* 第一行数据 */}
          <div className="flex mb-16">
            <StatItem number="5000+" label="累计在校生" color="#E84C3D" />
            <StatItem number="100%" label="升学率" color="#3598DB" />
            <StatItem number="Nv1" label="教学模式" color="#D5B046" />
          </div>
          
          {/* 第二行数据 */}
          <div className="flex mb-16">
            <StatItem number="5" label="艺术AP升学" color="#D5B046" />
            <StatItem number="96.8%" label="藤校录取率" color="#E8A0CE" />
            <StatItem number="25+" label="教师团队" color="#E84C3D" />
          </div>
          
          {/* 第三行数据 */}
          <div className="flex">
            <StatItem number="30+" label="艺术策展场次" color="#E67E22" />
            <StatItem number="89%" label="奖学金申请率" color="#9B59B6" />
            <StatItem number="9+" label="涵盖专业" color="#3598DB" />
          </div>
        </div>
      </section>
      
      {/* 第五部分：OFFER SHOW */}
      <section className="py-16 m-10 bg-black">
        <div className="container mx-auto">
          <h3 className="text-[30px] font-labrada font-bold tracking-[0.12em] text-white mb-12 pl-4">OFFER SHOW</h3>
          
          {/* OFFER图片横向滚动 */}
          <div className="overflow-x-auto relative">
            <div className="flex space-x-[10px] min-w-max pl-0">
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer1} alt="Offer 1" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer2} alt="Offer 2" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer3} alt="Offer 3" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer4} alt="Offer 4" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer5} alt="Offer 5" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer6} alt="Offer 6" className="object-cover w-full h-[260px]" />
              </div>
              <div className="overflow-hidden flex-shrink-0 w-[200px]">
                <img src={offer7} alt="Offer 7" className="object-cover w-full h-[260px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 第六部分：部分OFFER展示 */}
      <section className="py-8 w-full bg-white">
        <div className="container px-8 mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {/* 第一行 */}
            <div className="h-64 bg-gray-200 rounded-sm"></div>
            <div className="h-64 bg-gray-300 rounded-sm"></div>
            <div className="h-64 bg-gray-200 rounded-sm"></div>
            
            {/* 第二行 - 中间放标题 */}
            <div className="h-64 bg-gray-300 rounded-sm"></div>
            <div className="flex flex-col justify-center items-center h-64">
              <h3 className="text-[41px] font-labrada font-bold text-center leading-tight">
                2024 部分OFFER
              </h3>
            </div>
            <div className="h-64 bg-gray-200 rounded-sm"></div>
            
            {/* 第三行 */}
            <div className="h-64 bg-gray-300 rounded-sm"></div>
            <div className="h-64 bg-gray-200 rounded-sm"></div>
            <div className="h-64 bg-gray-300 rounded-sm"></div>
          </div>
          
          <p className="text-center text-[15px] mt-8 text-[#282626]">更多offer欢迎来WeArt实地参观</p>
        </div>
      </section>
    </div>
  );
};

export default About; 