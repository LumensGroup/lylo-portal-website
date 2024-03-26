import React from 'react'
import { Flex } from 'antd'
import ImportantInfoItem from './ImportantInfoItem'
import ImportantInfoContactItem from './ImportantInfoContactItem'

export default function ImportantInfo() {
  const importantInfos = [
    {icon:'attach_money.svg',title:'Security deposit',desc:'A refundable min. S$ 1,000 deposit is required at vehicle collection, payable through PayNow or credit card.'},
    {icon:'fuel_repair.svg',title:'Fuel Return Policy',desc:'Kindly return the vehicle with the same fuel level as when you picked it up to avoid extra charges'},
    {icon:'cancellation_refund.svg',title:'Cancellation & Refund Policy',desc:'Free cancellation 72 hours before pickup time. Amendments or cancellation within 72 hours of pickup time will cause some penalty. '},
  ]

  const contactInfos = [
    // {icon:'',title:'Vehicle Breakdown24/7 Support',desc:''},
    // {icon:'hotline_icon.svg',title:'Customer Services',desc:''},
    {icon:'car_vehicle_breakdown.svg',title:'Vehicle Breakdown\n24/7 Support',desc:'+65 8828 9159'},
    {icon:'phone24h_call.svg',title:'Accident 24/7 Support',desc:'+65 8778 1765'},
    {icon:'hotline_icon.svg',title:'Customer Services',desc:'+65 9880 5924',
    details:true}
  ]

  return (
    <Flex vertical className='booking-result-card important-info' gap={24}>
      <h4>Important info</h4>
      <Flex vertical gap={24}>
        {
          importantInfos.map(e=>(
            <ImportantInfoItem {...e} key={e.desc}/>
          ))
        }
      </Flex>
      <div>Please refer to <a href=' https://lylo.sg/terms-and-conditions'>Terms & Condition</a> for more details</div>
      <h4>Need help?</h4>
      <Flex justify='space-between' className='pay-confirm-contact-container'>
        {
          contactInfos.map((e,index)=>(
            <ImportantInfoContactItem {...e} key={index}/>
          ))
        }
      </Flex>
    </Flex>
  )
}
