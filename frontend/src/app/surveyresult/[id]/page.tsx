import SurveyResult from '@/pageComponents/surveyresult';

import { Metadata } from "next";

export const metadata: Metadata = {
      title: "SSS",
      description: "설문 결과 페이지입니다. 만든 설문의 통계, 결제 정보를 확인할 수 있습니다. "
};

export default function surveyresult({ params }: { params: { id: string } }) {
      return (
            <SurveyResult id={params.id} />
      );
}
