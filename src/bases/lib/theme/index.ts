import type { ThemeConfig } from "antd";
import variables from "../../styles/variables.module.scss";

const theme: ThemeConfig = {
  token: {
    colorPrimary: variables["colors-primary"],
    fontFamily: variables["font-family"],
    fontSize: 14,
    colorBgContainerDisabled: variables["colors-gray-8"],
    colorTextDisabled: variables["colors-black-1"],
  },
  components: {
    Steps: {
      dotSize: 12,
      dotCurrentSize: 12,
    },
    DatePicker: {
      cellHeight: 30,
      cellActiveWithRangeBg: variables["colors-light-blue-2"],
      cellHoverWithRangeBg: variables["colors-light-blue-1"],
    },
    Button: {
      paddingInlineLG: 30,
      paddingInline: 20,
      paddingInlineSM: 10,
    },
  },
};

export default theme;
