import { Collapse } from "antd";
import { ReactNode } from "react";
import Icon from "../icon";
import "./index.scss";

const CustomizedCollapse = ({
  children,
  header,
  style,
  onChange,
}: {
  children: ReactNode;
  header: ReactNode;
  style?: React.CSSProperties;
  onChange?: () => void;
}) => {
  return (
    <Collapse
      style={style}
      accordion
      ghost
      expandIconPosition="end"
      defaultActiveKey="1"
      expandIcon={({ isActive }) =>
        isActive ? (
          <Icon source="collaps_down_arrow" className="collaps_arrow" />
        ) : (
          <Icon source="collaps_up_arrow" className="collaps_arrow" />
        )
      }
      className="customized-collapse"
      onChange={onChange}
    >
      <Collapse.Panel header={header} key="1">
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};
export default CustomizedCollapse;
