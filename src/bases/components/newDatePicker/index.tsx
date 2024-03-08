import "./styles.scss";
import { DatePicker } from 'antd';
import { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { CalendarPickerView, ConfigProvider } from 'antd-mobile'
import { useState } from "react";
import enUS from 'antd-mobile/es/locales/en-US'

type NewDatePickerProps = {
  name?: string;
  childData?: any
};

const NewDatePicker = ({
  name,
  childData,
}: NewDatePickerProps) => {
    console.log('我的名字'+name)
    const { RangePicker } = DatePicker;
    const [selectType, setSelectType] = useState<any>(true);
    const [maxType, setMaxType] = useState<any>(false);
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
    const buttonClick= ()=>{
      // childData({name:"我是zzz"})
      setMaxType(false)
    }
    const pickerMobileMaxDate = ()=>{
        return (
          <div className="picker-mobile-max">
              <div className="picker-mobile-max-header">
                 Select pickup date
                 <div className="close-div" onClick={()=>{
                    setMaxType(false)
                 }}>
                   <CloseOutlined />
                 </div>
              </div>
              <div className="picker-mobile-max-content">
                <ConfigProvider locale={enUS}>
                  <CalendarPickerView  selectionMode='range'></CalendarPickerView>
                </ConfigProvider>
              </div>
              <div className="picker-mobile-max-footer">
                  <div>
                    <InfoCircleOutlined></InfoCircleOutlined>
                  </div>
                  <div>
                      <div>
                        Blackout dates: 8 Jan, 10 Jan, 15 - 16 Jan, 25 Jan
                      </div>
                      <div>
                        Certain dates not selectable because there are no operations and staff available for picking up / returning cars, please select other dates instead.
                      </div>
                  </div>
              </div>
              <div className="picker-mobile-max-button-box">
                <div className="picker-mobile-max-button" onClick={buttonClick}>
                  Apply
                </div>
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
          <div className="picker-box-mobile" onClick={()=>{
              console.log("被点击")
              setMaxType(true)
          }}>
          </div>
          {maxType&&pickerMobileMaxDate()}
          {/* <div className="picker-mobile-max">
              <div className="picker-mobile-max-header">
                 Select pickup date
                 <div className="close-div">
                   <CloseOutlined />
                 </div>
              </div>
              <div className="picker-mobile-max-content">
                <ConfigProvider locale={enUS}>
                  <CalendarPickerView  selectionMode='range'></CalendarPickerView>
                </ConfigProvider>
              </div>
              <div className="picker-mobile-max-footer">
                  <div>
                    <InfoCircleOutlined></InfoCircleOutlined>
                  </div>
                  <div>
                      <div>
                        Blackout dates: 8 Jan, 10 Jan, 15 - 16 Jan, 25 Jan
                      </div>
                      <div>
                        Certain dates not selectable because there are no operations and staff available for picking up / returning cars, please select other dates instead.
                      </div>
                  </div>
              </div>
              <div className="picker-mobile-max-button" onClick={test}>
                 Apply
              </div>
          </div> */}
      </div>
    );
  };
  
  export default NewDatePicker;