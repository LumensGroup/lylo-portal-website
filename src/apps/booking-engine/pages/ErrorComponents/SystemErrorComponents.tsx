import { Empty, Flex } from 'antd'
import React, { ReactNode } from 'react'
import SysErrImg from '../../../../bases/assets/imgs/sys_err_img.svg'
import './index.scss'

export interface ErrorInfoData{
  errorMsg:string
  errorDetailInfo:string
  children?:ReactNode
}

export const SystemErrorComponents:React.FC<ErrorInfoData> = (props) => {
  return (
    <Empty
      image={SysErrImg}
      imageStyle={{height:337}}
      description={null}
      className='error-component'
    >
      <Flex vertical align='center'>
      <div className='error-msg' >{props.errorMsg}</div>
      <div className='error-detail-info'>{props.errorDetailInfo}</div>
      {props.children}
      </Flex>
      
    </Empty>
  )
}
