'use client'

import React from 'react';
import SurveyResult from '@/pageComponents/surveyresult';

export default function surveyresult({params} : { params : {id : string} }) {
    return (
          <SurveyResult id={params.id}/> 
    );
  }
  