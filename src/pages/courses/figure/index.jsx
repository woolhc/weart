import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import CourseIntro from './components/CourseIntro';
import CourseFeatures from './components/CourseFeatures';
import TeachingContent from './components/TeachingContent';
import MaterialList from './components/MaterialList';

const Figure = () => {
  return (
    <PageLayout title="人体写生">
      <div className="space-y-12">
        <CourseIntro />
        <CourseFeatures />
        <TeachingContent />
        <MaterialList />
      </div>
    </PageLayout>
  );
};

export default Figure; 