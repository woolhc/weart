import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import BackgroundEnhancement from '../components/BackgroundEnhancement';

const Background = () => {
  return (
    <PageLayout title="艺术背景提升">
      <div className="space-y-12">
        <BackgroundEnhancement />
      </div>
    </PageLayout>
  );
};

export default Background; 