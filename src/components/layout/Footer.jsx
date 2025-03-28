import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white w-full">
      <div className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Logo区域 */}
          <div>
            <img src={logoWhite} alt="WeArt Logo" className="h-16 mb-6" />
          </div>

          {/* Markham校区信息 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Markham校区</h3>
            <p className="mb-2">21 Fairburn Dr #20,</p>
            <p className="mb-4">Markham, ON L6G 0A4</p>
            <p className="mb-2">(647) 898-6018</p>
            <a href="https://maps.google.com" className="text-[#EB6D0A] hover:underline">
              Google Map
            </a>
          </div>

          {/* 营业时间 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">营业时间</h3>
            <p className="mb-4">
              周二至周五<br />
              4:00pm- 8:00pm
            </p>
            <p>
              周六周日<br />
              10:00am- 6:00pm
            </p>
          </div>

          {/* 微信联系方式 */}
          <div>
            <div className="mb-4">
              <p className="text-[#EB6D0A] mb-1">Markham校区微信</p>
              <div className="w-32 h-32 bg-white rounded">
                {/* 这里可以添加二维码图片 */}
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-1">Potfolio课程辅导微信</p>
            </div>
            <div>
              <p className="mb-1">青少年艺术教育微信</p>
            </div>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-gray-700 w-full">
        <div className="w-full py-4 text-center text-sm">
          <p>© 2024 WeArt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 