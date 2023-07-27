'use client'

import React from 'react'
import Survey from '@/components/survey';

function MakeSurvey() {

    return (
        <>
            <h1>MakeSurvey</h1>
            <Survey key="survey1"/>
            <Survey key="survey2"/>
        </>
    );
};

export default MakeSurvey