import React from 'react';
import MakeSurvey from "@/pageComponents/makesurvey"

import { Metadata } from "next";

export const metadata: Metadata = {
      title: "SSS",
      description: "설문 제작 페이지 입니다. 설문 대상자를 설정하고 설문지를 만들 수 있습니다. "
};

export default function makesurvey() {
      return (
            <MakeSurvey />
      );
}
