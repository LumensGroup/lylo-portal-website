import "./styles.scss";
import { DatePicker, notification } from 'antd';
import { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { CalendarPickerView, ConfigProvider } from 'antd-mobile'
import { useState, useEffect } from "react";
import enUS from 'antd-mobile/es/locales/en-US'
import request from "../../../bases/request";
import moment from 'moment';

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
    const [maxType, setMaxType] = useState<any>(false);
    const [blackoutDateData, setBlackoutDateData] = useState<any>([]);
    
    const disabledDate = (current:any) => {
      // 如果当前日期是数组中的一个元素，则禁用
      return blackoutDateData.some((day:any) => current.isSame(day, 'day'));
    };
     
     //获取范围时间
    const getAllDatesBetween = (startDateStr:any, endDateStr:any) =>{  
      const startDate = moment(startDateStr);  
      const endDate = moment(endDateStr);  
      const dates : any[] = [] 
      
      const currentDate = startDate.clone();  
      while (currentDate.isSameOrBefore(endDate)) {  
        dates.push(currentDate.format('YYYY-MM-DD')); // 或者使用其他格式  
        currentDate.add(1, 'days');  
      }  
      
      return dates;  
    }  
    const  getBlackoutDate = async (value:any) =>{
      const arrayData: any[] = []
      value.map((item:any)=>{
        if(!item){
          return false
        }
        const newValue = item['from_date'].split('')
        const indexValue = newValue.indexOf('T')
        newValue.splice(indexValue,99)
        const dateString = newValue.join('')
        arrayData.push(
          moment(dateString)
        )
      })
      await setBlackoutDateData(arrayData)
    }
    useEffect(() => {
      const startDate = '2023-01-01';  
      const endDate = '2023-01-05';  
        
      const allDates = getAllDatesBetween(startDate, endDate);  
        
      console.log(allDates); // 输出开始日期和结束日期之间的所有日期
      (async () => {
        await request
        .get("/blackout_date/getlist")
        .then ((res:any) => {
          if(res.data.code == 0){
            getBlackoutDate(res.data.data.lists)
          }
        })
        .catch((e) => {
          notification.error({
            message: `Notification`,
            description: e?.statusText,
            placement: "topRight",
          });
        })
      })();
    }, []);
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
                  disabledDate={disabledDate}
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