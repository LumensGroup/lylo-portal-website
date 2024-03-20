import "./styles.scss";
import { useState } from "react";
import NewDatePicker from "@/bases/components/newDatePicker";
import { DownOutlined,InfoCircleOutlined,CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Checkbox
} from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import request from "../../../bases/request";


const NewSearch: React.FC = () => {
  const [clickType, SetClickType] = useState<any>('false');
  const [pickUp, SetPickUp] = useState<any>('09:00');
  const [selectType, setSelectType] = useState<any>(true);
  const [selectTimeValue, setSelectTimeValue] = useState<any>('');
  const [locationFormType, setLocationFormType] = useState<any>(false);
  const [popconfirmTyoe, setPopconfirmTyoe] = useState<any>(false);
  const [rightOneValue, setRightOneValue] = useState<any>('100%');
  const [rightTwoValue, setRightTwoValue] = useState<any>('46%');
  const [searchContentType, SetsearchContentType] = useState<any>(false);
  const [rightOneTitle, setRightOneTitle] = useState<any>('Pick-up & drop-off location');
  const [pickerMobileMaxTimeType, setPickerMobileMaxTimeType] = useState<any>(false);
  const [pickerMobileMaxFormType, setPickerMobileMaxFormType] = useState<any>(false);



  const testFc = (value:any,type:any) =>{
    console.log("接收到子组件的数据"+value)
  }

  const timeSelectMouerLeave = () => {
    setSelectType(false)
  }

  const timeSelectData = [
    {start:'09:00 ',end:"10:00",id:1},
    {start:'10:00 ',end:"11:00",id:2},
    {start:'11:00 ',end:"12:00",id:3},
    {start:'12:00 ',end:"13:00",id:4},
    {start:'13:00 ',end:"14:00",id:5},
    {start:'14:00 ',end:"15:00",id:6},
    {start:'15:00 ',end:"16:00",id:7},
    {start:'16:00 ',end:"17:00",id:8},
    {start:'17:00 ',end:"18:00",id:9},
  ]
  const renderExtraFooterValue = () => {
    return (
      <div className="time-picker-select" style={{display:selectType?'block':'none'}} onMouseLeave={timeSelectMouerLeave}>
          {
            timeSelectData.map(item => (
            <div key={item.id} onClick={()=>{
              setSelectTimeValue(item.start)
              setSelectType(false)
              clickType=='Pick-up'?SetPickUp(item.start):''
            }}>
              {item.start} - {item.end}
            </div>
            ))
          }
      </div>
    )
  }
  const locationForm = () => {
    return (
      <div className="location-form" onMouseLeave={()=>{
        setLocationFormType(false)
      }}>
        <div>Lylohaus - 300 Sin Ming Rd, Singapore 575626</div>
        <div className="location-form-content">
          <div>
              Deliver vehicle to my location*
          </div>
          <div>
          <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              layout="horizontal"
            >
              <Form.Item>
                <Input style={{height:'54px'}} placeholder='Postal code'/>
              </Form.Item>
              <Form.Item>
                <Input style={{height:'54px'}} placeholder='Address line 1'/>
              </Form.Item>
              <Form.Item>
                <Input style={{height:'54px'}} placeholder='Address line 2 - optional'/>
              </Form.Item>
              <Form.Item>
                <Input style={{height:'54px'}} placeholder='Remarks'/>
              </Form.Item>
              <Form.Item>
                <div>
                *One way trip S$40.00, round trip S$65.00
                </div>
              </Form.Item>                       
              <Form.Item label="">
                <div  style={{position:'relative',height:'40px'}}>
                  <Button className="submit-button" disabled ={true}>Apply</Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
  const popconfirm = () => {
    return (
      <div className="popconfirm" 
      >
          Rental of less than 24 hours will be charged as a full day.
        <div className="triangle"></div>
      </div>
    )
  }
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    if(!searchContentType){
      setRightOneValue('46%')
      SetsearchContentType(true)
      setRightOneTitle('Pick-up')
    }else{
      setRightOneValue('100%')
      SetsearchContentType(false)     
      setRightOneTitle('Pick-up & drop-off location')
    }
  };
  const timePickerClick = (value:any) => {
    if(document.body.clientWidth>950){
      setSelectType(true)
      SetClickType(value)
    }else{
      setPickerMobileMaxTimeType(true)
    }
  }
  const buttonClick= ()=>{
    // childData({name:"我是zzz"})
  }
  const pickerMobileMaxTime = ()=>{
    return (
      <div className="picker-mobile-max-time">
          <div className="picker-mobile-max-time-header">
             Select pickup time
             <div className="close-div" onClick={()=>{
              setPickerMobileMaxTimeType(false)
             }}>
               <CloseOutlined />
             </div>
          </div>
          <div className="picker-mobile-max-time-content">
                {
                  timeSelectData.map(item => (
                  <div key={item.id} className="mobile-time-select" onClick={()=>{
                    setSelectTimeValue(item.start)
                    setSelectType(false)
                    clickType=='Pick-up'?SetPickUp(item.start):''
                  }}>
                    {item.start} - {item.end}
                  </div>
                  ))
                }
          </div>
          <div className="picker-mobile-max-time-button-box">
              <div className="picker-mobile-max-time-button" onClick={buttonClick}>
                Apply
              </div>
          </div>
      </div>
    )
}
const pickerMobileMaxForm = ()=>{
  return (
    <div className="picker-mobile-max-time">
        <div className="picker-mobile-max-time-header">
           Lylohaus - 300 Sin Ming Rd, Singapore 575626
           <div className="close-div" onClick={()=>{
            setPickerMobileMaxFormType(false)
           }}>
             <CloseOutlined />
           </div>
        </div>
        <div className="picker-mobile-max-form-content">
                  <Form
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 24 }}
                    layout="horizontal"
                  >
                    <Form.Item>
                      <Input style={{height:'54px'}} placeholder='Postal code'/>
                    </Form.Item>
                    <Form.Item>
                      <Input style={{height:'54px'}} placeholder='Address line 1'/>
                    </Form.Item>
                    <Form.Item>
                      <Input style={{height:'54px'}} placeholder='Address line 2 - optional'/>
                    </Form.Item>
                    <Form.Item>
                      <Input style={{height:'54px'}} placeholder='Remarks'/>
                    </Form.Item>
                    <Form.Item>
                      <div>
                      *One way trip S$40.00, round trip S$65.00
                      </div>
                    </Form.Item>                       
                    <Form.Item label="">
                      <div className="picker-mobile-max-form-button-box">
                        <Button className="picker-mobile-max-form-button" onClick={()=>{
                          setPickerMobileMaxFormType(false)
                        }}>Apply</Button>
                      </div>
                    </Form.Item>
                  </Form>
        </div>
    </div>
  )
}
  const rightTwoData = () => {
    return (
      <div className="search-content-right-one" style={{width:rightTwoValue}}>
        <div>drop-off location</div>
        <div onClick={()=>{
            if(document.body.clientWidth>950){
              setLocationFormType(true)
            }else{
              setPickerMobileMaxFormType(true)
           }
        }}>
          Lylohaus - 300 Sin Ming Rd, Singapore 575626
        </div>
      </div>
    )
  }
    return (
      <div className='new-search-box'>
        <div className="search-title">IntrinsicAttributes
            Rent with us
        </div>
        <div className="search-content">
             <div className="search-content-left">
                <div>
                  <div>
                    <div>Pick-up date</div>
                    <div>
                    <NewDatePicker childData={testFc}></NewDatePicker>
                      <div className="line-div"></div>
                      <div className="time-picker" onClick={()=>timePickerClick('Pick-up')}>
                        <span>{pickUp}</span>
                        <DownOutlined/>
                      </div>
                    </div>
                    {clickType=='Pick-up'&&renderExtraFooterValue()}
                  </div>
                  <div>
                    <div>Drop-off date</div>
                    <div>
                      <NewDatePicker  childData={testFc}></NewDatePicker>
                      <div className="line-div"></div>
                      <div className="time-picker" onClick={()=>timePickerClick('Drop-off')}>
                        <span>{pickUp}</span>
                        <DownOutlined/>
                      </div>
                    </div>
                    {clickType=='Drop-off'&&renderExtraFooterValue()}
                  </div>
                </div>
                <div className="search-content-left-footer">
                  <InfoCircleOutlined onClick={()=>{
                    setPopconfirmTyoe(popconfirmTyoe ? false:true)
                  }}/>
                  <div>Duration: 1 day</div>
                  {popconfirmTyoe&&popconfirm()}
                </div>
             </div>
             <div className="search-content-right">
                <div>
                  <div className="search-content-right-one" style={{width:rightOneValue,marginRight:'12px'}}>
                    <div>{rightOneTitle}</div>
                    <div onClick={()=>{
                        if(document.body.clientWidth>950){
                          setLocationFormType(true)
                           console.log("1")
                        }else{
                          setPickerMobileMaxFormType(true)
                           console.log('2')
                         }
                    }}>
                      Lylohaus - 300 Sin Ming Rd, Singapore 575626
                    </div>
                    {locationFormType&&locationForm()}
                  </div>
                  {searchContentType&&rightTwoData()}
                </div>
                <div className='search-content-right-footer'>
                  <Checkbox onChange={onChangeCheckbox}></Checkbox>
                  <div>
                    Return car to a different location
                  </div>
                </div>
             </div>
        </div>
        {pickerMobileMaxTimeType&&pickerMobileMaxTime()}
        {pickerMobileMaxFormType&&pickerMobileMaxForm()}
      </div>
    );
  };
  
  export default NewSearch;