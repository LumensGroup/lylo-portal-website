import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Layout, Menu } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styles.scss";
// import Icon from "../icon";
// import { IconSource } from "base/model";

const { Header, Content, Footer } = Layout;

const HeaderlLylo = ({ children }: any) => {
  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Membership",
      href: "/kinto-share-member-tncs",
    },

    {
      label: "FAQ",
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
              {/* <Image
                preview={false}
                className="layout-header-container__header__logo"
                src={require("base/assets/images/ic_logo_kinto.png")}
              /> */}
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
                  defaultSelectedKeys={["1"]}
                  className={"custom-menu-header"}
                >
                  {items}
                </Menu>
                <Button type="primary" className="contact-btn" href="/contact">
                  Contact Us
                </Button>
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
      <Content>{children}</Content>
      <Footer className="layout-footer">
        {/* <Flex className="layout-footer__copyright">
          <Typography.Text
            ellipsis
            className="layout-footer__copyright__wrapper"
          >
            2024 Lylo Singapore Ptd Ltd{" "}
            <Link
              className="layout-footer__copyright__policy"
              to={"/car-rental"}
            >
              | Privacy Policy
            </Link>{" "}
            <Link
              className="layout-footer__copyright__policy"
              to={"/car-rental"}
            >
              | Terms & Conditions
            </Link>
          </Typography.Text>
        </Flex> */}
        底部区域
      </Footer>
    </Layout>
  );
};

export default HeaderlLylo;
