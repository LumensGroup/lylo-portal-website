import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Image, Layout, Menu } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icon from "../icon";
import "./styles.scss";
// import Icon from "../icon";
// import { IconSource } from "base/model";

const { Header, Content } = Layout;

const HeaderlLylo = ({ children }: any) => {
  const items = [
    {
      label: "About",
      // href: "/",
    },
    {
      label: "Rent A Car",
      href: "/carBooking/#/car-select",
    },
    {
      label: "Services",
      href: "/kinto-share-member-tncs",
    },

    {
      label: "Contact",
      href: "/faqs",
    },
  ].map((item) => {
    return (
      <Menu.Item key={item.label}>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span>{item.label}</span>
        )}
      </Menu.Item>
    );
  });

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Layout className="layout-header-container">
      <Header className="layout-header-container__header">
        <Flex style={{ flex: 1 }}>
          <Flex>
            <a href="/">
              <Image
                preview={false}
                className="layout-header-container__header__logo"
                src={require("../../assets/imgs/logo.jpg")}
              />
            </a>
          </Flex>
          <Flex className="menu-toggle">
            {isTabletOrMobile ? (
              <Button
                onClick={showDrawer}
                icon={
                  <MenuOutlined style={{ color: "#00708d", fontSize: 24 }} />
                }
              />
            ) : (
              <>
                <Menu
                  mode="horizontal"
                  className={"custom-menu-header"}
                  selectedKeys={["1"]}
                >
                  {items}
                </Menu>
                <Icon source="leading-icon" className="icon" />
              </>
            )}
          </Flex>
        </Flex>
        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={onCloseDrawer}
          open={drawerVisible}
          className="layout-header__drawer"
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            onClick={onCloseDrawer}
            mode="inline"
          >
            {items}
          </Menu>
        </Drawer>
      </Header>
      <Content className="layout-header-container__content">{children}</Content>
    </Layout>
  );
};

export default HeaderlLylo;
