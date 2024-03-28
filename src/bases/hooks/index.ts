import { useCallback } from "react";
import { DynamicAddon, GoogleAnalyticsPayload } from "./types";

declare global {
  interface Window {
    gtag: any;
  }
}

export const useGoogleAnalytics = () => {
  const init = useCallback(() => {
    try {
      const headNode = document.getElementsByTagName("head")[0];
      const scriptElement = document.createElement("script");
      scriptElement.setAttribute(
        "src",
        `${process.env.REACT_APP_GA_CDN_URL}${process.env.REACT_APP_GA_ID}`
      );
      scriptElement.setAttribute("async", "true");

      const scriptElement2 = document.createElement("script");
      scriptElement2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.REACT_APP_GA_ID}');
      `;

      headNode.appendChild(scriptElement);
      headNode.appendChild(scriptElement2);
    } catch {
      // do nothing
    }
  }, []);

  const dispatchEvent = useCallback(
    (payload: GoogleAnalyticsPayload, mainAction: any) =>
      (...arg: any) => {
        try {
          const { eventName, parameters } = payload;
          window.gtag("event", eventName, parameters);
          mainAction?.(...arg);
        } catch {
          // do nothing
        }
      },
    []
  );

  return { init, dispatchEvent };
};

export const UseAddonSeparation = (
  addonsList: DynamicAddon[] | undefined
): { cdwList: DynamicAddon[]; addons: DynamicAddon[] } => {
  const cdwList: DynamicAddon[] = [];
  const addons: DynamicAddon[] = [];

  addonsList?.forEach((item) => {
    if (item.type.indexOf("CDW") !== -1) {
      cdwList.push(item);
    } else {
      addons.push(item);
    }
  });

  return { cdwList, addons };
};
