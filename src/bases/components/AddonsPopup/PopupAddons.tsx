import React, { useState } from "react";
import { Button, Flex, Modal, message, notification } from "antd";
import { AddonsItem } from "./AddonsItem";
import "./AddonsItem.scss"
import { getFullUrl } from "@/bases/utils/common";
import { ROUTESMAP } from "@/apps/booking-engine/routes";
import request from "@/bases/request";
import { get } from "lodash";

export const PopupAddons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const [orderId, setOrderId] = useState();

  const creatOrder = ()=>{
    const data = {};
    messageApi.open({
      key,
      type: 'loading',
      content: 'Creating Order...',
    });

    request
      .post("/order/create",data)
      .then((res) => {
        console.log(res);
        
        messageApi.open({
          key,
          type: 'success',
          content: 'Created!',
          // duration: 2,
        });
        const orderId = 4;
        checkOut(orderId);
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });

  }

  const checkOut = (orderId:any)=>{
    const data = {
      order_id: orderId,
      redirect_url: `${getFullUrl(ROUTESMAP.PaySuccess)}?orderId=${orderId}`,
      redirect_error_url: getFullUrl(ROUTESMAP.OrderErrorPage),
      channel: 'HITPAY'
    }
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });

    request
      .post("/payment/checkout",data)
      .then((res) => {
        console.log(res);
        
        messageApi.open({
          key,
          type: 'success',
          content: 'Loaded!',
          // duration: 2,
        });
        const checkoutUrl = get(res, "redirect_url");
        if (!checkoutUrl) return;
        window.location.href = checkoutUrl;
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
    
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    creatOrder();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    creatOrder();
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
    {contextHolder}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={()=>setIsModalOpen(false)}
        maskClosable={true}
        closeIcon={null}
        centered={true}
        footer={footer()}
        title="Frequently bought together"
        open={isModalOpen}
        width={window.innerWidth < 640 ? 390 : 560}
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
