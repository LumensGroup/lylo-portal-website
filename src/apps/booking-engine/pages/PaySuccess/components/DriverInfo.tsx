import { Flex } from 'antd'
import React from 'react'
import DriverItem,{DriverItemInfo} from './DriverItem'
import { BookingData } from './BookingStatus';
import { JSX } from 'react/jsx-runtime';

export const DriverInfo:React.FC<BookingData> = ({orderData}) => {
  

  const additionalDrivers:[DriverItemInfo] = orderData['additional_drivers'].map((e: { [x: string]: any; })=>{
    return {name:e['full_name'],phone:e['phone_number'],email:e['email']};
  });

  const mainDriver:DriverItemInfo = {
    name:orderData['main_driver']['full_name'],
    phone:orderData['main_driver']['phone_number'],
    email:orderData['main_driver']['email']};

  return (
    <Flex vertical className='booking-result-card driver-info'>
      <h4>Driver Info</h4>
      <div className='driver-title'>Main Driver</div>
      <DriverItem {...mainDriver}/>
      <div className='driver-title'>Additional Driver(s)</div>
      <Flex vertical gap={10}>
      {
        additionalDrivers.map((e:DriverItemInfo,index)=>(<DriverItem {...e} key={index}/>))
      }
      </Flex>
      
    </Flex>
  )
}
