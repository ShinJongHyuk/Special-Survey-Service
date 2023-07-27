'use client'

import React from 'react'
import Survey from '@/components/survey';
import Toolbar from '@/components/survey/toolbar';
import { Survey_Container } from './Makesurvey.styled';
import useStayStore from '@/stores/useStayStore';

function MakeSurvey() {
    const selectedSurvey = useStayStore((state : any) => state.selectedSurvey);
    const showToolbar = useStayStore((state : any) => state.showToolbar);

    return (
      <Survey_Container>
        <Survey />
        {selectedSurvey != null && <Toolbar />}
      </Survey_Container>
    );
  }

export default MakeSurvey