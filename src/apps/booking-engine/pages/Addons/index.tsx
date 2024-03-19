import AddonsLayout from "@/bases/components/addons-layout";
import { Space } from "antd";
import Addons from "./components/addons";
import CDW from "./components/cdw";
import SelectCarDetail from "./components/details";
import ImportantInfo from "./components/important-info";
import PickUp from "./components/pickup";
import { CollapseSummary } from "./components/summary";
import "./styles.scss";
const SelectCarPage = () => {
  const LeftChildren = (
    <Space direction="vertical" size={16} className="left-area">
      <SelectCarDetail />
      <CDW />
      <Addons />
      <ImportantInfo />
    </Space>
  );

  const RightChildren = (
    <Space direction="vertical" size={16} className="right-area">
      <PickUp />
      <CollapseSummary />
    </Space>
  );

  return (
    <div className="car-select_main-layout">
      <AddonsLayout LeftChildren={LeftChildren} RightChildren={RightChildren} />
    </div>
  );
};

export default SelectCarPage;
