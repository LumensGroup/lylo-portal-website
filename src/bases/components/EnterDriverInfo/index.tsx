import "./styles.scss";
import { Tabs, Form, Input, DatePicker, Select } from "antd";
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
      label: 'Tab 3',
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
          <Tabs defaultActiveKey="1"  onChange={onChange} >
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
                </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EnterDriverInfo;
