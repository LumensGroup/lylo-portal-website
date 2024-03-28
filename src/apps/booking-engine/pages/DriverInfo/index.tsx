import EnterDriverInfo from "@/bases/components/enterDriverInfo";
import StepInfoBar from "@/bases/components/steps";
import { Space } from "antd";
import OthersCollapseSummary from "../Addons/components/othersCollapseSummary";
import PickUp from "../Addons/components/pickup";
import "./styles.scss";

const DriverInfo = () => {
  const RightChildren = (
    <Space direction="vertical" size={16} className="right-area">
      <PickUp />
      <OthersCollapseSummary checkoutButtonText={"Checkout"} />
    </Space>
  );
  const singpassSessionId = "abcde"; // todo receive form outside
  return (
    <>
      <StepInfoBar currentIndex={2} />
      <div className="driverInfo-box">
        <div className="driverInfo-title">
          &lt;
          <div>Back</div>
        </div>
        <div className="driverInfo-content">
          <div className="driverInfo-left">
            <EnterDriverInfo
              singpassSessionId={singpassSessionId}
            ></EnterDriverInfo>
          </div>
          <div className="driverInfo-right">{RightChildren}</div>
        </div>
      </div>
    </>
  );
};

export default DriverInfo;
