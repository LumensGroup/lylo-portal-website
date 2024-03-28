import React from "react";
import { Image, Flex, Button } from "antd";
import "./AddonsItem.scss";
import PlaceHolder from "@/bases/assets/imgs/addons_popup_emptyimg.svg";
import PopularStarIcon from "@/bases/assets/imgs/popular_star_icon.svg";

export interface AddonsItemData {
  imgUrl?: string|undefined;
  title?: string|undefined;
  desc?: string|undefined;
  price?: string|undefined;
  isPopular: boolean|undefined;
  added?:boolean|undefined;
  id?:number|undefined;
  onAddOrRemove:any;
  srcData:any;
}

export const AddonsItem: React.FC<AddonsItemData> = (props) => {

  const {imgUrl,price} = props;
  const priceStr = `S$ ${(Number(price)/100).toFixed(2)}`;
  return (
    <Flex className="add-ons-item-card">
      <div className="add-ons-left-image">
        <Image className="addons-image" preview={false} src={imgUrl ? imgUrl : PlaceHolder} />
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
        {/* <div className="addons-desc">{props.desc}</div> */}
        </Flex>
        <Flex className="addons-footer" justify="space-between" align="center">
          <div className="addons-price">{priceStr}</div>
          <Button shape="round" onClick={()=>props.onAddOrRemove(props.id)}
          className={[props.added ? 'addons-popup-button-remove' : 'addons-popup-button-add','addons-popup-button'].join(' ')} 
          size="large"
          type={props.added ? 'default':'primary'}
          >{props.added ? "Remove" : "Add"}</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
