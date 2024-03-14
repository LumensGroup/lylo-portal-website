import React from 'react'
import { Divider, Flex } from 'antd'
import './index.scss'
import { PickupRetrunInfo } from './PickupRetrunInfo'
import ShortenCollectionTime from './ShortenCollectionTime'

export default function BookingInfo() {
  return (
    <Flex vertical className='booking-result-card booking-info' gap={16}>
      <h4 className=''>Booking info</h4>
      <Flex align='center'>
        <div className='booking-info-name'>Honda Fit</div>
        <Divider type='vertical' className='booking-info-vertical-divider' orientationMargin={10}/>
        <div className='booking-info-orderid'>Order ID. <span>1234A</span></div>
      </Flex>
      <PickupRetrunInfo />
      <ShortenCollectionTime />
    </Flex>
  )
}
