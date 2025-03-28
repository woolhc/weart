import React from 'react';

const MaterialList = () => {
  const materials = [
    {
      category: "绘画工具",
      items: [
        "素描铅笔（2H-8B）",
        "炭笔和木炭条",
        "橡皮擦（普通橡皮和可塑橡皮）",
        "画板和画架"
      ]
    },
    {
      category: "绘画纸张",
      items: [
        "素描纸（不同规格）",
        "速写本",
        "牛皮纸",
        "马克笔纸"
      ]
    },
    {
      category: "辅助工具",
      items: [
        "画笔和毛刷",
        "固定夹",
        "量角器",
        "铅笔刀"
      ]
    },
    {
      category: "其他用品",
      items: [
        "画具箱",
        "防护围裙",
        "纸巾",
        "喷固定剂"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">材料清单</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((category, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#2F1C3A]">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#F46801] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        注：以上材料清单仅供参考，具体材料需求可能会根据课程进度和个人需求进行调整。
      </p>
    </section>
  );
};

export default MaterialList; 