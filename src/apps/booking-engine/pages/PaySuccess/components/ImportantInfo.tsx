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
    {icon:'hotline_icon.svg',title:'Lylo hotline',desc:'+65 9880 5924'},
    {icon:'phone24h_call.svg',title:'24 hour Roadside Assistance',desc:'+65 8828 9159'}
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
      <Flex vertical gap={24}>
        {
          contactInfos.map(e=>(
            <ImportantInfoContactItem {...e} key={e.title}/>
          ))
        }
      </Flex>
    </Flex>
  )
}
