import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import BackgroundEnhancement from './components/BackgroundEnhancement';
import SummerSchool from './components/SummerSchool';
import ArtPractice from './components/ArtPractice';
import ArtCompetition from './components/ArtCompetition';

const ArtPath = () => {
  return (
    <PageLayout title="艺术爬藤">
      <div className="space-y-12">
        <BackgroundEnhancement />
        <SummerSchool />
        <ArtPractice />
        <ArtCompetition />
      </div>
    </PageLayout>
  );
};

export default ArtPath; 