import Icon from "@/bases/components/icon";
import { Button, Typography } from "antd";
import { useMemo } from "react";

import CustomizedCollapse from "@/bases/components/collapse";
import "./styles.scss";

const ImportantInfo = () => {
  const displayData = useMemo(
    () => [
      {
        icon: "attach_money",
        title: "Security deposit",
        description:
          "Drivers must be 21 years old or above to rent a vehicle, and P-plate drivers are welcome.",
      },
      {
        icon: "tire_repair",
        title: "Security deposit",
        description:
          "Kindly return the vehicle with the same fuel level as when you picked it up to avoid extra charges.",
      },
      {
        icon: "event_busy",
        title: "Cancellation & Refund Policy",
        description:
          "Free cancellation 72 hours before pickup time. Amendments or cancellation within 72 hours of pickup time will cause some penalty. ",
      },
    ],
    []
  );

  const renderTitleAndDescription = (item: any) => (
    // isMobile ? (
    //   <div className="title-and-desc-wrapper">
    //     <Typography className="title">{item.title}</Typography>
    //     <Typography className="description">{item.description}</Typography>
    //   </div>
    // ) : (
    //   <>
    //     <Typography className="title">{item.title}</Typography>
    //     <Typography className="description">{item.description}</Typography>
    //   </>
    //     );
    <div style={{ marginLeft: 20 }}>
      <Typography className="title">{item.title}</Typography>
      <Typography className="description">{item.description}</Typography>
    </div>
  );

  const renderPackageInfoItem = (item: any) => (
    <>
      <div key={`important-info-item-${item.title}`} className="item">
        <Icon source={item.icon} className="icon" />
        {renderTitleAndDescription(item)}
      </div>
      {/* {isMobile && <Divider className="item__divider" />} */}
    </>
  );
  const packageInfo = (
    <div className="important-info__info">
      {displayData?.map(renderPackageInfoItem)}
    </div>
  );
  return (
    <div className="important-info">
      <CustomizedCollapse header={<h1>Important Info</h1>}>
        {packageInfo}
        <Button className="tm-btn">View full Terms & Conditions</Button>
      </CustomizedCollapse>
    </div>
  );
};

export default ImportantInfo;
