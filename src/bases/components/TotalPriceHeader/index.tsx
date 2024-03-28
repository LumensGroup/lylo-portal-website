import { Button, Flex } from "antd";
import "./index.scss";
import { TCTip } from "@/apps/booking-engine/pages/Addons/components/summary";
import MoneyComponent from "@/apps/booking-engine/pages/Addons/components/money";

interface TotalPriceHeaderProps {
  price: string;
}

const TotalPriceHeader: React.FC<TotalPriceHeaderProps> = ({ price }) => {
  const priceStyle = {
    fontSize: '19px',
    fontWeight: 600,
  };

  const tipsStyle = {
    fontWeight: 500,
  };

  return (
    <div className="top_price_header">
      <h1>
        Total price
      </h1>
      <Flex className="header_price" align="center" vertical>
        <div className="total-price"><MoneyComponent price={price} style={priceStyle} /></div>
        <div className="total-price-unit">(incl. of GST)</div>
      </Flex>

      <Button className="payment-checkout-button">Checkout</Button>
      <TCTip style={tipsStyle}/>
    </div>
  )
}

export default TotalPriceHeader;
