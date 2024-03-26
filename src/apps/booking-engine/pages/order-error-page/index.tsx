import { Empty } from "antd";

const CUSTOMER_SUPPORT = "+65 8876 1523";

const OrderErrorPage = () => {
  return (
    <Empty>
      <div> 
          Booking Unsuccessful
        </div>
        <div>
            We’re sorry, your booking couldn’t be completed. Try booking again.
        </div>
      
      
        <p>If you need help, feel free to contact our support at</p>
          <a
            href={`tel:${CUSTOMER_SUPPORT.replace(" ", "")}}`}
          >
            {CUSTOMER_SUPPORT}
          </a>
    </Empty>
  );
};

export default OrderErrorPage;
