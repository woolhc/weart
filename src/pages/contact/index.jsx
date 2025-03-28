import React from 'react';
import PageLayout from '../../components/common/PageLayout';

const Contact = () => {
  const contactInfo = {
    address: "21 Fairburn Dr #20, Markham, ON L6G 0A4",
    phone: "(647) 898-6018",
    email: "info@weart.ca",
    businessHours: [
      { days: "周二至周五", hours: "4:00pm - 8:00pm" },
      { days: "周六周日", hours: "10:00am - 6:00pm" }
    ]
  };

  return (
    <PageLayout title="联系我们">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 联系信息 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">联系方式</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">地址</h3>
              <p className="text-gray-700">{contactInfo.address}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">电话</h3>
              <p className="text-gray-700">{contactInfo.phone}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">邮箱</h3>
              <p className="text-gray-700">{contactInfo.email}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F46801]">营业时间</h3>
              {contactInfo.businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-gray-700">
                  <span>{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系表单 */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">在线咨询</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                姓名
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F46801]"
                placeholder="请输入您的姓名"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F46801]"
                placeholder="请输入您的邮箱"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                电话
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F46801]"
                placeholder="请输入您的电话"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                咨询内容
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F46801]"
                placeholder="请输入您想咨询的内容"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#F46801] text-white py-3 rounded-lg hover:bg-[#E45700] transition-colors"
            >
              提交
            </button>
          </form>
        </section>
      </div>

      {/* 地图 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">校区地图</h2>
        <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          {/* 这里需要集成实际的地图组件 */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            地图加载中...
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact; 