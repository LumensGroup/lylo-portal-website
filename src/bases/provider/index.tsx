import { ReactNode, useCallback, useLayoutEffect } from "react";
import { useGoogleAnalytics } from "../hooks/google-analytics";
import AntdProvider from "../lib/antd/provider";
import { GlobalStateProvider } from "../store";
import StyleProvider from "./styleProvider";

const MainProvider = ({ children }: { children: ReactNode }) => {
  const { init: initGA } = useGoogleAnalytics();

  const disableZoomOnInputs = useCallback(() => {
    try {
      const headNode = document.getElementsByTagName("head")[0];
      const metaElement = document.createElement("meta");
      metaElement.setAttribute("name", "viewport");
      metaElement.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      );

      headNode.appendChild(metaElement);
    } catch {
      // do nothing
    }
  }, []);

  useLayoutEffect(() => {
    disableZoomOnInputs();
  }, [disableZoomOnInputs]);

  useLayoutEffect(() => {
    initGA();
  }, [initGA]);

  return (
    <AntdProvider>
      <StyleProvider>
        <GlobalStateProvider>{children}</GlobalStateProvider>{" "}
      </StyleProvider>
    </AntdProvider>
  );
};

export default MainProvider;
