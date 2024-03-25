import React from 'react'
import { Flex, Image, Button } from "antd";
import PaySuccessTop from "@/bases/assets/imgs/pay_success_top.svg"
import ChencCircle from "@/bases/assets/imgs/check_circle.svg"

export interface BookingData{
  orderData:any,
  onPrintPdf?:any
  loading?:boolean
}

export const BookingStatus:React.FC<BookingData> =({onPrintPdf,loading}) => {
  
  return (
    <Flex 
      align='center'
      justify='center'
      gap={16}
      className='booking-result booking-result-card'>
        <Image
          width={233}
          height={133}
          preview={false}
          src={PaySuccessTop}
        />
        <Image width={32}
          height={32}
          src={ChencCircle}
        />
        <div>
          <p className='booking-result-status'>Booking Confirmed!</p>
          <Button loading={loading} onClick={onPrintPdf} shape='round' className='booking-result-print-btn'>Print booking</Button>
        </div>

    </Flex>
  )
}
