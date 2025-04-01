import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white w-full">
      <div className="w-full py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
          {/* Logo区域 */}
          <div className="flex justify-center md:justify-start">
            <img src={logoWhite} alt="WeArt Logo" className="h-12 md:h-16 mb-6" />
          </div>

          {/* Markham校区信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Markham校区</h3>
            <p className="mb-2 text-sm md:text-base">21 Fairburn Dr #20,</p>
            <p className="mb-4 text-sm md:text-base">Markham, ON L6G 0A4</p>
            <p className="mb-2 text-sm md:text-base">(647) 898-6018</p>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EB6D0A] hover:underline text-sm md:text-base inline-flex items-center"
            >
              <span>Google Map</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* 营业时间 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">营业时间</h3>
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-medium">周二至周五</p>
                <p className="text-gray-300">4:00pm - 8:00pm</p>
              </div>
              <div>
                <p className="font-medium">周六周日</p>
                <p className="text-gray-300">10:00am - 6:00pm</p>
              </div>
            </div>
          </div>

          {/* 微信联系方式 */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <p className="text-[#EB6D0A] mb-2 text-sm md:text-base font-medium">Markham校区微信</p>
              <div className="w-32 h-32 bg-white rounded mx-auto md:mx-0">
                {/* 这里可以添加二维码图片 */}
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-sm md:text-base hover:text-[#EB6D0A] transition-colors cursor-pointer">
                  Portfolio课程辅导微信
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm md:text-base hover:text-[#EB6D0A] transition-colors cursor-pointer">
                  青少年艺术教育微信
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-gray-700 w-full">
        <div className="w-full py-4 px-4 text-center text-xs md:text-sm text-gray-300">
          <p>© {new Date().getFullYear()} WeArt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 