import "./styles.scss";
import { Tabs, Form, Input, DatePicker, Select } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import UploadCustom from "@/bases/components/uploadCustom";
import DriverInfoForm from "@/bases/components/driverInfoForm";
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
    <div className="enterDriverInfo-div">
      <div className="left-box">
        <div className="left-box-title">
          Driver Info
        </div>
        <DriverInfoForm></DriverInfoForm>
      </div>
    </div>
  );
};

export default EnterDriverInfo;
