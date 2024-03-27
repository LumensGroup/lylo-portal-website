import { Flex, Image } from "antd";
import React from "react";
import { ImportantInfoData } from "./ImportantInfoItem";

const ImportantInfoContactItem: React.FC<ImportantInfoData> = ({
  title,
  desc,
  icon,
  details,
}) => {
  return (
    <div>
      <Flex gap={16}>
        <Image
          className="important-icon"
          preview={false}
          src={require(`@/bases/assets/imgs/${icon}`)}
        />
        <Flex vertical gap={4}>
          <div className="important-title">{title}</div>
          {details && (
            <div className="important-details">
              <div>Mon to Fri: <span className="time-range">9.00 AM - 8.00 PM</span></div>
              <div>Sat /Sun / PH: <span className="time-range">10.00 AM - 2.00 PM</span></div>
            </div>
          )}

          <div className="important-desc important-contact">{desc}</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default ImportantInfoContactItem;
