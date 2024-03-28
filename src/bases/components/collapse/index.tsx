import { Collapse } from "antd";
import { ReactNode, useState } from "react";
import Icon from "../icon";
import "./index.scss";

const CustomizedCollapse = ({
  children,
  header,
  collapsedHeader,
  style,
  collapsed,
  onChange,
}: {
  children: ReactNode;
  header: ReactNode;
  collapsed?: boolean;
  collapsedHeader?: ReactNode;
  style?: React.CSSProperties;
  onChange?: () => void;
}) => {
  const [isCollasped, setIsCollasped] = useState(collapsed? collapsed : false)
  const onCollapseChange = (key: string | string[])=> {
    setIsCollasped(key != '1')
    onChange?.()
  }
  const reusltHeader = isCollasped ? (
    collapsedHeader ? collapsedHeader : header
  ) : (
    header
  )
  return (
    <Collapse
      style={style}
      accordion
      ghost
      expandIconPosition="end"
      defaultActiveKey={isCollasped ? [] : "1"}
      expandIcon={({ isActive }) =>
        isActive ? (
          <Icon source="collaps_up_arrow" className="collaps_arrow" style={{ marginTop: '15px' }}/>
        ) : (
          <Icon source="collaps_down_arrow" className="collaps_arrow" style={{ marginTop: '15px' }}/>
        )
      }
      className="customized-collapse"
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
export default CustomizedCollapse;
