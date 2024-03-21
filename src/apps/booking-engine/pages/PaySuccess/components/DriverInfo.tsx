import { Flex } from 'antd'
import React from 'react'
import DriverItem,{DriverItemInfo} from './DriverItem'

export default function DriverInfo() {
  const additionalDrivers = [
    {name:'Toh Si Ling',phone:'1234 8349',email:'xxx@xxx.com'},
    {name:'Toh Si Ling',phone:'1234 8349',email:'xxx@xxx.com'},
    {name:'Toh Si Ling',phone:'1234 8349',email:'xxx@xxx.com'},
  ];
  const mainDriver:DriverItemInfo = {name:'Toh Si Ling',phone:'1234 8349',email:'xxx@xxx.com'};

  return (
    <Flex vertical className='booking-result-card driver-info'>
      <h4>Driver Info</h4>
      <div className='driver-title'>Main Driver</div>
      <DriverItem {...mainDriver}/>
      <div className='driver-title'>Additional Driver(s)</div>
      <Flex vertical gap={10}>
      {
        additionalDrivers.map(e=>(<DriverItem {...e} key={e.email}/>))
      }
      </Flex>
      
    </Flex>
  )
}
