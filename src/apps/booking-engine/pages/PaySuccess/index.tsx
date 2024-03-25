import React, { useEffect, useState } from 'react'
import {BookingStatus} from './components/BookingStatus'
import './index.scss'
import {BookingInfo} from './components/BookingInfo'
import {DriverInfo} from './components/DriverInfo'
import {PriceSummary} from './components/PriceSummary'
import ImportantInfo from './components/ImportantInfo'
import { Flex, notification } from 'antd'
import { PopupAddons } from './PopupAddons'
import request from '@/bases/request'
import { useNavigate } from 'react-router-dom';


export default function PaySuccess() {

  const [orderData, setOrderData] = useState<any>();

  const navigate = useNavigate();
  
  
  const getOrderInfo = ()=>{
    request
      .get("/order/get?id=4")
      .then((res) => {
        setOrderData(res.data.data);
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  }


  useEffect(() => {
    getOrderInfo();
  }, [])
  

  return (
    orderData ? 
    <Flex vertical gap={10} className='booking-result-index'>
      <BookingStatus orderData={orderData}/>
      <BookingInfo orderData={orderData}/>
      <DriverInfo orderData={orderData}/>
      <PriceSummary orderData={orderData}/>
      <ImportantInfo />
      <PopupAddons />
      <div className='back-to-home-btn' onClick={()=>navigate('/')}>Back to Home</div>
    </Flex>

    : null
  )
}
