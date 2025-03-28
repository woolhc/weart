import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import CourseIntro from './components/CourseIntro';
import CourseFeatures from './components/CourseFeatures';
import SoftwareSkills from './components/SoftwareSkills';
import CourseArrangement from './components/CourseArrangement';

const Digital = () => {
  return (
    <PageLayout title="数码绘画">
      <div className="space-y-12">
        <CourseIntro />
        <CourseFeatures />
        <SoftwareSkills />
        <CourseArrangement />
      </div>
    </PageLayout>
  );
};

export default Digital; 