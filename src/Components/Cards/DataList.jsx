import A from "../../assets/img/A.png";
import B from "../../assets/img/B.png";
import C from "../../assets/img/C.png";
import D from "../../assets/img/D.png";
import E from "../../assets/img/E.png";
import G from "../../assets/img/G.png";
import DataCard from "./DataCard";

export default function DataList() {
  const listItems = [
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: A,
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: B,
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: C,
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: D,
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: E,
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      posture: G,
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
      {listItems.map((item, index) => {
        return <DataCard key={index} data={item} />;
      })}
    </div>
  );
}
