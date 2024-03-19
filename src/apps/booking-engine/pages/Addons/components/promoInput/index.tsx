import { Button, ConfigProvider, Flex, Form, Input } from "antd";

const ApplyButton = () => (
  <Button style={{ marginLeft: 10, height: 40 }}>Apply</Button>
);

const PromoCode = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#3762F6",
            contentFontSize: 16,
            fontWeight: 700,
            paddingInline: 20,
            borderColorDisabled: "#A2B7FF",
            defaultBorderColor: "#3762F6",
            defaultColor: "#3762F6",
            borderRadius: 8,
            dangerColor: "#A2B7FF",
            colorBgContainerDisabled: "#ffffff",
            colorTextDisabled: "#A2B7FF",
          },
          Form: {
            colorError: "#EB4820",
          },
        },
      }}
    >
      {" "}
      <Form>
        <Flex align="center">
          <Form.Item
            name="promoCode"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  //   if (value && getFieldValue("promoCode") === value) {
                  //     return Promise.resolve();
                  //   }
                  return Promise.reject(new Error("SDS !"));
                },
              }),
            ]}
          >
            <Input
              style={{ fontWeight: "bold", borderRadius: 8, maxWidth: 170 }}
              // status="error"
            />
          </Form.Item>
          <Form.Item>
            <ApplyButton />
          </Form.Item>
        </Flex>
      </Form>
    </ConfigProvider>
  );
};

export default PromoCode;
