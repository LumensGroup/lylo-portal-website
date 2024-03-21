import Icon from "@/bases/components/icon";
import { Flex } from "antd";
import BreakLine from "../breakline";
import "./styles.scss";
const PickUpEdit = () => {
  const LocationContent = ({
    title,
    handleClick,
  }: {
    title: string;
    handleClick: () => void;
  }) => {
    return (
      <Flex onClick={handleClick}>
        <Flex vertical className="flex-item">
          <div className="mobile-pickup__edit__title">{title}</div>
          <div className="mobile-pickup__edit__location">
            Lylohaus - 300 Sin
          </div>
          <div className="mobile-pickup__edit__time">14 Jan,09:00 - 10:00</div>
        </Flex>
        <Icon source="edit" />
      </Flex>
    );
  };
  return (
    <Flex className="mobile-pickup__edit">
      <LocationContent
        title="Pickup"
        handleClick={() => {
          console.log(1);
        }}
      />
      <BreakLine height="37px" />
      <LocationContent
        title="Return"
        handleClick={() => {
          console.log(1);
        }}
      />
    </Flex>
  );
};

export default PickUpEdit;
