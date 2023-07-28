import React from 'react';
import Toolbar from '@/components/survey/toolbar';
import Sidebar from '@/components/survey/sidebar';
import { Survey_Container } from './Makesurvey.styled';

function MakeSurvey() {

  return (
    <Survey_Container>
      <Toolbar />
      <Sidebar />
    </Survey_Container>
  );
}

export default MakeSurvey;