import React from "react";
import { Image, Flex, Button } from "antd";
import "./AddonsItem.scss";
import PlaceHolder from "@/bases/assets/imgs/windscreen_damage_protection.png";
import PopularStarIcon from "@/bases/assets/imgs/popular_star_icon.svg";

export interface AddonsItemData {
  imgUrl?: string;
  title?: string;
  desc?: string;
  price?: string;
  isPopular: boolean;
  added?:boolean;
}

export const AddonsItem: React.FC<AddonsItemData> = (props) => {
  return (
    <Flex className="add-ons-item-card">
      <div className="add-ons-left-image">
        <Image className="addons-image" preview={false} src={PlaceHolder} />
        {props.isPopular && (
          <Flex className="add-ons-popular-mark" gap={4}>
            <div>Popular</div>
            <Image
              className="addons-star-icon"
              src={PopularStarIcon}
              preview={false}
            />
          </Flex>
        )}
      </div>

      <Flex vertical className="addons-right-content" justify="space-between">
        <Flex vertical gap={12}>
        <div className="addons-title">{props.title}</div>
        <div className="addons-desc">{props.desc}</div>
        </Flex>
        <Flex justify="space-between" align="center">
          <div className="addons-price">{props.price}</div>
          <Button shape="round" 
          className={[props.added ? 'addons-button-remove' : 'addons-button-add','addons-button'].join(' ')} 
          size="large"
          type={props.added ? 'default':'primary'}
          >{props.added ? "Remove" : "Add"}</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
