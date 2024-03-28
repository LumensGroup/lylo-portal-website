import { Button, Divider } from "antd";

import clsx from "clsx";
import React, { useCallback } from "react";
import { CommonProps } from "../../../bases/types/index";
import Icon from "../icon";
import "./styles.scss";

export type StepInfoBarProps = CommonProps & {
  currentIndex: number;
};

const StepInfoBar: React.FC<StepInfoBarProps> = ({ currentIndex = 0 }: any) => {
  const items = [
    {
      title: "Select a car",
      //   href: getFullUrl(ROUTES.ItemsListingPage),
    },
    {
      title: "Choose add-ons",
      current: true,
      //   href: getFullUrl(ROUTES.OrderAddOnsPage),
    },
    {
      title: `Enter driver info`,
      //   href: getFullUrl(ROUTES.OrderDriverInfoPage),
    },
    {
      title: `Make payment`,
      //   href: `#`,
    },
  ];

  const renderItem = useCallback((item: any, index: number) => {
    const finish = index < currentIndex;
    const current = currentIndex === index;
    const last = index === items.length - 1;

    return (
      <div key={index} className="step-item">
        <div className="icon-wrapper">
          <Button
            shape="circle"
            size="large"
            className="icon-wrapper__button"
            disabled
            // href={item.href}
            icon={
              <span
                className={clsx(
                  "icon",
                  current && "current",
                  finish && "finish"
                )}
              >
                {finish && <Icon source="check_circle" className="check" />}
                {current && <span className="dot" />}
              </span>
            }
          />

          {!last && <Divider className="divider" />}
        </div>

        <span
          className={clsx("title", current && "active", finish && "finish")}
        >
          {item.title}
        </span>
      </div>
    );
  }, []);

  return <div className="step-info-bar">{items.map(renderItem)}</div>;
};

export default StepInfoBar;
