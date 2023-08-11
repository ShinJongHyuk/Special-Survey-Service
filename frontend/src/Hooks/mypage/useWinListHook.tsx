import { useState, useEffect } from "react";
import myGiveawayGet from "@/api/win/myGiveawayGet";

const useWinListHook = () => {
    const [winConfirmList, setWinConfirmList] = useState<any>([]);

    const fetchList = async () => {

        const data = await myGiveawayGet();
        setWinConfirmList(data);

    };

    useEffect(() => {
        fetchList();
    }, []);

    return { winConfirmList, refreshList: fetchList };
};
export default useWinListHook;
