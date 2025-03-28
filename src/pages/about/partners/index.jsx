import React from 'react';
import PageLayout from '../../../components/common/PageLayout';

const Partners = () => {
  const partners = [
    {
      category: "艺术院校",
      institutions: [
        { name: "Central Saint Martins", location: "英国" },
        { name: "Rhode Island School of Design", location: "美国" },
        { name: "Parsons School of Design", location: "美国" },
        { name: "Ontario College of Art & Design", location: "加拿大" }
      ]
    },
    {
      category: "艺术机构",
      institutions: [
        { name: "Royal Academy of Arts", location: "英国" },
        { name: "Art Gallery of Ontario", location: "加拿大" },
        { name: "Museum of Modern Art", location: "美国" }
      ]
    }
  ];

  return (
    <PageLayout title="合作伙伴">
      <div className="space-y-12">
        {partners.map((section, index) => (
          <section key={index} className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#2F1C3A]">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.institutions.map((institution, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#F46801]">
                    {institution.name}
                  </h3>
                  <p className="text-gray-600">{institution.location}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
};

export default Partners;
