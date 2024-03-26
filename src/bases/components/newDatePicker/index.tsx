import { CloseOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { CalendarCard, ConfigProvider } from "@nutui/nutui-react";
import en from "@nutui/nutui-react/dist/locales/en-US";
import "@nutui/nutui-react/dist/style.css";
import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import "./styles.scss";

type NewDatePickerProps = {
  childData?: any;
  dateData?: any;
  typePicker?: string;
  pickupDate?: string;
  dropOffData?: string;
  equipment?: string;
};

const NewDatePicker = ({
  childData,
  dateData,
  typePicker,
  pickupDate,
  dropOffData,
  equipment,
}: NewDatePickerProps) => {
  const { RangePicker } = DatePicker;
  const [maxType, setMaxType] = useState<any>(false);
  const [blackoutDateValue, setBlackoutDateValue] = useState<any>([]);
  const [startDate, setStartDate] = useState<any>("");
  const [endData, setEndData] = useState<any>("");
  // const [pickupDate, setPickupDate] = useState<any>('3-21');
  // const [dropOffData, setDropOffData] = useState<any>('3-22');
  const disabledDate = (current: any) => {
    // 如果当前日期是数组中的一个元素，则禁用
    const isDisabledDay = blackoutDateValue.some((day: any) => current.isSame(day, "day"));
    const isBeforeToday = current.isBefore(moment(), 'day');
    const Afterdays = current > moment().add(90, 'days')
    return isBeforeToday || isDisabledDay || Afterdays;
  };
  const getNutuiDisableDay = (value: any) => {
    let newmonth = "",
      newday = "";
    if (value.month < 10) {
      newmonth = "0" + value.month;
    } else {
      newmonth = value.month;
    }
    if (value.date < 10) {
      newday = "0" + value.date;
    } else {
      newday = value.date;
    }
    return value.year + "-" + newmonth + "-" + newday;
  };
  //获取范围时间
  const getAllDatesBetween = (startDateStr: any, endDateStr: any) => {
    const startDate = moment(startDateStr);
    const endDate = moment(endDateStr);
    const dates: any[] = [];

    const currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
      dates.push(currentDate.format("YYYY-MM-DD")); // 或者使用其他格式
      currentDate.add(1, "days");
    }

    return dates;
  };

  useEffect(() => {
    console.log("父组件传过来的数据");
    console.log(dateData);
    setBlackoutDateValue(dateData);
    setStartDate(dateData[0]);
    setEndData(dateData[dateData.length - 1]);
  }, [dateData]);
  const renderPanel = () => {
    return <div>565656</div>;
  };
  const renderExtraFooterValue = () => {
    return (
      <div className="footer-picker">
        <div>
          <InfoCircleOutlined />
        </div>
        <div>
          <div className="footer-picker-title">
            Blackout dates: 8 Jan, 10 Jan, 15 - 16 Jan, 25 Jan
          </div>
          <div className="footer-picker-content">
            Certain dates not selectable because there are no operations and
            staff available for picking up / returning cars, please select other
            dates instead.
          </div>
        </div>
      </div>
    );
  };
  const buttonClick = () => {
    // childData({name:"我是zzz"})
    setMaxType(false);
  };
  const pickerMobileMaxDate = () => {
    let type = false;
    setTimeout(function () {
      type = true;
    }, 1000);
    return (
      <div className="picker-mobile-max">
        <div className="picker-mobile-max-header">
          Select pickup date
          <div
            className="close-div"
            onClick={() => {
              setMaxType(false);
            }}
          >
            <CloseOutlined />
          </div>
        </div>
        <div className="picker-mobile-max-content">
          <ConfigProvider locale={en}>
            <CalendarCard
              onChange={(value: any) => {
                childData(value, "mobile", typePicker);
              }}
              type="range"
              disableDay={(day) => {
                const newDay = getNutuiDisableDay(day);
                return dateData.includes(newDay);
              }}
            ></CalendarCard>
          </ConfigProvider>
          ,
        </div>
        <div className="picker-mobile-max-footer">
          <div>
            <InfoCircleOutlined></InfoCircleOutlined>
          </div>
          <div>
            <div>Blackout dates: 8 Jan, 10 Jan, 15 - 16 Jan, 25 Jan</div>
            <div>
              Certain dates not selectable because there are no operations and
              staff available for picking up / returning cars, please select
              other dates instead.
            </div>
          </div>
        </div>
        <div className="picker-mobile-max-button-box">
          <div className="picker-mobile-max-button" onClick={buttonClick}>
            Apply
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="date-box">
      <div>{typePicker == "Pick-up" ? pickupDate : dropOffData}</div>
      <div className="picker-box">
        <RangePicker
          onChange={(value: any) => {
            childData(value, "pc", typePicker);
            //  setPickupDate(`${value[0].$d.getMonth() + 1}-${value[0].$d.getDate()}`)
            //  setDropOffData(`${value[1].$d.getMonth() + 1}-${value[1].$d.getDate()}`)
          }}
          onFocus={() => {
            console.log("565");
          }}
          popupClassName="popup-box"
          bordered={false}
          suffixIcon={null}
          superNextIcon={null}
          superPrevIcon={null}
          showNow={false}
          className="date-box"
          allowClear={false}
          disabledDate={disabledDate}
          renderExtraFooter={renderExtraFooterValue}
        />
      </div>
      <div
        className="picker-box-mobile"
        onClick={() => {
          console.log("被点击");
          setMaxType(true);
        }}
      ></div>
      {maxType && pickerMobileMaxDate()}
    </div>
  );
};

export default NewDatePicker;
