import Icon from "@/bases/components/icon";
import { Collapse, Image, Typography } from "antd";
import "./styles.scss";

const SelectCarDetail = () => {
  const descriptionsData = [
    {
      icon: "adult",
      desc: "5 Adults",
    },
    {
      icon: "auto_transmission",
      desc: "Automatic",
    },
    {
      icon: "luggage",
      desc: "2 Luggages",
    },
    {
      icon: "pets",
      desc: "Pet Friendly",
    },
  ];

  const includesData = [
    {
      include: "Comprehensive car insurance",
    },
    {
      include: "Unlimited mileage",
    },
    {
      include: "Entry to West Malaysia",
    },
    {
      include: "24/7 roadside assistance",
    },
  ];

  const renderDescription = () => {
    return descriptionsData?.map((item, index) => {
      return (
        <div key={index} className="addons__desc_item">
          <Icon source={item.icon} className="icon" />
          <Typography>{item.desc}</Typography>
        </div>
      );
    });
  };

  const renderIncluedes = () => {
    return includesData.map((item, index) => {
      return (
        <div key={index} className="addons_includes_items">
          <Icon source="green_check" className="checkIcon" />
          <Typography className="desc">{item.include}</Typography>
        </div>
      );
    });
  };

  const carDetail = (
    <div className="addons__cardetail">
      <Typography.Title level={2}>Honda Fit</Typography.Title>
      <div className="addons__content">
        {" "}
        <Image
          height={137}
          width={206}
          src={require("@/bases/assets/imgs/Car model.jpg")}
        />
        <div className="item-wrapper">{renderDescription()}</div>
      </div>
    </div>
  );

  const packageIncludes = (
    <div className="addons__packageIncludes">
      <Typography.Title level={2}>Package includes</Typography.Title>
      <div className="addons__includesWrapper">{renderIncluedes()}</div>
    </div>
  );

  return (
    <div className="addons__detail">
      <Collapse
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
      >
        <Collapse.Panel header={<h1>Deatils </h1>} key="1">
          {carDetail}
          {packageIncludes}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default SelectCarDetail;
