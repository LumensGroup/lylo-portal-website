import React, { useEffect, useState } from "react";
import { Button, Flex, Modal, message, notification } from "antd";
import { AddonsItem, AddonsItemData } from "./AddonsItem";
import "./AddonsItem.scss";
import { getFullUrl } from "@/bases/utils/common";
import { ROUTESMAP } from "@/apps/booking-engine/routes";
import request from "@/bases/request";
import { get } from "lodash";
import demoData from "./creatorderData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/bases/store/reducers";
import { setOrAddAddon } from "@/bases/store/reducers/selectAddons";
import l_ from "lodash";

export const PopupAddons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addonsData, setAddonsData] = useState<[AddonsItemData]>();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  const { selectedAddons } = useSelector(
    (state: RootState) => state.selectedAddons
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAddons();
  }, []);

  const getAddons = () => {
    request
      .get("/addon/getlist")
      .then((res) => {
        console.log(l_.get(res, "lists"));

        const selectedList = [
          selectedAddons.selectedCdw,
          ...selectedAddons.selectedAddonsItemList,
        ];
        console.log(selectedList);
        const notShowed = l_.differenceBy(
          l_.get(res, "lists"),
          selectedList,
          "id"
        );

        const notShowedAddons = notShowed.map((e,index) => {
          return {
            id: l_.get(e, "id"),
            imgUrl: l_.get(e, "image_url"),
            title: l_.get(e, "name"),
            desc: l_.get(e, "description"),
            price: l_.get(e, "options[0].price"),
            added: false,
            isPopular: index == 0,
            srcData:e
          };
        });
        console.log(notShowedAddons);
        setAddonsData(notShowedAddons as [AddonsItemData]);
      })
      .catch((e) => {
        console.log(get(e, "data.message"));

        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  };

  const creatOrder = () => {
    //TODO fill data
    const selectedAddonsList = [
      selectedAddons.selectedCdw,
      ...selectedAddons.selectedAddonsItemList,
    ];
    const add_on_options = selectedAddonsList.map(e=>{
      return {
        add_on_option_id:e.id,
        quantity: 1,
      }
    });
    const data = { ...demoData, details: [{ item_id: selectedCar.id }],add_on_options };
    messageApi.open({
      key,
      type: "loading",
      content: "Creating Order...",
    });

    request
      .post("/order/create", data)
      .then((res) => {
        console.log(res);

        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            messageApi.open({
              key,
              type: "success",
              content: `Created! After ${
                10 - i
              } seconds will jump to make payment page`,
              duration: 1,
            });
          }, i * 1000);
        }
        setTimeout(() => {
          const orderId = get(res, "id");
          checkOut(orderId);
        }, 10 * 1000);
      })
      .catch((e) => {
        console.log(get(e, "data.message"));

        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  };

  const checkOut = (orderId: any) => {
    const data = {
      order_id: orderId,
      redirect_url: `${getFullUrl(ROUTESMAP.PaySuccess)}?orderId=${orderId}`,
      redirect_error_url: getFullUrl(ROUTESMAP.OrderErrorPage),
      channel: "HITPAY",
    };
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });

    request
      .post("/payment/checkout", data)
      .then((res) => {
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
  };

  const showModal = () => {
    if (l_.isEmpty(addonsData)) {
      creatOrder();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    //TODO update addons
    const popSelected = addonsData?.filter(e=>e.added).map(e=>e.srcData);
    if (popSelected) {
      const data = [...selectedAddons.selectedAddonsItemList,...popSelected];
      dispatch(setOrAddAddon({ selectedAddonsItemList: data }));
    }
    
    creatOrder();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    creatOrder();
  };

  const handleItemAddOrremove = (id: any) => {
    console.log(id);
    const item = addonsData?.find((e) => e.id == id);
    if (item) {
      item.added = !item?.added;
      const updated = addonsData?.map((e) => (e.id == item.id ? item : e));
      setAddonsData(updated as [AddonsItemData]);
    }
  };

  const footer = () => {
    return (
      <Flex gap={16} justify="right">
        <Button
          onClick={handleCancel}
          type="default"
          className="addons-popup-button addons-popup-button-remove"
          size="large"
          shape="round"
        >
          Skip
        </Button>
        <Button 
          disabled
          onClick={handleOk}
          type="primary"
          className="addons-popup-button addons-popup-button-add"
          size="large"
          shape="round"
        >
          Next
        </Button>
      </Flex>
    );
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={() => setIsModalOpen(false)}
        maskClosable={true}
        closeIcon={null}
        centered={true}
        footer={footer()}
        title="Frequently bought together"
        open={isModalOpen}
        width={window.innerWidth < 640 ? 390 : 560}
      >
        <Flex vertical gap={24} align="center">
          {addonsData &&
            addonsData.map((e) => (
              <AddonsItem
                {...e}
                key={e.id}
                onAddOrRemove={handleItemAddOrremove}
              />
            ))}
        </Flex>
      </Modal>
    </>
  );
};
