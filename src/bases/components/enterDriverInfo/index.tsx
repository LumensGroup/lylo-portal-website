import "./styles.scss";
import { Tabs, Modal, Collapse } from "antd";
import DriverInfoForm from "@/bases/components/driverInfoForm";
import { useState } from "react";
import type { TabsProps } from 'antd';

const EnterDriverInfo = () => {

  const {TabPane} = Tabs
  const [userList, setUserList] = useState<any>([{}]);
  const [open, setOpen] = useState(false)
  const onChange = (key: string) => {
    console.log(key);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
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
  const addDriver =(type:any) => {
    console.log(type)
    console.log('新增司机')
    const driverData = [...userList]
    driverData.push({})
    setUserList(driverData)
  }
  const deletDriver =(type:any,index:any) => {
    console.log(type)
    console.log('删除司机')
    console.log(index)
    const driverData = [...userList]
    if(driverData.length>1){
      driverData.splice(index,1)
      setUserList(driverData)
    }else{
      setOpen(true)
    }
  }
  const getUserList = (data:any) =>{
    return data.map((item:any,index:any)=>{
      return (
        <Collapse.Panel header={<>Driver #{(index+1)} -</>}  key={index}>
          <DriverInfoForm addDriver={addDriver} index={index} key={index} deletDriver={deletDriver}></DriverInfoForm>
        </Collapse.Panel>      
      )
    })
  }
  return (
    <div className="enterDriverInfo-div">
      <Modal
        title="Prompt message"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Cannot be deleted!</p>
      </Modal>
      <div className="left-box">
        <div className="left-box-title">
          Driver Info
        </div>
        <Collapse
        accordion
        ghost
        expandIconPosition="end"
        defaultActiveKey="1"
        >
          {getUserList(userList)}
        </Collapse>    
        {/* <DriverInfoForm addDriver={addDriver}></DriverInfoForm> */}
      </div>
    </div>
  );
};

export default EnterDriverInfo;
