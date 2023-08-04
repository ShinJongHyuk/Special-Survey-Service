import SurveyDetail from "@/pageComponents/surveydetail";

export default function Page({ params }: { params: { id: string } }) {
    return <SurveyDetail id={params.id}></SurveyDetail>
}