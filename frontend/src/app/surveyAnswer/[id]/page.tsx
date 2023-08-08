import SurveyAnswer from "@/pageComponents/surveyAnswer";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <SurveyAnswer id={params.id}/>
    )
}