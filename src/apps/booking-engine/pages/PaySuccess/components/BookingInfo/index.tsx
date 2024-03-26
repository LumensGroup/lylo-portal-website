import React from 'react'
import { Divider, Flex } from 'antd'
import './index.scss'
import { PickupRetrunInfo } from './PickupRetrunInfo'
import ShortenCollectionTime from './ShortenCollectionTime'
import { BookingData } from '../BookingStatus'



export const BookingInfo:React.FC<BookingData> = ({orderData})=> {
  const carModel = orderData['details'][0]['item_detail']['name'];
  const orderId = orderData['id'];  
  return (
    <Flex vertical className='booking-result-card booking-info' gap={16}>
      <h4 className=''>Booking info</h4>
      <Flex align='center'>
        <div className='booking-info-name'>{carModel}</div>
        <Divider type='vertical' className='booking-info-vertical-divider' orientationMargin={10}/>
        <div className='booking-info-orderid'>Order ID. <span>{orderId}</span></div>
      </Flex>
      <PickupRetrunInfo orderData={orderData}/>
      <ShortenCollectionTime />
    </Flex>
  )
}
