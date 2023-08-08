import { useState, useEffect } from "react";
import myGiveawayGet from "@/api/win/myGiveawayGet";

const useWinListHook = () => {
    const [winConfirmList, setWinConfirmList] = useState<any>([]);

    useEffect(() => {
        const fetchList = async () => {

            const data = await myGiveawayGet();
            setWinConfirmList(data);

        };
        fetchList();
    }, []);

    return { winConfirmList };
};
export default useWinListHook;
