import AddonsLayout from "@/bases/components/addons-layout";
import { Space } from "antd";
import { useMediaQuery } from "react-responsive";
import Addons from "./components/addons";
import CDW from "./components/cdw";
import SelectCarDetail from "./components/details";
import ImportantInfo from "./components/important-info";
import PickUp from "./components/pickup";
import { CollapseSummary } from "./components/summary";
import "./styles.scss";

const SelectCarPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const LeftChildren = (
    <Space direction="vertical" size={16} className="left-area">
      <SelectCarDetail />
      <CDW direction="horizontal" />
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

  const MobileChildren = (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <SelectCarDetail />
      <CDW direction="vertical" />
      <Addons />
      <ImportantInfo />
    </Space>
  );

  const MobileAddons = (
    <div className="add-ons__mobile__layout">{MobileChildren}</div>
  );

  if (isMobile) {
    return MobileAddons;
  }
  return (
    <div className="add-ons__main__layout">
      <AddonsLayout LeftChildren={LeftChildren} RightChildren={RightChildren} />
    </div>
  );
};

export default SelectCarPage;
