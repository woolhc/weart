import React from 'react';

const MaterialList = () => {
  const materials = [
    {
      category: "基础工具",
      items: [
        "雕塑刀具套装",
        "塑形工具",
        "测量工具",
        "喷壶"
      ]
    },
    {
      category: "材料用品",
      items: [
        "雕塑泥",
        "石膏粉",
        "木材",
        "金属丝"
      ]
    },
    {
      category: "辅助工具",
      items: [
        "工作台",
        "转盘",
        "支架",
        "模具"
      ]
    },
    {
      category: "防护用品",
      items: [
        "工作服",
        "防护手套",
        "护目镜",
        "口罩"
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
        注：以上材料清单仅供参考，具体材料需求可能会根据课程进度和个人创作需求进行调整。
      </p>
    </section>
  );
};

export default MaterialList; 