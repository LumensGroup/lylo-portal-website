import { Flex, Layout } from "antd";
import React from "react";
import "./index.scss";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

export const CheckOutPage = () => {
  return (
    <Layout className="checkout-page">
      <Sider className="checkout-left">
        Left
      </Sider>
      <Content className="checkout-right">Right</Content>
    </Layout>
  );
};
