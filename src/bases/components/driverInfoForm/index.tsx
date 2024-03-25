import "./styles.scss";
import { Tabs, Form, Input, DatePicker, Select, Modal } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import UploadCustom from "@/bases/components/uploadCustom";
import { useState } from "react";
import type { TabsProps } from 'antd';

type DriverInfoFormProps = {
  addDriver?: any;
  index?:any,
  deletDriver?: any;
};
const DriverInfoForm :React.FC<DriverInfoFormProps> = ({
  addDriver,
  index,
  deletDriver
})  => {

  const {TabPane} = Tabs
  const [open, setOpen] = useState(false);
  const onChange = (key: string) => {
    console.log(key);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const addClick = () =>{
    addDriver(true)
  }
  const handleOk = () => {
    deletDriver(true,index)
    setOpen(false);
  };
  const deletClick = () =>{
    setOpen(true);
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: '',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 31',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div className="enterDriverInfo-box">
      <Modal
        title="Prompt message"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Whether to delete the driver?</p>
      </Modal>
      <div>
            <Tabs defaultActiveKey="2"  onChange={onChange} >
              <TabPane tab='Singpass' key='1'>
              <Form
                    name="basic"
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <div className="form-row">
                      <div className="form-border-box form-row-disable">
                          <div>
                            Full Name
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box form-row-disable">
                          <div>
                            NRIC / FIN
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                            <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-border-box form-row-disable">
                          <div>
                            Date of Birth
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}} disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box form-row-disable">
                          <div>
                            Nationality / Citizenship
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                            <Input style={{height:'22px'}} disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-border-box form-row-disable">
                          <div>
                            Pass Type
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box form-row-disable">
                          <div>
                            Pass Expiry Date
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                            <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Contact
                    </div>
                    <div className="form-row">
                        <div   className="phone-box form-row-disable">
                            <div className="form-border-boxMini" style={{marginRight:'0px'}}>
                              <div>
                                Country Code
                              </div>
                              <Form.Item name="adadxsdsd" label="" >
                                <Select
                                  defaultValue="1"
                                  disabled={true}
                                  style={{height:'22px',width:'100%'}}
                                  options={[
                                    { value: '1', label: '+86' },
                                    { value: '2', label: '+55' },
                                  ]}
                                />
                              </Form.Item> 
                            </div>
                            <div className="form-border-boxPhone">

                            </div>
                        </div>
                        <div className="form-border-box ">
                          <div>
                            Email Address 
                          </div>
                          <div>
                            <Form.Item name="dda21dwe" label="" >
                                <Input style={{height:'22px'}}/>
                            </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Address in Singapore
                    </div>
                    <div className="form-row">
                      <div className="form-border-box form-row-disable" style={{width:'100%'}}>
                          <div>
                            Registered Address
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}} disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Driving License Details
                    </div>
                    <div className="form-row">
                      <div className="form-border-box form-row-disable">
                          <div>
                            License Validity
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box form-row-disable">
                          <div>
                            License Expiry Date
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                            <Input style={{height:'22px'}} defaultValue='5656565' disabled={true}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>       
                    <div className="form-row" style={{width:'100%'}}>
                      <div className="form-row-submitBox">
                          <div className="submitBox-delete" onClick={deletClick}>
                             Delete Driver
                          </div>  
                          <div className="submitBox-submit"                             
                            onClick={addClick}>
                            <img
                              height={24}
                              width={24}
                              style={{marginRight:'8px'}}
                              src={require("@/bases/assets/imgs/add.png")}
                            />
                              Add additional driver
                          </div>  
                      </div>
                    </div>
                  </Form>
              </TabPane>
              <TabPane tab='Manual Form' key='2'>
                  <Form
                    name="basic"
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <div className="form-row">
                      <div className="form-border-box">
                          <div>
                            First Name
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box">
                          <div>
                            Last Name 
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                            <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-border-box">
                          <div>
                            NRIC / FIN / Passport
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box">
                          <div>
                            Date of Birth 
                          </div>
                          <div>
                          <Form.Item name="note" label="">
                            <div>
                              <DatePicker/>
                            </div>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-border-box">
                          <div>
                            NRIC / FIN / Passport
                          </div>
                          <div>
                          <Form.Item name="add" label="" >
                          <Select
                            defaultValue="lucy"
                            style={{height:'22px',width:'100%'}}
                            options={[
                              { value: 'jack', label: 'Jack' },
                              { value: 'lucy', label: 'Lucy' },
                              { value: 'Yiminghe', label: 'yiminghe' },
                              { value: 'disabled', label: 'Disabled'},
                            ]}
                          />
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Contact
                    </div>
                    <div className="form-row">
                        <div   className="phone-box">
                            <div className="form-border-boxMini" style={{marginRight:'0px'}}>
                              <div>
                                Country Code
                              </div>
                              <Form.Item name="adadxsdsd" label="" >
                                <Select
                                  defaultValue="1"
                                  style={{height:'22px',width:'100%'}}
                                  options={[
                                    { value: '1', label: '+86' },
                                    { value: '2', label: '+55' },
                                  ]}
                                />
                              </Form.Item> 
                            </div>
                            <div className="form-border-boxPhone">

                            </div>
                        </div>
                        <div className="form-border-box">
                          <div>
                            Email Address 
                          </div>
                          <div>
                            <Form.Item name="dda21dwe" label="" >
                                <Input style={{height:'22px'}}/>
                            </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Address in Singapore
                    </div>
                    <div className="form-row">
                        <div className="form-border-boxMax">
                          <div>
                            Address Line 1
                          </div>
                          <div>
                            <Form.Item name="dda12321dwe" label="" >
                              <Input style={{height:'22px'}}/>
                            </Form.Item>
                          </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-border-boxMax">
                          <div>
                            Address Line 2
                          </div>
                          <div>
                            <Form.Item name="dda1255321dwe" label="" >
                              <Input style={{height:'22px'}}/>
                            </Form.Item>
                          </div>
                        </div>
                    </div>
                    <div className="form-border-box">
                          <div>
                            Postal Code 
                          </div>
                          <div>
                            <Form.Item name="note" label="">
                              <Input style={{height:'22px'}}/>
                            </Form.Item>
                          </div>
                    </div>
                    <div className="form-title">
                      Driving License Details
                    </div>
                    <div className="form-row">
                      <div className="form-border-box">
                          <div>
                            Driving License No
                            <InfoCircleOutlined style={{marginLeft:'10px'}}/>
                          </div>
                          <div>
                          <Form.Item name="note" label="" >
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box">
                          <div>
                            License Effective Date 
                            <InfoCircleOutlined style={{marginLeft:'10px'}}/>
                          </div>
                          <div>
                          <Form.Item name="note" label="">
                            <div>
                              <DatePicker/>
                            </div>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-border-box">
                          <div>
                            Country of Issue
                          </div>
                          <div>
                          <Form.Item name="5558dadad" label="" >
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                    </div>
                    <div className="form-title">
                      Upload your Documents
                    </div>
                    <UploadCustom titleName='NRIC / FIN (front & back) or Passport (data page)'></UploadCustom>
                    <div className="form-row" style={{width:'100%'}}>
                      <div className="form-row-submitBox">
                          <div className="submitBox-delete" onClick={deletClick}>
                             Delete Driver
                          </div>  
                          <div className="submitBox-submit" onClick={addClick}>
                            <img
                              height={24}
                              width={24}
                              style={{marginRight:'8px'}}
                              src={require("@/bases/assets/imgs/add.png")}
                            />
                              Add additional driver
                          </div>  
                      </div>
                    </div>
                  </Form>
              </TabPane>
            </Tabs>
          </div>
    </div>
  );
};

export default DriverInfoForm;
