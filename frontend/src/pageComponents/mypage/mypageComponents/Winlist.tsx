import WinCardlist from "./components/wincardlist";
import useWinListHook from "@/Hooks/mypage/useWinListHook";

const Winlist = () => {

  const { winConfirmList } = useWinListHook();

  return (
    <div>
      <WinCardlist winConfirmList={winConfirmList} />
    </div>
  );
};

export default Winlist;
