import api from "@/api/api";
import { useEffect, useState } from "react";

const useSSEHook = (surveyId: any, want: string) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(api.defaults.baseURL + "/subscribe/" + surveyId);

    eventSource.addEventListener(want, (event) => {
      console.log("Message from server :  ", event.data);
      // const jsonData = JSON.parse(event.data);
      setData(data);
    });

    return () => {
      eventSource.close();
    };
  }, [surveyId, want]);

  return data;
};
export default useSSEHook;
