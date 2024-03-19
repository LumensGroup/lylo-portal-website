import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Steps } from "antd";
import "./styles.scss";
const description = "This is a description.";
const PickUp = () => {
  const DescComponent = ({ desc }: { desc: string }) => {
    return <div className="desc">{desc}</div>;
  };
  const renderTitle = (title: string) => {
    return <div className="title">{title}</div>;
  };

  return (
    <CustomizedCollapse header={<h1>Pickup & return</h1>}>
      <Steps
        className="pickup_steps"
        direction="vertical"
        current={1}
        items={[
          {
            title: renderTitle("Pickup - 14 Jan, 09:00 - 10:00"),
            description: (
              <DescComponent desc="77 Robinson Rd #02-02,Singapore 123077" />
            ),
            icon: <Icon source="adjust" className="step-icon" />,
          },
          {
            title: renderTitle("Pickup - 14 Jan, 09:00 - 10:00"),
            description: (
              <DescComponent desc="77 Robinson Rd #02-02,Singapore 123077" />
            ),
            icon: <Icon source="step_gray" className="step-icon" />,
          },
        ]}
      />
    </CustomizedCollapse>
  );
};

export default PickUp;
