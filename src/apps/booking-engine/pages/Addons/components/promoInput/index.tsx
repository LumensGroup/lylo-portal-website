import { Button, ConfigProvider, Flex, Form, Input } from "antd";
import "./styles.scss";
const ApplyButton = () => (
  <Button htmlType="submit" style={{ marginLeft: 10, height: 40 }}>
    Apply
  </Button>
);

const PromoCodeInput = ({
  setPromoCode,
  promoCodeInputError,
  clearErrorStatus,
}: {
  promoCodeInputError: boolean;
  clearErrorStatus: () => void;
  setPromoCode: (value: string) => void;
}) => {
  const onFinish = (values: any) => {
    const { promoCode } = values;
    setPromoCode(promoCode);
  };

  console.log(promoCodeInputError, "promoCodeInputError");
  return (
    <ConfigProvider
      theme={{
        components: {
          // Button: {
          //   colorPrimary: "#3762F6",
          //   contentFontSize: 16,
          //   fontWeight: 700,
          //   paddingInline: 20,
          //   borderColorDisabled: "#A2B7FF",
          //   defaultBorderColor: "#3762F6",
          //   defaultColor: "#3762F6",
          //   borderRadius: 8,
          //   dangerColor: "#A2B7FF",
          //   colorBgContainerDisabled: "#ffffff",
          //   colorTextDisabled: "#A2B7FF",
          // },
          Form: {
            colorError: "#EB4820",
          },
        },
      }}
    >
      <h2>Promo code</h2>
      <Form style={{ height: 40, marginTop: 8 }} onFinish={onFinish}>
        <Flex align="center">
          <Form.Item
            name="promoCode"
            extra={
              promoCodeInputError && "x Enter a valid promo code or gift card"
            }
            style={{ flex: 1 }}
          >
            <Input
              style={{ fontWeight: "bold", borderRadius: 8 }}
              onChange={() => clearErrorStatus()}
              status={promoCodeInputError ? "error" : ""}
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

export default PromoCodeInput;
