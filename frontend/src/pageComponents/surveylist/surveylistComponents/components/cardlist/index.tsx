import NormalCardlist from "./NormalCardlist";
import InstantCardlist from "./InstantCardlist";

const Cardlist = (props: any) => {
  const path = props.selectBtn;

  return <div>{path === "1" ? <NormalCardlist /> : <InstantCardlist />}</div>;
};

export default Cardlist;
