import NewDatePicker from "@/bases/components/newDatePicker";
import {
  CloseOutlined,
  DownOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import moment from "moment";
import { useEffect, useState } from "react";
import request from "../../../bases/request";
import "./styles.scss";

type NewSearchProps = {
  searchChange?: any;
  radiusType?: any; //是否展示圆角
  shadowType?: any; //是否展示阴影
};
const NewSearch: React.FC<NewSearchProps> = ({
  searchChange,
  radiusType,
  shadowType,
}) => {
  const [clickType, SetClickType] = useState<any>("false");
  const [pickUp, SetPickUp] = useState<any>("09:00");
  const [dropOff, SetDropOff] = useState<any>("09:00");
  const [selectType, setSelectType] = useState<any>(true);
  const [selectTimeValue, setSelectTimeValue] = useState<any>("");
  const [locationFormType, setLocationFormType] = useState<any>(false);
  const [popconfirmTyoe, setPopconfirmTyoe] = useState<any>(false);
  const [rightOneValue, setRightOneValue] = useState<any>("100%");
  const [rightTwoValue, setRightTwoValue] = useState<any>("46%");
  const [searchContentType, SetsearchContentType] = useState<any>(false);
  const [rightOneTitle, setRightOneTitle] = useState<any>(
    "Pick-up & drop-off location"
  );
  const [pickerMobileMaxTimeType, setPickerMobileMaxTimeType] =
    useState<any>(false);
  const [pickerMobileMaxFormType, setPickerMobileMaxFormType] =
    useState<any>(false);
  const [blackoutDateData, setBlackoutDateData] = useState<any>([]);
  const [locationFormValue] = Form.useForm();
  const [searchForm] = useState<any>({});
  const [pickupDate, setPickupDate] = useState<any>("3-21");
  const [dropOffData, setDropOffData] = useState<any>("3-22");
  const [openData, setOpenData] = useState<any>([]);
  const [pickupName, setPickupName] = useState<any>(""); //开始日期对应的周几
  const [dropOffName, setDropOffName] = useState<any>(""); //结束日期对应的周几
  const [addressLineOne, setAddressLineOne] = useState<any>(
    "Lylohaus - 300 Sin Ming Rd"
  );
  const [addressLineTwo, setAddressLineTwo] = useState<any>("Singapore 575626");
  const [locationFormData] = Form.useForm();
  const [durationData, setDurationData] = useState<any>("0");

  const [timeSelectData, setTimeSelectData] = useState<any>([
    {
      start: "09:00",
      end: "10:00",
      id: 1,
      fromTime: 9,
      endTime: 10,
      disable: true,
    },
    {
      start: "10:00",
      end: "11:00",
      id: 2,
      fromTime: 10,
      endTime: 11,
      disable: true,
    },
    {
      start: "11:00",
      end: "12:00",
      id: 3,
      fromTime: 11,
      endTime: 12,
      disable: true,
    },
    {
      start: "12:00",
      end: "13:00",
      id: 4,
      fromTime: 12,
      endTime: 13,
      disable: true,
    },
    {
      start: "13:00",
      end: "14:00",
      id: 5,
      fromTime: 13,
      endTime: 14,
      disable: true,
    },
    {
      start: "14:00",
      end: "15:00",
      id: 6,
      fromTime: 14,
      endTime: 15,
      disable: true,
    },
    {
      start: "15:00",
      end: "16:00",
      id: 7,
      fromTime: 15,
      endTime: 16,
      disable: true,
    },
    {
      start: "16:00",
      end: "17:00",
      id: 8,
      fromTime: 16,
      endTime: 17,
      disable: true,
    },
    {
      start: "17:00",
      end: "18:00",
      id: 9,
      fromTime: 17,
      endTime: 18,
      disable: true,
    },
  ]);
  const [timeSelectDataTwo, setTimeSelectDataTwo] = useState<any>([
    {
      start: "09:00",
      end: "10:00",
      id: 1,
      fromTime: 9,
      endTime: 10,
      disable: true,
    },
    {
      start: "10:00",
      end: "11:00",
      id: 2,
      fromTime: 10,
      endTime: 11,
      disable: true,
    },
    {
      start: "11:00",
      end: "12:00",
      id: 3,
      fromTime: 11,
      endTime: 12,
      disable: true,
    },
    {
      start: "12:00",
      end: "13:00",
      id: 4,
      fromTime: 12,
      endTime: 13,
      disable: true,
    },
    {
      start: "13:00",
      end: "14:00",
      id: 5,
      fromTime: 13,
      endTime: 14,
      disable: true,
    },
    {
      start: "14:00",
      end: "15:00",
      id: 6,
      fromTime: 14,
      endTime: 15,
      disable: true,
    },
    {
      start: "15:00",
      end: "16:00",
      id: 7,
      fromTime: 15,
      endTime: 16,
      disable: true,
    },
    {
      start: "16:00",
      end: "17:00",
      id: 8,
      fromTime: 16,
      endTime: 17,
      disable: true,
    },
    {
      start: "17:00",
      end: "18:00",
      id: 9,
      fromTime: 17,
      endTime: 18,
      disable: true,
    },
  ]);
  const [mobileForm] = Form.useForm();

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const childDataFc = (value: any, equipment: any, type: any) => {
    console.log("接收到子组件的数据");
    console.log(value);
    console.log(type);
    console.log(equipment);
    if (type == "Pick-up" && equipment == "pc") {
      searchForm["pick_up_date"] = value[0].$d;
      searchForm["pick_off_date"] = value[1].$d;
    } else if (type == "Pick-up" && equipment == "mobile") {
      console.log("56565");
      searchForm["pick_up_date"] = value[0];
      searchForm["pick_off_date"] = value[1];
    } else if (type == "Pick-off" && equipment == "pc") {
      searchForm["pick_up_date"] = value[0].$d;
      searchForm["pick_off_date"] = value[1].$d;
    } else if (type == "Pick-off" && equipment == "mobile") {
      searchForm["pick_up_date"] = value[0];
      searchForm["pick_off_date"] = value[1];
    }
    const pickupOpengTime: any[] = [];
    const dropOffOpengTime: any[] = [];
    if (equipment == "pc") {
      setPickupDate(`${value[0].$d.getMonth() + 1}-${value[0].$d.getDate()}`);
      setDropOffData(`${value[1].$d.getMonth() + 1}-${value[1].$d.getDate()}`);
      const startDate = moment(value[0].$d);
      const endDate = moment(value[1].$d);
      const days = endDate.diff(startDate, "days");
      console.log("相差日期" + days); // 输出31
      setDurationData(days);
    } else {
      const valueOne = value[0] ? new Date(value[0]) : "";
      const valueTwo = value[1] ? new Date(value[1]) : "";
      setPickupDate(
        valueOne ? `${valueOne.getMonth() + 1}-${valueOne.getDate()}` : ""
      );
      setDropOffData(
        valueTwo ? `${valueTwo.getMonth() + 1}-${valueTwo.getDate()}` : ""
      );
      const startDate = moment(value[0]);
      const endDate = moment(value[1]);
      const days = endDate.diff(startDate, "days");
      console.log("相差日期" + days); // 输出31
      setDurationData(days);
    }
    setPickupName(moment(value[0]).format("dddd"));
    const pickupName = moment(value[0]).format("dddd").toUpperCase();
    const dropOffName = moment(value[1]).format("dddd").toUpperCase();
    openData[0]?.opening_hours.map((item: any) => {
      if (item.weekday == pickupName) {
        console.log("1");
        pickupOpengTime.push(parseFloat(item.open_from) + 8);
        pickupOpengTime.push(parseFloat(item.open_until) + 8);
      }
    });
    openData[openData.length - 1]?.opening_hours.map((item: any) => {
      if (item.weekday == dropOffName) {
        console.log("2");
        dropOffOpengTime.push(parseFloat(item.open_from) + 8);
        dropOffOpengTime.push(parseFloat(item.open_until) + 8);
      }
    });
    console.log(pickupOpengTime);
    // pick-up不可选日期
    const timeSelectValue = [...timeSelectData];
    timeSelectValue.map((item: any) => {
      if (
        item.fromTime >= pickupOpengTime[0] &&
        item.endTime <= pickupOpengTime[1]
      ) {
        item.disable = false;
      }
    });
    setTimeSelectData(timeSelectValue);
    //drop-off不可选日期
    const timeSelectValueTwo = [...timeSelectDataTwo];
    timeSelectValueTwo.map((item: any) => {
      if (
        item.fromTime >= pickupOpengTime[0] &&
        item.endTime <= pickupOpengTime[1]
      ) {
        item.disable = false;
      }
    });
    setTimeSelectDataTwo(timeSelectValueTwo);
    // console.log(parseFloat(pickupOpengTime[1]))
  };

  const timeSelectMouerLeave = () => {
    setSelectType(false);
  };

  const renderExtraFooterValue = (data: any) => {
    return (
      <div
        className="time-picker-select"
        style={{ display: selectType ? "block" : "none" }}
        onMouseLeave={timeSelectMouerLeave}
      >
        {data.map((item: any) => (
          <div
            key={item.id}
            style={{ cursor: item.disable ? "no-drop" : "pointer" }}
            className={item.disable ? "time-picker-select-disable" : ""}
            onClick={() => {
              setSelectTimeValue(item.start);
              setSelectType(false);
              clickType == "Pick-up"
                ? SetPickUp(item.start)
                : SetDropOff(item.start);
              if (!item.disable) {
                searchForm["start_time"] = item.start;
                searchForm["end_time"] = item.end;
              }
              console.log(item);
            }}
          >
            {item.start} - {item.end}
          </div>
        ))}
      </div>
    );
  };
  const getnowDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");

    return `${month}-${date}`;
  };
  const locationFormOnFinish = (values: any) => {
    Object.assign(searchForm, values);
    setAddressLineOne(values.address_line_one);
    setAddressLineTwo(values.address_line_two_optional);
    setLocationFormType(false);
    if (
      containsIgnoreCase(values?.address_line_one, "Lylohaus") ||
      containsIgnoreCase(values?.address_line_two_optional, "Lylohaus")
    ) {
      console.log("匹配到了");
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const date = String(now.getDate() + 1).padStart(2, "0");
      setPickupDate(`${month}-${date}`);
      searchForm["pick_up_date"] = new Date(`${year}-${month}-${date}`);
    } else if (
      containsIgnoreCase(values?.address_line_one, "Delivery") ||
      containsIgnoreCase(values?.address_line_two_optional, "Delivery")
    ) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const date = String(now.getDate() + 2).padStart(2, "0");
      setDropOffData(`${month}-${date}`);
      searchForm["pick_off_date"] = new Date(`${year}-${month}-${date}`);
    }
    console.log(searchForm);
  };
  const containsIgnoreCase = (str: any, substring: any) => {
    if (str) {
      return str.toLowerCase().includes(substring.toLowerCase());
    }
    return "";
  };

  const locationFormMobileOnFinish = (values: any) => {
    setPickerMobileMaxFormType(false);
    Object.assign(searchForm, values);
    setLocationFormType(false);
    setAddressLineOne(values.address_line_one);
    setAddressLineTwo(values.address_line_two_optional);
    if (
      containsIgnoreCase(values?.address_line_one, "Lylohaus") ||
      containsIgnoreCase(values?.address_line_two_optional, "Lylohaus")
    ) {
      console.log("匹配到了");
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const date = String(now.getDate() + 1).padStart(2, "0");
      setPickupDate(`${month}-${date}`);
      searchForm["pick_up_date"] = new Date(`${year}-${month}-${date}`);
    } else if (
      containsIgnoreCase(values?.address_line_one, "Delivery") ||
      containsIgnoreCase(values?.address_line_two_optional, "Delivery")
    ) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const date = String(now.getDate() + 2).padStart(2, "0");
      setDropOffData(`${month}-${date}`);
      searchForm["pick_off_date"] = new Date(`${year}-${month}-${date}`);
    }
    console.log(searchForm);
  };
  const locationClick = () => {
    setLocationFormType(false);
  };
  const locationForm = () => {
    return (
      <>
        <div className="location-form">
          <div>Lylohaus - 300 Sin Ming Rd, Singapore 575626</div>
          <div className="location-form-content">
            <div>Deliver vehicle to my location*</div>
            <div>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                onFinish={locationFormOnFinish}
                form={locationFormData}
              >
                <Form.Item name="postalcode">
                  <Input style={{ height: "54px" }} placeholder="Postal code" />
                </Form.Item>
                <Form.Item name="address_line_one">
                  <Input
                    style={{ height: "54px" }}
                    placeholder="Address line 1"
                  />
                </Form.Item>
                <Form.Item name="address_line_two_optional">
                  <Input
                    style={{ height: "54px" }}
                    placeholder="Address line 2 - optional"
                  />
                </Form.Item>
                <Form.Item name="remarks">
                  <Input style={{ height: "54px" }} placeholder="Remarks" />
                </Form.Item>
                <Form.Item>
                  <div>*One way trip S$50.00, round trip S$75.00</div>
                </Form.Item>
                <Form.Item label="">
                  <div style={{ position: "relative", height: "40px" }}>
                    <Button className="submit-button" htmlType="submit">
                      Apply
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="location-box" onClick={locationClick}></div>
      </>
    );
  };
  const popconfirm = () => {
    return (
      <div className="popconfirm">
        Rental of less than 24 hours will be charged as a full day.
        <div className="triangle"></div>
      </div>
    );
  };
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    if (!searchContentType) {
      setRightOneValue("46%");
      SetsearchContentType(true);
      setRightOneTitle("Pick-up");
    } else {
      setRightOneValue("100%");
      SetsearchContentType(false);
      setRightOneTitle("Pick-up & drop-off location");
    }
  };
  const submitButton = () => {
    searchChange(searchForm);
  };
  const timePickerClick = (value: any) => {
    if (document.body.clientWidth > 950) {
      setSelectType(true);
      SetClickType(value);
    } else {
      setPickerMobileMaxTimeType(true);
    }
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
    const startDate = "2024-03-17T00:00:00Z";
    const endDate = "2024-03-27T00:00:00Z";

    const allDates = getAllDatesBetween(startDate, endDate);
    const dataValue: any[] = [];
    request.get("/blackout_date/getlist").then((res: any) => {
      console.log("开放日期");
      res?.lists.map((item: any) => {
        const newDate = getAllDatesBetween(item.from_date, item.end_date);
        dataValue.push(...newDate);
      });
      setBlackoutDateData(dataValue);
    });
    // 获取开放时间
    request.get("/opening_hour/getlist").then((res: any) => {
      console.log("开放时间");
      console.log(res);
      setOpenData(res?.lists);
    });
  }, []);
  const buttonClick = () => {
    setPickerMobileMaxTimeType(false);
  };
  const pickerMobileMaxTime = () => {
    return (
      <div className="picker-mobile-max-time">
        <div className="picker-mobile-max-time-header">
          Select pickup time
          <div
            className="close-div"
            onClick={() => {
              setPickerMobileMaxTimeType(false);
            }}
          >
            <CloseOutlined />
          </div>
        </div>
        <div className="picker-mobile-max-time-content">
          {timeSelectData.map((item: any) => (
            <div
              key={item.id}
              style={{ cursor: item.disable ? "no-drop" : "pointer" }}
              className={
                item.disable
                  ? "mobile-time-select-disable"
                  : "mobile-time-select"
              }
              onClick={() => {
                setSelectTimeValue(item.start);
                setSelectType(false);
                clickType == "Pick-up" ? SetPickUp(item.start) : "";
                if (!item.disable) {
                  searchForm["start_time"] = item.start;
                  searchForm["end_time"] = item.end;
                }
                console.log(item);
              }}
            >
              {item.start} - {item.end}
            </div>
          ))}
        </div>
        <div className="picker-mobile-max-time-button-box">
          <div className="picker-mobile-max-time-button" onClick={buttonClick}>
            Apply
          </div>
        </div>
      </div>
    );
  };
  const pickerMobileMaxForm = () => {
    return (
      <div className="picker-mobile-max-time">
        <div className="picker-mobile-max-time-header">
          <div style={{ width: "350px" }}>
            {addressLineOne}, {addressLineTwo}
          </div>
          <div
            className="close-div"
            onClick={() => {
              setPickerMobileMaxFormType(false);
            }}
          >
            <CloseOutlined />
          </div>
        </div>
        <div className="picker-mobile-max-form-content">
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            onFinish={locationFormMobileOnFinish}
            form={mobileForm}
          >
            <Form.Item name="postalcode">
              <Input style={{ height: "54px" }} placeholder="Postal code" />
            </Form.Item>
            <Form.Item name="address_line_one">
              <Input style={{ height: "54px" }} placeholder="Address line 1" />
            </Form.Item>
            <Form.Item name="address_line_two_optional">
              <Input
                style={{ height: "54px" }}
                placeholder="Address line 2 - optional"
              />
            </Form.Item>
            <Form.Item name="remarks">
              <Input style={{ height: "54px" }} placeholder="Remarks" />
            </Form.Item>
            <Form.Item>
              <div>*One way trip S$50.00, round trip S$75.00</div>
            </Form.Item>
            <Form.Item label="">
              <div className="picker-mobile-max-form-button-box">
                <Button
                  className="picker-mobile-max-form-button"
                  htmlType="submit"
                >
                  Apply
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };
  const rightTwoData = () => {
    return (
      <div
        className="search-content-right-one"
        style={{ width: rightTwoValue }}
      >
        <div>drop-off location</div>
        <div
          onClick={() => {
            if (document.body.clientWidth > 950) {
              setLocationFormType(true);
            } else {
              setPickerMobileMaxFormType(true);
            }
          }}
        >
          {addressLineTwo}
        </div>
      </div>
    );
  };
  return (
    <div
      className="new-search-box"
      style={{
        borderRadius: radiusType ? "16px" : "0px",
        boxShadow: shadowType ? "0px 0px 10px 0px rgba(0, 0, 0, 0.3)" : "",
      }}
    >
      {/* <div className="search-title">
            {title}
        </div> */}
      <div className="search-content">
        <div className="search-content-left">
          <div>
            <div>
              <div>Pick-up date</div>
              <div>
                <NewDatePicker
                  childData={childDataFc}
                  pickupDate={pickupDate}
                  dateData={blackoutDateData}
                  typePicker="Pick-up"
                ></NewDatePicker>
                <div className="line-div"></div>
                <div
                  className="time-picker"
                  onClick={() => timePickerClick("Pick-up")}
                >
                  <span>{pickUp}</span>
                  <DownOutlined />
                </div>
              </div>
              {clickType == "Pick-up" && renderExtraFooterValue(timeSelectData)}
            </div>
            <div>
              <div>Drop-off date</div>
              <div>
                <NewDatePicker
                  childData={childDataFc}
                  dropOffData={dropOffData}
                  dateData={blackoutDateData}
                  typePicker="Pick-off"
                ></NewDatePicker>
                <div className="line-div"></div>
                <div
                  className="time-picker"
                  onClick={() => timePickerClick("Drop-off")}
                >
                  <span>{dropOff}</span>
                  <DownOutlined />
                </div>
              </div>
              {clickType == "Drop-off" &&
                renderExtraFooterValue(timeSelectDataTwo)}
            </div>
          </div>
          <div
            className="search-content-left-footer"
            onClick={() => {
              setPopconfirmTyoe(popconfirmTyoe ? false : true);
            }}
          >
            <InfoCircleOutlined />
            <div>Duration: {durationData} day</div>
            {popconfirmTyoe && popconfirm()}
          </div>
        </div>
        <div className="search-content-right">
          <div>
            <div
              className="search-content-right-one"
              style={{ width: rightOneValue, marginRight: "12px" }}
            >
              <div>{rightOneTitle}</div>
              <div
                onClick={() => {
                  if (document.body.clientWidth > 950) {
                    setLocationFormType(true);
                    console.log("1");
                  } else {
                    setPickerMobileMaxFormType(true);
                    console.log("2");
                  }
                }}
              >
                {addressLineOne ? addressLineOne : ""}
                {!searchContentType && addressLineTwo
                  ? "," + addressLineTwo
                  : ""}
              </div>
              {locationFormType && locationForm()}
            </div>
            {searchContentType && rightTwoData()}
            <div className="submit-div-pc" onClick={submitButton}>
              <img
                height={52}
                width={60}
                src={require("@/bases/assets/imgs/look_over.png")}
              />
            </div>
          </div>
          <div className="search-content-right-footer">
            <Checkbox onChange={onChangeCheckbox}></Checkbox>
            <div>Return car to a different location</div>
          </div>
        </div>
        <div className="mobile-submit" onClick={submitButton}>
          <img src={require("@/bases/assets/imgs/look_over.png")} alt="" />
          Explore
        </div>
      </div>
      {pickerMobileMaxTimeType && pickerMobileMaxTime()}
      {pickerMobileMaxFormType && pickerMobileMaxForm()}
    </div>
  );
};

export default NewSearch;
