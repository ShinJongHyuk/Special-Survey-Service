import React from 'react';
import Toolbar from '@/components/survey/toolbar';
import { Survey_Container } from './Makesurvey.styled';

function MakeSurvey() {

  return (
    <Survey_Container>
      <Toolbar />
    </Survey_Container>
  );
}

export default MakeSurvey;