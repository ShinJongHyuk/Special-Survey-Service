"use client";
import surveyAnswerLogGet from "@/api/surveydetail/surveyAnswerLogGet";
import { useEffect, useState } from "react";

const useAnswerLogHoook = (id: any) => {
  const [answerlog, setAnswerlog] = useState<any>({});

  useEffect(() => {
    const fetchList = async () => {
      const data = await surveyAnswerLogGet(id);
      if (data.success) {
        setAnswerlog(data.response);
      } else {
        console.log(data);
      }
    };
    fetchList();
  }, []);

  return { answerlog };
};

export default useAnswerLogHoook;
