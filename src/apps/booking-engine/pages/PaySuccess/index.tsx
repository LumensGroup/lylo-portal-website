import React, { useEffect, useState } from 'react'
import {BookingStatus} from './components/BookingStatus'
import './index.scss'
import {BookingInfo} from './components/BookingInfo'
import {DriverInfo} from './components/DriverInfo'
import {PriceSummary} from './components/PriceSummary'
import ImportantInfo from './components/ImportantInfo'
import { Empty, Flex, Spin, notification } from 'antd'
import { PopupAddons } from '@/bases/components/AddonsPopup/PopupAddons'
import request from '@/bases/request'
import { useNavigate } from 'react-router-dom';


export default function PaySuccess() {

  const [orderData, setOrderData] = useState<any>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  
  
  const getOrderInfo = ()=>{
    setIsLoading(true);
    request
      .get("/order/get?id=4")
      .then((res) => {
        
        setOrderData(res);
        setIsLoading(false);
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
        setIsLoading(false);
      });
  }


  useEffect(() => {
    getOrderInfo();
  }, [])
  

  return (
    isLoading ? <Spin style={{ width: "100%" }} />
    :
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
    : <Empty />
  )
}
