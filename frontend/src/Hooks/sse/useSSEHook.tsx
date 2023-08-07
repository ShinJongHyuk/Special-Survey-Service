import api from "@/api/api";
import { useEffect, useState } from "react";

const useSSEHook = (want: any, surveyId: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(api.defaults.baseURL + `/subscribe/` + surveyId);

    eventSource.addEventListener(want, function (event) {
      setData(JSON.parse(event.data));
    });

    // error 검증 start
    eventSource.addEventListener("open", (event) => {
      console.log("Connection to server opened.");
    });

    eventSource.addEventListener("error", (event: any) => {
      if (event.target.readyState === EventSource.CLOSED) {
        console.log("Connection to server closed.");
      } else if (event.target.readyState === EventSource.CONNECTING) {
        console.log("Connection to server lost. Trying to reconnect...");
      }
    });

    // error 검증 end

    return () => {
      eventSource.close();
    };
  }, [surveyId, want]);

  return data;
};
export default useSSEHook;
