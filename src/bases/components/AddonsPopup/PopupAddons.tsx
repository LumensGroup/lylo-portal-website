import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import { AddonsItem } from "./AddonsItem";
import "./AddonsItem.scss"

export const PopupAddons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  window.innerWidth;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addonsData = [
    {
      imgUrl: "",
      title: "Windscreen damage protection",
      desc: "Windscreen damage is chargeable at $200 per windscreen (subject to GST), add on the protection $15 to waive the charge.",
      price: "S$ 15.00",
      isPopular: true,
      added: true,
    },
    {
      imgUrl: "",
      title: "Touch n Go card",
      desc: "Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price: "S$ 3.00",
      isPopular: false,
    },
    {
      imgUrl: "",
      title: "LYLO Convenience Pack (Phone holder & charger)",
      desc: "Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price: "S$ 3.00",
      isPopular: false,
    },
    {
      imgUrl: "",
      title: "CDW+",
      desc: "Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price: "S$ 18.00",
      isPopular: false,
    },
  ];

  const footer = ()=>{
    return (
      <Flex gap={16} justify="right">
        <Button onClick={handleCancel} type="default" className="addons-popup-button addons-popup-button-remove" size="large" shape="round">Skip</Button>
        <Button onClick={handleOk} type="primary" className="addons-popup-button addons-popup-button-add" size="large" shape="round">Next</Button>
      </Flex>
    )
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        closeIcon={null}
        centered={true}
        footer={footer()}
        title="Frequently bought together"
        open={isModalOpen}
        width={window.innerWidth < 640 ? 390 : 654}
      >
        <Flex vertical gap={24} align="center">
          {addonsData.map((e) => (
            <AddonsItem {...e} key={e.title} />
          ))}
        </Flex>
      </Modal>
    </>
  );
};
