import WinCardlist from "./components/wincardlist";
import useWinListHook from "@/Hooks/mypage/useWinListHook";

const Winlist = () => {

  const { winConfirmList, refreshList } = useWinListHook();

  return (
    <div>
      <WinCardlist winConfirmList={winConfirmList} refreshList={refreshList} />
    </div>
  );
};

export default Winlist;
