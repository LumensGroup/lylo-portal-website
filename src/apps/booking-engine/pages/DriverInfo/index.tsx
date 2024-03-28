import StepInfoBar from "@/bases/components/steps";
import EnterDriverInfo from "@/bases/components/enterDriverInfo"
import { Space } from "antd";
import PickUp from "../Addons/components/pickup";
import "./styles.scss";
import { DriverPageSummary } from "./components/summary";

const DriverInfo = () => {
  const RightChildren = (
    <Space direction="vertical" size={16} className="right-area">
      <DriverPageSummary />
      <PickUp />
    </Space>
  );
  const singpassSessionId = "test565" // todo receive form outside
  return (
    <>
      <StepInfoBar currentIndex={2} />
      <div className='driverInfo-box'>
        <div className="driverInfo-title">
            &lt; 
            <div>
              Back 
            </div>
        </div>
        <div className='driverInfo-content'>
          <div className="driverInfo-left">
            <EnterDriverInfo singpassSessionId={singpassSessionId} ></EnterDriverInfo>
          </div>
          <div className="driverInfo-right">
              {RightChildren}
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverInfo;
