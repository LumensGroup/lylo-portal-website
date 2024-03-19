import { Flex } from "antd";
import "./styles.scss";

const AddonsLayout = ({
  LeftChildren,
  RightChildren,
}: {
  LeftChildren: React.ReactNode;
  RightChildren: React.ReactNode;
}) => {
  return (
    <div className="addons__layout">
      <Flex className="addons__layout__content">
        <div className="addons__layout__leftArea">{LeftChildren}</div>
        <div className="addons__layout__rightArea">{RightChildren}</div>
      </Flex>
    </div>
  );
};

export default AddonsLayout;
