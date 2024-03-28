import { Collapse } from "antd";
import { ReactNode, useCallback, useState } from "react";
import Icon from "../icon";
import "./index.scss";

const CustomizedCollapseHeaderTop = ({
  children,
  header,
  collapsedHeader,
  style,
  onChange,
}: {
  children: ReactNode;
  header: ReactNode;
  collapsedHeader?: ReactNode;
  style?: React.CSSProperties;
  onChange?: () => void;
}) => {
  const [collasped, setCollasped] = useState(true)
  const onCollapseChange = (key: string | string[])=> {
    setCollasped(key == '1')
    onChange?.()
  }
  const reusltHeader = collasped ? (
    collapsedHeader ? collapsedHeader: header
  ) : (
    header
  )
  console.log(`collasped: ${collasped}`)
  return (
    <Collapse
      style={style}
      accordion
      ghost
      expandIconPosition="end"
      defaultActiveKey="1"
      expandIcon={({ isActive }) =>
        isActive ? (
          <Icon source="collaps_down_arrow" className="collaps_arrow" style={{ marginTop: '15px' }}/>
        ) : (
          <Icon source="collaps_up_arrow" className="collaps_arrow" style={{ marginTop: '15px' }}/>
        )
      }
      className="customized-collapse-header-top"
      onChange={onCollapseChange}
    >
  
      <Collapse.Panel
        header ={reusltHeader}
        key="1">
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};
export default CustomizedCollapseHeaderTop;
