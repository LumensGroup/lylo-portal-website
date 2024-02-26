import { ConfigProvider } from "antd";
import React from "react";
import theme from "../../theme";

const AntdProvider = ({ children }: React.PropsWithChildren) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default AntdProvider;
