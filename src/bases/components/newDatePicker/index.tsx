import "./styles.scss";
import { DatePicker } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

const NewDatePicker: React.FC = () => {
    const { RangePicker } = DatePicker;
    const renderExtraFooterValue = () => {
      return (
        <div className="footer-picker">
           <div>
              <InfoCircleOutlined />            
           </div>
           <div>
              <div className='footer-picker-title'>Blackout dates: 8 Jan, 10 Jan, 15 - 16 Jan, 25 Jan</div>
              <div className='footer-picker-content'>Certain dates not selectable because there are no operations and staff available for picking up 
              / returning cars, please select other dates instead.</div>
           </div>
        </div>
      )
    }
    return (
      <div className="date-box">
          <div>12:50</div>
          <div className="picker-box">
                <RangePicker 
                  onChange={() => {
                     console.log("11111")
                    }}
                  onFocus={() => {
                    console.log("565")
                  }}
                  popupClassName = 'popup-box'
                  bordered = {false} 
                  suffixIcon = {null}         
                  superNextIcon={null}
                  superPrevIcon={null} 
                  showNow ={false}
                  className='date-box'
                  allowClear={false}
                  renderExtraFooter={renderExtraFooterValue}
                />
          </div>
      </div>
    );
  };
  
  export default NewDatePicker;