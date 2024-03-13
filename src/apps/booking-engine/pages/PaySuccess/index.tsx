import React from 'react'
import BookingStatus from './components/BookingStatus'
import './index.scss'
import BookingInfo from './components/BookingInfo'
import DriverInfo from './components/DriverInfo'
import PriceSummary from './components/PriceSummary'
import ImportantInfo from './components/ImportantInfo'
import { Flex } from 'antd'

export default function PaySuccess() {
  return (
    <Flex vertical gap={10} className='booking-result-index'>
      <BookingStatus />
      <BookingInfo />
      <DriverInfo />
      <PriceSummary />
      <ImportantInfo />
    </Flex>
  )
}
