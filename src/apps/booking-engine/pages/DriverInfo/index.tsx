import StepInfoBar from "@/bases/components/steps";
import EnterDriverInfo from "@/bases/components/enterDriverInfo"
import "./styles.scss";

const DriverInfo = () => {
  const singpassSessionId = "abcde" // todo receive form outside
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
        <div className="driverInfo-left">
          <EnterDriverInfo singpassSessionId={singpassSessionId} ></EnterDriverInfo>
        </div>
      </div>
    </>
  );
};

export default DriverInfo;
