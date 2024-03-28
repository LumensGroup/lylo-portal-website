import { Button, Collapse, Space } from "antd";
import "./styles.scss";

import CustomizedCollapse from "@/bases/components/collapse";
import { setOrAddAddon } from "@/bases/store/reducers/selectAddons";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";

const HideButton = ({ title }: { title: string }) => {
  return (
    <Button type="link" className="hideButton">
      {title}
    </Button>
  );
};

const TextArea = () => {
  return (
    <Collapse
      accordion
      ghost
      expandIconPosition="end"
      defaultActiveKey="1"
      expandIcon={({ isActive }) =>
        isActive ? (
          <HideButton title="Hide details" />
        ) : (
          <HideButton title="View details" />
        )
      }
      className="cdw-content-collapse"
    >
      <Collapse.Panel header={<>What is Collision Damage Waiver?</>} key="1">
        <ul>
          <li>
            To protect you from excessive liabilities in the event of a vehicle
            accident, CDW is a compulsory requirement when renting a car with
            Lylo!
          </li>
          <li>
            It is already factored within the daily rental rate and is not an
            additional cost to you.
          </li>
          <li>
            The vehicle excess stated below is the maximum amount you have to
            pay out of pocket in the event of an accident. In the event that the
            cost and losses incurred by the company is less than the excess
            payable, the insurance excess will be refunded to you. All prices
            are subjected to prevailing GST.
          </li>
        </ul>
      </Collapse.Panel>
    </Collapse>
  );
};

const SelectedRadio = ({ active }: { active?: boolean }) => {
  return <div className={clsx("circle", active && "active")} />;
};

const FooterComponent = ({
  price,
  desc,
}: {
  price?: number;
  desc?: string;
}) => {
  if (!price) {
    return <div className="footer-desc">{desc}</div>;
  } else {
    return (
      <div className="footer">
        S$ {price} <span className="footer-unit"> / day</span>
      </div>
    );
  }
};

const CDWCardsArea = ({ direction, cdwList }: any) => {
  const [selectedId, setSelectedId] = useState("1");
  const dispatch = useDispatch();

  const lists = cdwList?.map(
    (item: { name: string; id: string; options: { price: number }[] }) => {
      return {
        title: item?.name,
        id: item?.id,
        price: item?.options[0].price / 100,
        footer: (
          <FooterComponent
            price={item?.options[0].price / 100}
            desc="included"
          />
        ),
      };
    }
  );

  // if (cdwList?.length > 0) {
  //   console.log(cdwList, "cdwList");
  //   dispatch(
  //     setOrAddAddon({
  //       selectedCdw: cdwList?.find((item: { id: string }) => item.id === "1"),
  //     })
  //   );
  // }
  const handleSelect = (item: {
    id: string;
    title: string;
    footer: ReactNode;
  }) => {
    dispatch(setOrAddAddon({ selectedCdw: item }));
    setSelectedId(item?.id);
  };

  return (
    <Space
      className="cdw-card-wrapper"
      size={16}
      direction={direction}
      style={{ display: "flex" }}
    >
      {lists.map((item: { id: string; title: string; footer: ReactNode }) => {
        const { id, title, footer } = item;
        return (
          <div
            className={clsx("card", selectedId === id && "active")}
            key={id}
            onClick={() => handleSelect(item)}
          >
            <div className="title">
              <SelectedRadio active />
              <div style={{ marginLeft: "12px" }}>{title}</div>
            </div>
            {footer}
          </div>
        );
      })}
    </Space>
  );
};
const CDW = ({
  direction,
  cdwList,
}: {
  direction: string;
  cdwList: { [key: string]: any };
}) => {
  return (
    <CustomizedCollapse
      header={<h1>Add-ons 1/2 : Collision Damage Waiver (CDW) </h1>}
    >
      <TextArea />
      <CDWCardsArea direction={direction} cdwList={cdwList} />
    </CustomizedCollapse>
  );
};

export default CDW;
