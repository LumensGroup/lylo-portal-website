import "./styles.scss";
import { Tabs, Form, Input, DatePicker, Select, Modal } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import UploadCustom from "@/bases/components/uploadCustom";
import { useState,useEffect } from "react";
import type { TabsProps } from 'antd';
import { object } from "prop-types";

type DriverInfoFormProps = {
  addDriver?: any,
  index?:any,
  deletDriver?: any,
  singpassType?: any,
  singpassClick?: any,
  singpassData?: any,
};
const DriverInfoForm :React.FC<DriverInfoFormProps> = ({
  addDriver,
  index,
  deletDriver,
  singpassType,
  singpassClick,
  singpassData,
})  => {
  const {TabPane} = Tabs
  const [open, setOpen] = useState(false);
  const [singpassForm] = Form.useForm();
  const onChange = (key: string) => {
    console.log(key);
  };
  const handleCancel = (value:any) => {
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
  const getForm = () =>{
    return (
            <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            form={singpassForm}
            style={{display:singpassType?'none':'block'}}
          >
            <div className="form-row">
              <div className="form-border-box form-row-disable">
                  <div>
                    Full Name
                  </div>
                  <div>
                  <Form.Item name="full_name" label="" >
                      <Input style={{height:'22px'}}  disabled={true}/>
                  </Form.Item>
                  </div>
              </div>
              <div className="form-border-box form-row-disable">
                  <div>
                    NRIC / FIN
                  </div>
                  <div>
                  <Form.Item name="nric" label="" >
                    <Input style={{height:'22px'}}  disabled={true}/>
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
                  <Form.Item name="dob" label="" >
                      <Input style={{height:'22px'}} disabled={true}/>
                  </Form.Item>
                  </div>
              </div>
              <div className="form-border-box form-row-disable">
                  <div>
                    Nationality / Citizenship
                  </div>
                  <div>
                  <Form.Item name="nationality" label="" >
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
                  <Form.Item name="passType" label="" >
                      <Input style={{height:'22px'}}  disabled={true}/>
                  </Form.Item>
                  </div>
              </div>
              <div className="form-border-box form-row-disable">
                  <div>
                    Pass Expiry Date
                  </div>
                  <div>
                  <Form.Item name="passExpiryDate" label="" >
                    <Input style={{height:'22px'}} disabled={true}/>
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
                      <Form.Item name="country_code" label="" >
                        <Select
                          style={{height:'22px',width:'100%'}}
                          options={countrycodeData}
                        />
                      </Form.Item> 
                    </div>
                    <div className="form-border-boxPhone">
                          <Form.Item name="phone_number" label="" >
                              <Input/>
                          </Form.Item>  
                    </div>
                </div>
                <div className="form-border-box ">
                  <div>
                    Email Address 
                  </div>
                  <div>
                    <Form.Item name="email" label="" >
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
                  <Form.Item name="address" label="" >
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
                  <Form.Item name="licenceValidity" label="" >
                      <Input style={{height:'22px'}}  disabled={true}/>
                  </Form.Item>
                  </div>
              </div>
              <div className="form-border-box form-row-disable">
                  <div>
                    License Expiry Date
                  </div>
                  <div>
                  <Form.Item name="licenseExpiryDate" label="" >
                    <Input style={{height:'22px'}}  disabled={true}/>
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
    )
  }
  const uploadValueChange = (value:any) =>{
    console.log(value)
    console.log("上传组件数据")
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
  const  cutBeforeChar = (str:any, charToFind:any) =>{
    const index = str.indexOf(charToFind);
    if (index !== -1) {
      return str.substring(0, index);
    }
    return str; // 如果字符未找到，返回原字符串
  }
  const countrycodeData = [
    {value: '65_SG', label: '+65' },
    {value: '60_MY', label: '+60' },
    {value: '86_CN', label: '+86' },
    {value: '62_ID', label: '+62' },
    {value: '84_VN', label: '+84' },
  ]
  useEffect(() => {
    console.log('singpassData变化')
    if(JSON.stringify(singpassData)!="{}"){
      const newdata = {...singpassData}
      newdata['country_code'] = cutBeforeChar(singpassData?.phone_number,'-')
      newdata['singpass']=newdata?.metadata?.singpass?JSON.parse(newdata?.metadata?.singpass):{}
      Object.assign(newdata,newdata.singpass)
      singpassForm.setFieldsValue(newdata)
    }
  }, [singpassData]);
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
            <Tabs defaultActiveKey="1"  onChange={onChange} >
              <TabPane tab='Singpass' key='1'>
              <div className="singpass-img" 
                style={{display:singpassType?'block':'none'}}
                onClick={()=>{
                  singpassClick(index)
                }}>
                    <img src={require("@/bases/assets/imgs/singpass.png")}/>
                </div>
                {getForm()}
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
                          <Form.Item name="first_name" label="" rules={[{ required: true, message: 'Please input your firstname!' }]}>
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box">
                          <div>
                            Last Name 
                          </div>
                          <div>
                          <Form.Item name="last_name" label="" 
                           rules={[{ required: true, message: 'Please input your lastname!' }]}
                          >
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
                          <Form.Item name="license_number" rules={[{ required: true, message: 'Please input your NRIC!' }]} >
                              <Input style={{height:'22px'}}/>
                          </Form.Item>
                          </div>
                      </div>
                      <div className="form-border-box">
                          <div>
                            Date of Birth 
                          </div>
                          <div>
                          <Form.Item name="dob" rules={[{ required: true, message: 'Please input your Date!' }]}>
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
                            Nationality / Citizenship
                          </div>
                          <div>
                          <Form.Item name="nationality" label="" rules={[{ required: true, message: 'Please input your nationality!' }]}>
                          <Select
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
                                  style={{height:'22px',width:'100%'}}
                                  options={countrycodeData}
                                />
                              </Form.Item> 
                            </div>
                            <div className="form-border-boxPhone">
                              <Form.Item name="phone_number" label="" rules={[{ required: true, message: 'Please input your phonenumber!' }]}>
                                  <Input/>
                              </Form.Item>                                  
                            </div>
                        </div>
                        <div className="form-border-box">
                          <div>
                            Email Address 
                          </div>
                          <div>
                            <Form.Item name="email" label=""   rules={[{ required: true, message: 'Please input your email!' }]}>
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
                            <Form.Item name="address_one" rules={[{ required: true, message: 'Please input your address!' }]}>
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
                            <Form.Item name="address_two" rules={[{ required: true, message: 'Please input your address!' }]}>
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
                    <UploadCustom titleName='NRIC / FIN (front & back) or Passport (data page)' valueChange={uploadValueChange}></UploadCustom>
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
