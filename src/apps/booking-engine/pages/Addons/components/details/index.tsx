import Icon from "@/bases/components/icon";
import { Image, Typography } from "antd";

import CustomizedCollapse from "@/bases/components/collapse";
import { SelectedCarDetailProps } from "@/bases/types";
import "./styles.scss";

const SelectCarDetail = ({
  selectedCarDetail,
}: {
  selectedCarDetail: SelectedCarDetailProps;
}) => {
  const { name, categories, images, features, metadata } =
    selectedCarDetail as any;

  const currentItem = images?.find((item: { cover: boolean }) => {
    return item.cover === true;
  });
  const currentCategories = categories?.find((item: { type: string }) => {
    return item.type === "SEATING_TYPE";
  });

  const seatNumber = currentCategories?.name?.match(/\d+/)[0];
  const currentItemFeatures = features?.find((item: { slug: string }) => {
    return item?.slug === "luggages";
  });

  const { image_url } = currentItem || {};
  const { value } = currentItemFeatures || {};
  const { packages } = metadata;

  const descriptionsData = [
    {
      icon: "adult",
      desc: `${seatNumber} Adults`,
    },
    {
      icon: "auto_transmission",
      desc: "Automatic",
    },
    {
      icon: "luggage",
      desc: `${value} Luggages`,
    },
    {
      icon: "pets",
      desc: "Pet Friendly",
    },
  ];

  const includesData = packages?.map((item: string) => {
    return { include: item };
  });

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
    return includesData.map((item: { include: string }, index: number) => {
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
      <Typography.Title level={2} style={{ marginTop: "3px" }}>
        {name}
      </Typography.Title>
      <div className="addons__content">
        {" "}
        <Image height={137} width={206} src={image_url} />
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
  const Header = <h1>Details</h1>;

  return (
    <div className="addons__detail">
      <CustomizedCollapse header={Header}>
        {carDetail}
        {packageIncludes}
      </CustomizedCollapse>
    </div>
  );
};

export default SelectCarDetail;
