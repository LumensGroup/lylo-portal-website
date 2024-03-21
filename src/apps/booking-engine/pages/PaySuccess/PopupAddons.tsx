import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import { AddonsItem } from "./AddonsItem";

export const PopupAddons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      imgUrl:"",
      title:"Windscreen damage protection",
      desc:"Windscreen damage is chargeable at $200 per windscreen (subject to GST), add on the protection $15 to waive the charge.",
      price:"S$ 15.00",
      isPopular:true,
      added:true
    },
    {
      imgUrl:"",
      title:"Touch n Go card",
      desc:"Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price:"S$ 3.00",
      isPopular:false
    },
    {
      imgUrl:"",
      title:"LYLO Convenience Pack (Phone holder & charger)",
      desc:"Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price:"S$ 3.00",
      isPopular:false
    },
    {
      imgUrl:"",
      title:"CDW+",
      desc:"Lorem ipsum dolor sit amet consectetur. Elementum urna lectus blandit ultrices sed mi leo nisl.",
      price:"S$ 18.00",
      isPopular:false
    },

  ]

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        closeIcon={null}
        centered={true}
        okText="Next"
        cancelText="Skip"
        title="Frequently bought together"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={654}
      >
        <Flex vertical gap={24}>
          {
            addonsData.map(e=>(
              <AddonsItem {...e} key={e.title}/>
            ))
          }
        </Flex>
      </Modal>
    </>
  );
};
