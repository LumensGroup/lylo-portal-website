import "./styles.scss";
import { useState } from "react";
import { NewDatePicker } from "../index";
import { DownOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
} from 'antd';


const NewSearch: React.FC = () => {
  const [clickType, SetClickType] = useState<any>('false');
  const [pickUp, SetPickUp] = useState<any>('09:00');
  const [selectType, setSelectType] = useState<any>(true);
  const [selectTimeValue, setSelectTimeValue] = useState<any>('');
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
  const timePickerClick = (value:any) => {
    setSelectType(true)
    SetClickType(value)
  }
    return (
      <div className='new-search-box'>
        <div className="search-title">
            Rent with us
        </div>
        <div className="saerch-content">
             <div className="saerch-content-left">
                <div>
                  <div>Pick-up date</div>
                  <div>
                    <NewDatePicker></NewDatePicker>
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
                    <NewDatePicker></NewDatePicker>
                    <div className="line-div"></div>
                    <div className="time-picker" onClick={()=>timePickerClick('Drop-off')}>
                      <span>{pickUp}</span>
                      <DownOutlined/>
                    </div>
                  </div>
                  {clickType=='Drop-off'&&renderExtraFooterValue()}
                </div>
             </div>
             <div className="saerch-content-right">
                <div className="saerch-content-right-one">
                  <div>Pick-up & drop-off location</div>
                  <div>
                     Lylohaus - 300 Sin Ming Rd, Singapore 575626
                  </div>
                </div>
                <div className="location-form">
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
                             <Button className="submit-button">Button</Button>
                          </div>
                        </Form.Item>
                      </Form>
                     </div>
                  </div>
                </div>
             </div>
        </div>
      </div>
    );
  };
  
  export default NewSearch;