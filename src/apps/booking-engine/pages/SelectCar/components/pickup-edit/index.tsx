import Icon from "@/bases/components/icon";
import { Flex } from "antd";
import BreakLine from "../breakline";
import "./styles.scss";
const PickUpEdit = ({ handleClick }: any) => {
  const LocationContent = ({
    title,
    without,
  }: {
    title: string;
    without?: boolean;
  }) => {
    return (
      <Flex>
        <Flex vertical className="flex-item">
          <div className="mobile-pickup__edit__title">{title}</div>
          <div className="mobile-pickup__edit__location">
            Lylohaus - 300 Sin
          </div>
          <div className="mobile-pickup__edit__time">14 Jan,09:00 - 10:00</div>
        </Flex>
        {!without && <Icon source="edit" />}
      </Flex>
    );
  };
  return (
    <Flex className="mobile-pickup__edit" onClick={handleClick}>
      <LocationContent title="Pickup" without={true} />
      <BreakLine height="37px" />
      <LocationContent title="Return" />
    </Flex>
  );
};

export default PickUpEdit;
