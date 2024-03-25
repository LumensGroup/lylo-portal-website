import React from 'react'

export interface DriverItemInfo{
  name:string
  phone:string
  email:string
}

const DriverItem: React.FC<DriverItemInfo> = ({name,phone,email}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
    </div>
  )
}

export default DriverItem;


