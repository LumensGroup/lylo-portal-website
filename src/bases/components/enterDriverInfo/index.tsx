import "./styles.scss";
import { Tabs, Form, Input, DatePicker, Select } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import UploadCustom from "@/bases/components/uploadCustom";
import type { TabsProps } from 'antd';

const EnterDriverInfo = () => {

  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key);
  };

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
      <div className="left-box">
        <div className="left-box-title">
          Driver Info
        </div>
        <div>
          <Tabs defaultActiveKey="2"  onChange={onChange} >
            <TabPane tab='Singpass' key='1'>1111</TabPane>
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
                </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EnterDriverInfo;
