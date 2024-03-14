import { Flex } from 'antd'
import React from 'react'

export interface AddressTimeData{
  type:string
  address:string
  time:string
}

export const AddressTimeInfo:React.FC<AddressTimeData> = ({type,address,time}) => {

  return (
    <Flex vertical gap={4}>
      <div className='booking-info-time-lbl'>{type} - <span>{time}</span></div>
      <div className='booking-info-address-lbl'>{address}</div>
    </Flex>
  )
}
