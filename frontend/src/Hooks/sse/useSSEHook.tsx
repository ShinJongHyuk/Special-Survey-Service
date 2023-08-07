import api from "@/api/api";
import { useEffect, useState } from "react";

const useSSEHook = (want: any, surveyId: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(api.defaults.baseURL + `/subscribe/` + surveyId, {
      withCredentials: true,
    });

    eventSource.onopen = () => {
      console.log("open")
    }

    eventSource.onmessage = async (e: any) => {
      const res = await e.data;
      const parsedData = JSON.parse(res);
      console.log("sse res: ", res);
      console.log("sse parsedData: ", parsedData);
      setData(parsedData)
    }
    // eventSource.addEventListener(want, function (event) {
    //   console.log(event);
    //   setData(JSON.parse(event.data));
    // });


    eventSource.onerror = (e: any) => {
      eventSource.close();

      if (e.error) {
        console.log("sse Error")
      }

      if (e.target.readyState === EventSource.CLOSED) {
        console.log("sse close")
      }
    };

    return () => {
      eventSource.close();
    };
  }, [surveyId, want]);

  return data;
};
export default useSSEHook;
